import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import Select from 'grommet/components/Select'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import CloseIcon from 'grommet/components/icons/base/Close'

import { sidebarModeEnum } from '../../../store/pathway'

const courseCodes = ['MATH4U', 'ENG301']

const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

class CreateNode extends PureComponent {
  constructor () {
    super ()

    this.state = {
      grade: undefined,
      courses: [ this.emptyCourse ]
    }
  }

  get emptyCourse () { 
    return { courseCode: undefined, grade: '' }
  }

  onGradeChange = (evt) => {
    this.setState({ grade: evt.value })
  }

  onMarkChange = (idx, evt) => {
    /**
     * @todo Validate this value
     */
    const value = evt.target.value
    const numberGrade = parseInt(value) || 0


    let newCourses = this.state.courses.map((course, i) => {
      if(i !== idx) return course
      return { ...course, grade: numberGrade }
    })

    this.setState({ courses: newCourses })
  }

  onCourseCodeChange = (idx, evt) => {
    let newCourses = this.state.courses.map((course, i) => {
      if(i !== idx) return course
      return { ...course, courseCode: evt.value }
    })

    this.setState({ courses: newCourses })
  }

  onCourseDelete = (idx) => {
    let newCourses = this.state.courses.filter((_, i) => i !== idx)
    this.setState({ courses: newCourses })
  }

  onAddCourse = () => {
    this.setState({ courses: this.state.courses.concat(this.emptyCourse)})
  }

  renderTableBody = () => {
    const courses = this.state.courses

    let rows = courses.map((course, idx) => (
      <TableRow key={idx}>
        <td>
          <Select 
            options={courseCodes} 
            value={course.courseCode}
            onChange={(evt) => this.onCourseCodeChange(idx, evt)}/>
        </td>
        <td>
          <input
            type='text'
            style={{width: '5em'}}
            disabled={course.courseCode === undefined}
            value={course.grade}
            onChange={(evt) => this.onMarkChange(idx, evt)}/>
        </td>
        <td>
          <Button
            icon={<CloseIcon/>}
            plain
            onClick={() => this.onCourseDelete(idx)}/>
        </td>
      </TableRow>
    ))

    return <tbody>{rows}</tbody>
  }

  render () {
    return (
      <Box>
        <Form>
          <FormField label='Grade'>
            <Select
              placeHolder='none'
              options={grades}
              value={this.state.grade}
              onChange={this.onGradeChange}/>
          </FormField>
        </Form>
        <br/>
        <Title> Courses </Title>
        <Table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Mark(estimated)</th>
              <th>Delete</th>
            </tr>
          </thead>
          { this.renderTableBody() }
        </Table>
        <Button
          onClick={this.onAddCourse}
          label='Add Course'/>
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  sidebar: state.pathway.sidebar,
  pathway: state.pathway.pathway
})

const dispatchToProps = (dispatch) => ({

})

export default connect(stateToProps, dispatchToProps)(CreateNode)
