import React, { PureComponent } from 'react'
import * as RequirementChecker from '../../../utils/gradeRequirementChecker'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

export default class RequiredGradeSidebar extends PureComponent {
  renderTableBody = () => {
    const { courses, required } = this.props

    const rows = required.map((course, idx) => {
      let color = 'orange'

      if (courses) {
        const status = RequirementChecker.matchSingleRequirement(
          course,
          courses
        )

        if (status) color = 'green'
        else color = 'red'
      }

      if (typeof course === 'string') {
        return (
          <TableRow key={idx}>
            <td>{course}</td>
            <td style={{color}}>{'Pass'}</td>
          </TableRow>
        )
      }
      return (
        <TableRow key={idx}>
          <td>{course.course}</td>
          <td style={{color}}>{course.minimum || 'Pass'}</td>
        </TableRow>
      )
    })

    return <tbody>{rows}</tbody>
  }

  render () {
    const status = RequirementChecker.getRequirementStatus(
      this.props.courses,
      { required: this.props.required }
    )

    const color = RequirementChecker.getRequirementColor(status)
    const style = {color}

    let message

    switch (status) {
      case RequirementChecker.requirementStatus.MET:
        message = <h3 style={style}>You have met the requirements for this grade</h3>
        break
      case RequirementChecker.requirementStatus.UNMET:
        message = <h3 style={style}>You dont meet some of the requirements</h3>
        break
      case RequirementChecker.requirementStatus.UNKNOWN:
        message = <h3 style={style}>You have not filled out the information for this node yet</h3>
        break
      default:
        message = <h3 style={style}>You have not filled the information for this node</h3>
        break
    }

    return (
      <Box>
        <h2><b>Grade {this.props.grade}</b></h2>
        {message}
        <br />
        <Title> Courses </Title>
        <Table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Minimum Grade</th>
            </tr>
          </thead>
          {this.renderTableBody()}
        </Table>
      </Box>
    )
  }
}
