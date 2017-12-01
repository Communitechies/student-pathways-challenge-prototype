import React, { PureComponent } from 'react'
import Header from 'grommet/components/Header'
import Headline from 'grommet/components/Headline'
import Box from 'grommet/components/Box'

import Pathway from './Pathway'
import InfoBar from './InfoBar'

export default class MyPath extends PureComponent {
  render () {
    return (
      <Box flex>
        <Header pad='medium' justify='between'>
          <Headline> My Pathway</Headline>
        </Header>
        <Box flex direction='row'>
          <Pathway />
          <InfoBar />
        </Box>
      </Box>
    )
  }
}
