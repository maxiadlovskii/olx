import { FAILED, REQUEST, SUCCESS } from '../../constatnts/actions'
import { getServerData } from '../transports'

export const getDefaultActionsModel = actionConstant => ({
        REQUEST: `${actionConstant}${REQUEST}`,
        SUCCESS: `${actionConstant}${SUCCESS}`,
        FAILURE: `${actionConstant}${FAILED}`
    });
export const getActionsModelWithSameRequestAndFailure = (successConstant, sameConstant) => ({
        REQUEST: `${sameConstant}${REQUEST}`,
        SUCCESS: `${successConstant}${SUCCESS}`,
        FAILURE: `${sameConstant}${FAILED}`
    });

    const requestAction = (REQUEST_ACTION, extraData) => ({
        type: REQUEST_ACTION,
        extraData
    });

    const requestFailure = (FAILURE_ACTION, responseObject) => ({
        type: FAILURE_ACTION,
        payload: responseObject.response,
        extraData: responseObject.extraData,
        request: responseObject.request
    });

    const requestSuccess = (SUCCESS_ACTION, responseObject) => ({
        type: SUCCESS_ACTION,
        payload: responseObject.response,
        extraData: responseObject.extraData
    });

    const dispatcher = async (options, actionConstants, dispatch) => {
        const { extraData, callBacks = {}, asyncAction } = options
        const { REQUEST, SUCCESS, FAILURE } = actionConstants
        dispatch(requestAction(REQUEST, extraData))
        callBacks.REQUEST && (await callBacks.REQUEST({ options }))
        try {
            const response = await asyncAction()
            callBacks.ASYNC_ACTION_SUCCESS && (await callBacks.ASYNC_ACTION_SUCCESS({ response }))
            dispatch(
                requestSuccess(
                    SUCCESS,
                    { response, extraData } // responseObject
                )
            )
            callBacks.SUCCESS && callBacks.SUCCESS({ response })
        } catch (e) {
            dispatch(
                requestFailure(FAILURE, {
                    response: e,
                    extraData
                })
            )
            callBacks.FAILURE && (await callBacks.FAILURE({ response: e }))
        }
    }

export const actionCreator = (options, actionConstants) => dispatch => {
        const { url, params, ...restOptions } = options
        return dispatcher(
            {
                ...restOptions,
                asyncAction: async () => await getServerData(url, params)
            },
            actionConstants,
            dispatch
        )
    };


