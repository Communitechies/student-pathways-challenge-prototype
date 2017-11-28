import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

import { sidebarModeEnum, addNodeToPathway } from '../../../store/pathway'

const coursesList = ['MATH4U', 'ENG301']

const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

class CreateNode extends PureComponent {
  constructor () {
    super ()

    this.state = {
      grade: undefined,
      courses: [ this.emptyCourse ],
      errors: {}
    }
  }

  get emptyCourse () { 
    return { course: undefined, grade: '' }
  }

  onGradeChange = (evt) => {
    this.setState({ 
      grade: evt.value,
      errors: { ...this.state.errors, grade: null }
    })
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

  onCourseChange = (idx, evt) => {
    let newCourses = this.state.courses.map((course, i) => {
      if(i !== idx) return course
      return { ...course, course: evt.value }
    })

    this.setState({ courses: newCourses })
  }

  onCourseDelete = (idx) => {
    let newCourses = this.state.courses.filter((_, i) => i !== idx)
    this.setState({ courses: newCourses })
  }

  onAddCourse = () => {
    this.setState({ 
      courses: this.state.courses.concat(this.emptyCourse)
    })
  }

  onAddNode = () => {
    if(!this.state.grade) {
      return this.setState({ 
        errors: {
          ...this.state.errors,
          grade: 'You must select a grade'
        }
      })
    }

    const [, grade] = this.state.grade.match(/^.* (\d*)$/)
    const courses = this.state.courses

    this.props.actions.addNodeToPathway(grade, courses)
  }

  getFormError = (field) => {
    if (this.state.errors[field]) return this.state.errors[field]
    return undefined
  }

  renderTableBody = () => {
    const courses = this.state.courses

    let rows = courses.map((course, idx) => (
      <TableRow key={idx}>
        <td>
          <Select 
            options={coursesList} 
            value={course.course}
            onChange={(evt) => this.onCourseChange(idx, evt)}/>
        </td>
        <td>
          <input
            type='text'
            style={{width: '5em'}}
            disabled={course.course === undefined}
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
          <FormField label='Grade' error={this.getFormError('grade')}>
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
        <br/>
        <Button
          onClick={this.onAddNode}
          label='Add Year'
          primary/>
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  sidebar: state.pathway.sidebar,
  pathway: state.pathway.pathway
})

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addNodeToPathway }, dispatch)
})

export default connect(stateToProps, dispatchToProps)(CreateNode)
