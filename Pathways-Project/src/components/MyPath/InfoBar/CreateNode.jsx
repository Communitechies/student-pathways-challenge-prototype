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

import CourseMarkTable from './CourseMarkTable'

import { sidebarModeEnum, addNodeToPathway } from '../../../store/pathway'

const coursesList = ['MATH4U', 'ENG301']

const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

class CreateNode extends PureComponent {
  constructor () {
    super ()

    this.state = {
      grade: undefined,
      courses: [],
      errors: {}
    }
  }

  /**
   * Called when the grade level for the node is changed
   * eg. From grade 11 to grade 10
   */
  onGradeChange = (evt) => {
    this.setState({ 
      grade: evt.value,
      errors: { ...this.state.errors, grade: null }
    })
  }

  /**
   * Called when the user clicks add year to add the 
   * node to their pathway
   */
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
        <CourseMarkTable
          onUpdate={courses => this.setState({ courses })}
          courses={this.state.courses}
          courseList={coursesList}/>
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
