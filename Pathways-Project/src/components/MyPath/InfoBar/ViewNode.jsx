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

import { sidebarModeEnum, saveNodeToPathway } from '../../../store/pathway'

const coursesList = ['MATH4U', 'ENG301']

const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

class ViewNode extends PureComponent {
  constructor (props) {
    super ()

    this.state = {
      courses: props.courses
    }
  }

  onSaveChanges = () => {
    const nodeId = this.props.nodeId
    const courses = this.state.courses

    this.props.actions.saveNodeToPathway(nodeId, courses)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ courses: nextProps.courses })
  }

  render () {
    return (
      <Box>
        <Form>
          <Title>Grade {this.props.nodeId}</Title>
        </Form>
        <br/>
        <Title> Courses </Title>
        <CourseMarkTable
          onUpdate={courses => this.setState({ courses })}
          courses={this.state.courses}
          courseList={coursesList}/>
        <br/>
        <Button
          onClick={this.onSaveChanges}
          label='Save Changes'
          primary/>
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  courses: state.pathway.pathway[state.pathway.sidebar.nodeId],
  nodeId: state.pathway.sidebar.nodeId
})

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ saveNodeToPathway }, dispatch)
})



export default connect(stateToProps, dispatchToProps)(ViewNode)
