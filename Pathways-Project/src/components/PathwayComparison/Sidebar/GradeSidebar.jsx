import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

export default class GradeView extends PureComponent {
  renderTableBody = () => {
    const rows = this.props.courses.map((course, idx) => (
      <TableRow key={idx}>
        <td>{course.course}</td>
        <td>{course.grade}</td>
      </TableRow>
    ))

    return <tbody>{rows}</tbody>
  }

  render () {
    return (
      <Box>
        <Header>
          <Title>Grade {this.props.grade}</Title>
        </Header>
        <br />
        <Title> Courses </Title>
        <Table responsive={false}>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          {this.renderTableBody()}
        </Table>
      </Box>
    )
  }
}
