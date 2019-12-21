import { actionCreator, getDefaultActionsModel } from '../../services/actionCreator'
import {GET_DICTIONARIES} from "../../constatnts/actions";
import { API, DICTIONARIES } from '../../constatnts/api'

export const getDictionaries = () =>
    actionCreator(
        {
            url: `${API}${DICTIONARIES}`,
            params: {
                method: 'get'
            }
        },
        getDefaultActionsModel(GET_DICTIONARIES)
    );