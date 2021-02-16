import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Princiapl from './pages/principal/index';

function Routes(){
    return(
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Princiapl}/>
    </Switch>
    </BrowserRouter>
    )
}

export default Routes;