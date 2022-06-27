import { combineReducers } from "redux";
import { customerReducer} from "./customerReducer";

const reducers = combineReducers({
    allCustomers: customerReducer,
});

export default reducers;