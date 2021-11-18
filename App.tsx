import React from 'react';
import MainNavigator from "./src/navigators/MainNavigator/MainNavigator";
import {Provider} from "react-redux";
import store from "./src/store/store";



export default function App() {
    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
}


