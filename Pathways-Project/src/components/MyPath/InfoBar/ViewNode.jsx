import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'

import CourseMarkTable from './CourseMarkTable'

import { sidebarModeEnum, saveNodeToPathway } from '../../../store/pathway'

const coursesList = ['MATH4U', 'ENG301']

class ViewNode extends PureComponent {
  constructor (props) {
    super()

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
        <br />
        <Title> Courses </Title>
        <CourseMarkTable
          onUpdate={courses => this.setState({ courses })}
          courses={this.state.courses}
          courseList={coursesList} />
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
  actions: bindActionCreators({ saveNodeToPathway }, dispatch)
})

export default connect(stateToProps, dispatchToProps)(ViewNode)
