import React, { PureComponent } from 'react';

import Box from 'grommet/components/Box'
import LoginForm from 'grommet/components/LoginForm'
import Heading from 'grommet/components/Heading'

export default class Login extends PureComponent {
  onSubmitLogin = () => {
    this.props.history.push('/mypath')
  }
  render () {
    return (
      <Box 
        justify='center' 
        align='center' 
        alignContent='center' 
        flex='grow' 
        style={{height: '100vh', width: '100vw'}}
        texture='images/loginBackground.jpeg'>
        <Box 
          pad='medium' 
          style={{backgroundColor: 'rgba(0,0,0,0.6)'}}
          align='center'>
          <Heading align='center' style={{color: 'white'}}>Ontario Student Pathways</Heading>
          <LoginForm onSubmit={this.onSubmitLogin}/>
        </Box>
      </Box>
    )
  }
}
