import React, { Component} from 'react';
import './App.css'
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Main'
import {Link} from 'react-router-dom'

class App extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div style={{height: '1000px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className='header-color'>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
        <Main/>
        </Content>
    </Layout>

</div>
    )
  }
}
export default App