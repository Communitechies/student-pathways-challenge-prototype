import React, { PureComponent } from 'react'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'

export default class MyPath extends PureComponent {
  render () {
    return (
      <Box>
        <Header pad='medium' justify='between'>
          <Title> My Pathway</Title>
        </Header>
      </Box>
    )
  }
}
