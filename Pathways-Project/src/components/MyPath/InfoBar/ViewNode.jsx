import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'

import CourseMarkTable from './CourseMarkTable'
import courses from './courses'

import { saveNodeToPathway, deleteNodeFromPathway } from '../../../store/pathway'

class ViewNode extends PureComponent {
  constructor (props) {
    super()

    this.state = {
      courses: props.courses
    }
  }

  getCourseSuggestions () {
    const grade = `Grade ${this.props.nodeId}`
    const allCourses = courses[grade]

    if (!allCourses) return []

    return allCourses.filter(course => (
      this.state.courses.findIndex(c => c.course === course) === -1
    ))
  }

  onSaveChanges = () => {
    const nodeId = this.props.nodeId
    const courses = this.state.courses

    const filteredCourses = courses.filter(c => c.grade !== '')

    this.props.actions.saveNodeToPathway(nodeId, filteredCourses)
  }

  onDeleteNode = () => {
    const nodeId = this.props.nodeId
    this.props.actions.deleteNodeFromPathway(nodeId)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ courses: nextProps.courses })
  }

  render () {
    return (
      <Box>
        <Box justify='between' align='center' alignContent='center' direction='row'>
          <h2 style={{padding: 0, margin: 0}}><b>Grade {this.props.nodeId}</b></h2>
          <Button
            onClick={this.onDeleteNode}
            label='Delete Node'
            critical />
        </Box>
        <br />
        <h3> Courses </h3>
        <CourseMarkTable
          onUpdate={courses => this.setState({ courses })}
          courses={this.state.courses}
          courseList={this.getCourseSuggestions()} />
        <br />
        <Button
          onClick={this.onSaveChanges}
          label='Save Changes'
          primary />
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  courses: state.pathway.pathway[state.pathway.sidebar.nodeId],
  nodeId: state.pathway.sidebar.nodeId
})

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ saveNodeToPathway, deleteNodeFromPathway }, dispatch)
})

export default connect(stateToProps, dispatchToProps)(ViewNode)
