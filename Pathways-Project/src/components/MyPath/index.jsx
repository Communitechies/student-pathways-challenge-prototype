import React, { PureComponent } from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'

import Pathway from './Pathway'
import InfoBar from './InfoBar'

export default class MyPath extends PureComponent {
  render () {
    return (
      <Box flex='grow'>
        <Header pad='medium' justify='between'>
          <Title> My Pathway</Title>
        </Header>
        <Box flex='grow' direction='row'>
          <Pathway />
          <InfoBar />
        </Box>
      </Box>
    )
  }
}
