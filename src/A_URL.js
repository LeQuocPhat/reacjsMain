import React from 'react';
import A_menu from './A_menu';
import A_service from './A_service';
import A_spaces from './A_spaces';
import { Route, Switch } from 'react-router-dom';
// import A_Register from './A_Register';
// import A_login from './A_login';
import Body from './Body';

class A_URL extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/Service" component={A_service} />
                    <Route exact path="/Banquet hall" component={A_spaces} />
                    <Route exact path="/Menu" component={A_menu} />
                    {/* <Route exact path="/register" component={A_Register} /> */}
                    {/* <Route exact path="/login" component={A_login} /> */}
                </Switch>
            </div>
        );
    }
}

export default A_URL;