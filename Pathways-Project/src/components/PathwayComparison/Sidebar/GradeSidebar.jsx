import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
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

  getAverage = () => {
    const total = this.props.courses.reduce((pre, curr) => pre + curr.grade, 0)
    const avg = total / (this.props.courses.length | 1)

    return Math.round(avg * 10) / 10
  }

  render () {
    return (
      <Box>
        <h2><b>Grade {this.props.grade}</b></h2>
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

        <b>
          Average: {this.getAverage()}
        </b>
      </Box>
    )
  }
}
