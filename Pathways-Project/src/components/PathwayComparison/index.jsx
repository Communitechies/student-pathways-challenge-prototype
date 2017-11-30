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

import PathwayGraph from '../PathwayGraph'
import PathwayDiffer from './PathwayDiffer'

class PathwayComparison extends PureComponent {
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

  renderComparisonPathways = () => {
    const jobPathways = this.props.jobPathways

    return jobPathways.map(jp => (
      <PathwayDiffer
        studentPathway={this.props.userPathway}
        selectedPathway={jp} />
    ))
  }

  renderSideBar = () => {
    return ''
  }

  render () {
    const { edges, nodes } = this.createNodesAndEdges()

    return (
      <Box flex='grow'>
        <Header pad='medium' justify='between'>
          <Title>Comparing your pathway</Title>
        </Header>
        <Box flex='grow' direction='row'>
          <Box direction='column'>
            <Header pad='medium'><Title>Your Current Pathway</Title></Header>
            <PathwayGraph edges={edges} nodes={nodes} />
          </Box>
          {
            this.renderComparisonPathways()
          }
          {
            this.renderSideBar()
          }
        </Box>
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  userPathway: state.pathway.pathway,
  jobPathways: state.jobPathway.pathways
})

const dispatchToProps = (dispatch) => ({

})

export default connect(stateToProps, dispatchToProps)(PathwayComparison)
