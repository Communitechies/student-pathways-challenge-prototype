import React, { PureComponent } from 'react'
import PathwayGraph from '../PathwayGraph'

export default class PathwayDiffer extends PureComponent {
  requirementStatus = {
    'MET': 'MET',
    'UNMET': 'UNMET',
    'UNKNOWN': 'UNKNOWN'
  }

  getRequirementStatus (courses, required) {
    return this.requirementStatus.MET
  }

  getRequirementColor (requirement) {
    switch (requirement) {
      case this.requirementStatus.MET: return 'green'
      case this.requirementStatus.UNMET: return 'red'
      case this.requirementStatus.UNKNOWN: return 'yellow'
      default: return undefined
    }
  }

  parseNodesAndEdges () {
    const nodes = []
    const edges = []

    const levels = ['9', '10', '11', '12']

    levels.forEach(level => {
      const id = level

      const reqStatus = this.getRequirementStatus(
        this.props.studentPathway[level],
        this.props.selectedPathway[level]
      )

      nodes.push({
        id,
        label: `Grade ${level}`,
        color: { border: this.getRequirementColor(reqStatus) }
      })
    })

    edges.push(
      { from: '9', to: '10' },
      { from: '10', to: '11' },
      { from: '11', to: '12' }
    )

    nodes.push({
      id: 'J',
      label: 'Job'
    })

    this.props.selectedPathway.SE.forEach((program, i) => {
      const id = `SE[${i}]`

      nodes.push({
        id,
        label: `${program.programName}`
      })

      edges.push({ from: '12', to: id }, { from: id, to: 'J' })
    })

    return { nodes, edges }
  }

  render () {
    const { nodes, edges } = this.parseNodesAndEdges()
    return (
      <PathwayGraph nodes={nodes} edges={edges} />
    )
  }
}
