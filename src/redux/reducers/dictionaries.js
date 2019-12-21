import { GET_DICTIONARIES, SUCCESS, REQUEST, FAILED } from '../../constatnts/actions'
import { dictionaries } from '../../constatnts/beModels'
const initState = {
    collections: {
        [dictionaries.CARS]: [],
        [dictionaries.OS]: [],
        [dictionaries.VALUE_TYPES]: [],
    },
    isFailed: false,
    isFetching: false
}

export default (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case `${GET_DICTIONARIES}${REQUEST}`:
            return ({
                ...state,
                isFailed: false,
                isFetching: true
            });
        case `${GET_DICTIONARIES}${SUCCESS}`:
            return ({
                ...state,
                collections: {
                    ...payload.data,
                },
                isFailed: false,
                isFetching: true
            });
        case `${GET_DICTIONARIES}${FAILED}`:
            return ({
                ...state,
                ...initState,
                isFailed: true,
                isFetching: false
            });
        default:
            return state
    }
}

