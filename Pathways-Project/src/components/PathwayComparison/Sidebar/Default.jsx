import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

export default class GradeView extends PureComponent {
  render () {
    return (
      <Box alignSelf='center'>
        <Paragraph size='xlarge'>
          Click on a node to learn more about it
        </Paragraph>
      </Box>
    )
  }
}
