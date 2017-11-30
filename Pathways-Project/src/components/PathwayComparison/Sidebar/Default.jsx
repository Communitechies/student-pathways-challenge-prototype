import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'

export default class GradeView extends PureComponent {
  render () {
    return (
      <Box alignSelf='center'>
        <Title>
          Click on a node to learn more about it
        </Title>
      </Box>
    )
  }
}
