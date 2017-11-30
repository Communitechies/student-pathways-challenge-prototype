import React, { PureComponent } from 'react'
import PathwayGraph from '../PathwayGraph'

export default class PathwayDiffer extends PureComponent {
  requirementStatus = {
    'MET': 'MET',
    'UNMET': 'UNMET',
    'UNKNOWN': 'UNKNOWN'
  }

  checkCourseSatisfied (courses, courseCode, grade = 50) {
    const course = courses.find(c => c.course === courseCode)
    return course && course.grade >= grade
  }

  getRequirementStatus (courses, requiredGrade) {
    if (!courses) {
      return this.requirementStatus.UNKNOWN
    }
    if (!requiredGrade) {
      return this.requirementStatus.MET
    }

    const required = requiredGrade.required
    const gradesMet = required.every(ele => {
      if (typeof ele === 'string') {
        if (ele.search(' or ')) {
          const [, course1, course2] = ele.match(/(.*) or (.*)/)
          return this.checkCourseSatisfied(courses, course1) ||
            this.checkCourseSatisfied(courses, course2)
        }
        return this.checkCourseSatisfied(courses, ele)
      }

      return this.checkCourseSatisfied(courses, ele.course, ele.minimum)
    })

    return gradesMet ? this.requirementStatus.MET : this.requirementStatus.UNMET
  }

  getRequirementColor (requirement) {
    switch (requirement) {
      case this.requirementStatus.MET: return 'green'
      case this.requirementStatus.UNMET: return 'red'
      case this.requirementStatus.UNKNOWN: return null
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
