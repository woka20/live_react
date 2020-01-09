import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import {Provider} from 'unistore/react'
import CategoryRomance from "../components/CategoryRomance"
import CategoryAction from "../components/CategoryAction"
import CategoryComedy from "../components/CategoryComedy"
import CategoryFiction from "../components/CategoryFiction"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"

class MainRoute extends React.Component{
    render(){
        return (
            <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/comedy" component={CategoryComedy}/>
                <Route exact path="/romance" component={CategoryRomance}/>
                <Route exact path="/action" component={CategoryAction}/>
                <Route exact path="/fiction" component={CategoryFiction}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/profile" component={Profile}/>
                {/* <Route path="/:category" component={SignIn}/> */}
            </Switch>
        </Router>)


    }
    


}

export default MainRoute;