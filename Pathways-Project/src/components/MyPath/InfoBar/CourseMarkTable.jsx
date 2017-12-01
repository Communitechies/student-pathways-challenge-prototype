import React, { PureComponent } from 'react'
import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import Select from 'grommet/components/Select'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'
import Button from 'grommet/components/Button'
import CloseIcon from 'grommet/components/icons/base/Close'
import SearchInput from 'grommet/components/SearchInput'

export default class CourseMarkTable extends PureComponent {
  get emptyCourse () {
    return { course: undefined, grade: '' }
  }

  onMarkChange = (idx, evt) => {
    /**
     * @todo Validate this value
     */
    const value = evt.target.value
    const numberGrade = parseInt(value) || 0

    let newCourses = this.props.courses.map((course, i) => {
      if (i !== idx) return course
      return { ...course, grade: numberGrade }
    })

    this.props.onUpdate(newCourses)
  }

  onCourseChange = (idx, evt) => {
    let newCourses = this.props.courses.map((course, i) => {
      if (i !== idx) return course
      return { ...course, course: evt.value }
    })

    this.props.onUpdate(newCourses)
  }

  onAddCourse = () => {
    const courses = this.props.courses
    this.props.onUpdate(courses.concat(this.emptyCourse))
  }

  onCourseDelete = (idx) => {
    let newCourses = this.props.courses.filter((_, i) => i !== idx)
    this.props.onUpdate(newCourses)
  }

  renderTableBody = () => {
    const { courses, courseList } = this.props

    let rows = courses.map((course, idx) => (
      <TableRow key={idx}>
        <td>
          <Select
            options={courseList}
            value={course.course}
            onChange={(evt) => this.onCourseChange(idx, evt)} />
        </td>
        <td>
          <input
            type='text'
            style={{ width: '5em' }}
            disabled={course.course === undefined}
            value={course.grade}
            onChange={(evt) => this.onMarkChange(idx, evt)} />
        </td>
        <td>
          <Button
            icon={<CloseIcon />}
            plain
            onClick={() => this.onCourseDelete(idx)} />
        </td>
      </TableRow>
    ))
    return <tbody>{rows}</tbody>
  }

  render () {
    return (
      <Box>
        <Table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Mark(estimated)</th>
              <th>Delete</th>
            </tr>
          </thead>
          {this.renderTableBody()}
        </Table>
        <Button
          onClick={this.onAddCourse}
          label='Add Course' />
      </Box>
    )
  }
}
