import React from 'react';
import {Route} from 'react-router-dom';


import {Header} from './componets';
import {Main, Cart} from './pages';

import {IntercomProvider} from "react-use-intercom";
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
    return (
        <div className="wrapper">
            <Provider store={store}>
                <Header/>
                <div>
                    <IntercomProvider appId={"lvc833bw"}>
                        <Route path="/" component={Main} exact/>
                        <Route path="/cart" component={Cart} exact/>
                    </IntercomProvider>
                </div>
            </Provider>
        </div>
    )
}

export default App;
