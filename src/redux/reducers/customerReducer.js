import { ActionTypes } from "../constants/action-types"

const initialState = {
    customers:[
        {
            id: 1,
            name: "Sachit",
            lastName: "Yadav",
        },
    ],
}
export const customerReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_CUSTOMER:
            return state;
        default:
            return state;
    }
}