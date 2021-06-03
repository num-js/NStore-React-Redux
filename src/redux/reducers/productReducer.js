import { ActionTypes } from "../actionContants/productActionTypes";

const initialState = {
    products: [
        {
            id: 1,
            name: 'Num',
            pro: 'Full Stack'
        }
    ]
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}