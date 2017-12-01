import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Headline from 'grommet/components/Headline'

import PathwayGraph from '../PathwayGraph'
import PathwayDiffer from './PathwayDiffer'

import GradeSidebar from './Sidebar/GradeSidebar'
import DefaultSidebar from './Sidebar/Default'
import RequiredGradeSidebar from './Sidebar/RequiredGradeSidebar'
import JobSidebar from './Sidebar/JobSidebar'
import PostSecondarySidebar from './Sidebar/PostSecondarySidebar'

class PathwayComparison extends PureComponent {
  state = {
    sidebarType: 'none',
    sidebarInfo: {}
  }

  createNodesAndEdges = () => {
    const pathway = this.props.userPathway
    const nodes = []
    const grades = ['9', '10', '11', '12']

    grades.forEach(v => {
      if (v in pathway) {
        nodes.push({ id: v, label: `Grade ${v}` })
      }
    })

    const edges = []

    for (let x = 1; x < nodes.length; x++) {
      edges.push({ from: nodes[x - 1].id, to: nodes[x].id })
    }

    return { edges, nodes }
  }

  onPersonalGradeClicked = (id) => {
    const info = this.props.userPathway[id]
    this.setState({ sidebarType: 'HIGHSCHOOL', sidebarInfo: { grade: id, courses: info } })
  }

  onSelectedPathwayClick = (idx, id) => {
    const info = _.get(this.props.jobPathways[idx], id)

    if (id.startsWith('SE')) {
      return this.setState({ sidebarType: 'POST_SECONDARY', sidebarInfo: info })
    }

    if (id.startsWith('J')) {
      return this.setState({ sidebarType: 'JOB', sidebarInfo: info })
    }

    return this.setState({ sidebarType: 'REQUIRED_HIGHSCHOOL', sidebarInfo: { grade: id, required: info ? info.required : [] } })
  }

  renderComparisonPathways = () => {
    const jobPathways = this.props.jobPathways

    return jobPathways.map((jp, idx) => (
      <PathwayDiffer
        studentPathway={this.props.userPathway}
        selectedPathway={jp}
        onSelectNode={(id) => this.onSelectedPathwayClick(idx, id)}
      />
    ))
  }

  renderSideBar = () => {
    const info = this.state.sidebarInfo

    switch (this.state.sidebarType) {
      case 'HIGHSCHOOL': return <GradeSidebar grade={info.grade} courses={info.courses} />
      case 'REQUIRED_HIGHSCHOOL': return <RequiredGradeSidebar grade={info.grade} required={info.required} courses={this.props.userPathway[info.grade]} />
      case 'JOB': return <JobSidebar info={info} />
      case 'POST_SECONDARY': return <PostSecondarySidebar info={info} />
      default: return <DefaultSidebar />
    }
  }

  render () {
    const { edges, nodes } = this.createNodesAndEdges()
    const jobName = this.props.jobPathways[0].name

    return (
      <Box full='vertical'>
        <Header pad='medium' justify='between'>
          <Headline>Comparing your pathway</Headline>
        </Header>
        <Box flex direction='row' justify='between'>
          <Box direction='column' separator='all'>
            <Header pad='medium'>
              <Title>Your Current Pathway</Title>
            </Header>
            <PathwayGraph edges={edges} nodes={nodes} onSelectNode={this.onPersonalGradeClicked} />
          </Box>
          <Box direction='column' seperator='all' flex>
            <Header pad='medium' flex justify='center'>
              <Title> Pathways for
                <span style={{textDecoration: 'underline'}}>{jobName}</span> </Title>
            </Header>
            <Box direction='row' flex>
              {
                this.renderComparisonPathways()
              }
            </Box>
          </Box>
          <Box style={{backgroundColor: 'lightgray'}} pad='medium' basis='1/4'>
            {
              this.renderSideBar()
            }
          </Box>
        </Box>
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  userPathway: state.pathway.pathway,
  jobPathways: state.jobPathway.pathways
})
const dispatchToProps = (dispatch) => ({})

export default connect(stateToProps, dispatchToProps)(PathwayComparison)
