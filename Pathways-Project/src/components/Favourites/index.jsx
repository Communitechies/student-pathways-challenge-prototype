import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Table from 'grommet/components/Table'
import TableHeader from 'grommet/components/TableHeader'
import TableRow from 'grommet/components/TableRow'
import Article from 'grommet/components/Article'
import Paragraph from 'grommet/components/Paragraph'
import JobSidebar from './JobSidebar'

import { loadPathways } from '../../store/jobPathway'
import redHeart from '../../assets/redHeart30x30.png'
import './index.css'

class SearchPathways extends PureComponent {
  constructor (props) {
    super()

    const { pathways } = props
    this.columns = [
      {label: 'Job Title/Program Name', sort: 'name'},
      {label: 'Type', sort: 'type'},
      {label: 'Career Field', sort: 'field'},
      {label: 'Favourite', sort: 'favourite'}
    ]
    this.state = {
      pathways: [],
      searchText: '',
      details: null,
      currentKey: -1,
      Job: ''
    }
  }

  componentDidMount () {
    // this.props.actions.loadPathways()
    fetch('/api/v1/user/favourite')
      .then(results => results.json())
      .then(data => {
        const pathways = data.filter((pathway) => pathway.favourite)
        this.setState({ pathways })
      })
  }

  fetchDetails (pathway) {
    fetch('/api/v1/pathways/' + pathway.key)
      .then(data => data.json())
      .then(data => {
        console.log(data.pathway)
        this.setState({ details: data.pathway[0].J, Job: pathway.pathway })
      })
  }

    generateTableRows = () => {
      let searchText = this.state.searchText.toLowerCase()
      let pathways = this.state.pathways
      if (searchText) {
        pathways = pathways.filter((pathway) => {
          return pathway.pathway.toLowerCase().indexOf(searchText) !== -1
          // pathways.includes(pathway.pathway.toLowerCase(), searchText)
        })
      }
      return pathways ? pathways.map((pathway) => {
        return (

          <TableRow className='table-row' onClick={() => {
            // this.setState({ currentKey: pathway.key });
            this.fetchDetails(pathway)
          }
          }>
            <td style={{cursor: 'pointer'}} key={pathway.pathway}>{pathway.pathway}</td>
            <td>Job</td>
            <td>{pathway.career}</td>
            <td><img src={redHeart} /> </td>

          </TableRow>
        )
      }) : null
    };

    handleSearchChange = (ev) => {
      this.setState({searchText: ev.target.value.trim()})
    };

    render () {
      return (
        <Box direction='row' full='vertical'>
          <Box direction='column' flex>
            <Box direction='column'>
              <Header pad='medium' justify='between'>
                <Title> Favourites</Title>
              </Header>
              <Box flex='grow' direction='row'>
                <Search
                  fill
                  inline
                  placeHolder='Search'
                  size='large'
                  iconAlign='start'
                  value={this.state.searchText}
                  onDOMChange={this.handleSearchChange} />
              </Box>
            </Box>
            <Table>
              <TableHeader labels={this.columns.map(v => v.label.toUpperCase())} />
              <tbody>
                {this.generateTableRows()}
              </tbody>
            </Table>
          </Box>
          <Box basis='1/3' pad='medium' style={{border: 'solid 1 px black', backgroundColor: 'lightgray', overflowY: 'scroll'}}>

            <JobSidebar details={this.state.details} />

          </Box>

        </Box>
      )
    }
}

const stateToProps = (state) => ({
  pathways: state.jobPathway.pathways
})

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadPathways }, dispatch)
})

export default connect(stateToProps, dispatchToProps)(SearchPathways)
