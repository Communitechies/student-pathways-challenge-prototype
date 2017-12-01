import React, { PureComponent } from 'react'

import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'
import Button from 'grommet/components/Button'
import Paragraph from 'grommet/components/Paragraph'
export default class JobSidebar extends PureComponent {
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
    const details = this.props.details

    if (!details) {
      return (
        <Box>
          <Header>
            <Title>Details</Title>
          </Header>
          <Paragraph
            margin='medium'
            size='large'
            style={{padding: 16}}>
          Select a pathway for more details.
          </Paragraph>

        </Box>
      )
    }

    const {
      name,
      salaryRange,
      automationRisk,
      description,
      otherJobs
    } = details

    return (
      <Box>
        <Header>
          <Title>{name}</Title>
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
            {this.renderRow('Salary Range', salaryRange)}
            {this.renderRow('Automation Risk', automationRisk)}
            {this.renderRow('Description', description)}
            {this.renderRow('Other Jobs', otherJobs)}
          </tbody>
        </Table>
        <Button
          accent
          label='View Pathway'
          style={{marginLeft: '16px'}}
          path={`/comparison`} />
      </Box>
    )
  }
}
