import React from 'react'
import {Grid, Cell} from 'react-mdl'

class LandingPage extends React.Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                    <img 
                    src="https://www.pngkey.com/png/detail/804-8049827_input-black-male-avatar.png"
                    alt='avatar'
                    className='img'
                    />
                        <div className='banner-text'>
                        <h1>Aaron Bevans</h1>
                        <h1>Front End Web Developer</h1>
                        <hr/>
                        <p>HTML5/CSS3 | JavaScript | React.js | Node.js</p>
                        </div>
                        <div className='social-links'>

                        <a 
                        href='http://github.com' 
                        rel='noopener noreferrer' 
                        target='_blank'
                        >

                        <i className='fa fa-github-square' aria-hidden='true'/>
                        </a>

                        <a 
                        href='http://freecodecamp.com' 
                        rel='noopener noreferrer' 
                        target='_blank'
                        >

                        <i className='fa fa-free-code-camp' aria-hidden='true'/>
                        </a>

                        <a 
                        href='http://linkedin.com' 
                        rel='noopener noreferrer' 
                        target='_blank'
                        >

                        <i className='fa fa-linkedin-square' aria-hidden='true'/>
                        </a>

                        <a 
                        href='http://facebook.com' 
                        rel='noopener noreferrer' 
                        target='_blank'
                        >

                        <i className='fa fa-facebook-square' aria-hidden='true'/>
                        </a>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage