import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

export default class PostSecondarySidebar extends PureComponent {
  render () {
    const {
      programName,
      institution,
      description,
      classSize,
      tuition,
      average,
      ProgramType
    } = this.props.info

    const school = this.props.university || this.props.college

    return (
      <Box>
        <Header>
          <Title>{programName}</Title>
          <Title>{school}</Title>
        </Header>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
        </Table>
      </Box>
    )
  }
}
