import { ActionTypes } from "../constants/action-types"
export const SetCustomer = (customers) => {
    return {
        type: ActionTypes.SET_CUSTOMER,
        payload: customers,
    };
};

export const selectedCustomer = (customer) => {
    return {
        type: ActionTypes.SELECTED_CUSTOMER,
        payload: customer,
    };
};