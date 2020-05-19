import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
import {Switch, Route} from 'react-router-dom'

const Main =()=>(
    <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route exact path = '/AboutMe' component={AboutMe}/>
        <Route exact path = '/Resume' component={Resume}/>
        <Route exact path = '/Projects' component={Projects}/>
        <Route exact path = '/Contact' component={Contact}/>
    </Switch>
)
export default Main