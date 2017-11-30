import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

export default class PostSecondarySidebar extends PureComponent {
  renderRow = (key, value) => {
    if (!value) return null

    let cellValue

    if (typeof value === 'string') {
      cellValue = value
    } else if (Array.isArray(value)) {
      cellValue = value.join('\n')
    }

    return (
      <TableRow key={key}>
        <td style={{display: 'block'}}><b>{key}</b></td>
        <td>{cellValue}</td>
      </TableRow>
    )
  }

  render () {
    const {
      programName,
      institution,
      description,
      classSize,
      tuition,
      average,
      programType
    } = this.props.info

    const school = this.props.university || this.props.college

    return (
      <Box>
        <Header>
          <Title>{programName}</Title>
          <Title>{school}</Title>
        </Header>
        <br />
        <Table>
          <thead>
            <tr>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.renderRow('Institution Type', institution)}
            {this.renderRow('Description', description)}
            {this.renderRow('Class Size', classSize)}
            {this.renderRow('Tuition Cost', tuition)}
            {this.renderRow('Admission Average', average)}
            {this.renderRow('Program Type', programType)}
          </tbody>
        </Table>
      </Box>
    )
  }
}
