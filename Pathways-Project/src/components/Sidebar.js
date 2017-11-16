import React, { PureComponent } from 'react'
import GrommetSidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'

export default class Sidebar extends PureComponent {
  render () {
    return (
      <GrommetSidebar colorIndex='neutral-1'>
        <Header pad='medium' justify='between'>
          <Title> Student Pathways</Title>
        </Header>
        <Box>
          
        </Box>
      </GrommetSidebar>
    )
  }
}
