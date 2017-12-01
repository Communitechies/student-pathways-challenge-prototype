import React, { PureComponent } from 'react'
import PathwayGraph from '../PathwayGraph'
import * as RequirementChecker from '../../utils/gradeRequirementChecker'

export default class PathwayDiffer extends PureComponent {
  parseNodesAndEdges () {
    const nodes = []
    const edges = []

    const levels = ['9', '10', '11', '12']

    levels.forEach(level => {
      const id = level

      const reqStatus = RequirementChecker.getRequirementStatus(
        this.props.studentPathway[level],
        this.props.selectedPathway[level]
      )

      nodes.push({
        id,
        label: `Grade ${level}`,
        color: { border: RequirementChecker.getRequirementColor(reqStatus) }
      })
    })

    edges.push(
      { from: '9', to: '10' },
      { from: '10', to: '11' },
      { from: '11', to: '12' }
    )

    nodes.push({
      id: 'J',
      label: '   Job'
    })

    this.props.selectedPathway.SE.forEach((program, i) => {
      const id = `SE[${i}]`
      nodes.push({
        id,
        label: `${program.label}`
      })
      edges.push({ from: '12', to: id }, { from: id, to: 'J' })
    })
    return { nodes, edges }
  }

  onSelectNode = (id) => {

  }

  render () {
    const { nodes, edges } = this.parseNodesAndEdges()
    return (
      <PathwayGraph nodes={nodes} edges={edges} onSelectNode={this.props.onSelectNode} />
    )
  }
}
