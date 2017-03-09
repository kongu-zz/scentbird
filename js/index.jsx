import React from "react";
import {render} from "react-dom";
import thunk from "redux-thunk";
import {applyMiddleware, createStore, combineReducers} from "redux";
import {connect, Provider} from "react-redux";
import {reducer as formReducer} from "redux-form";
import {composeWithDevTools} from "redux-devtools-extension";

import {PaymentPageLayout} from "./PaymentPage/Components/PaymentPageLayout";

let reducersCombination = combineReducers({
    form: formReducer
});


let middleware = composeWithDevTools({})(applyMiddleware(
    thunk
));

const store = createStore(
    reducersCombination,
    middleware
);

render(
    <Provider store={store}>
        <PaymentPageLayout/>
    </Provider>,
    document.getElementById("app")
);

