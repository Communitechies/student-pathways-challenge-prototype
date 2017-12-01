import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Article from 'grommet/components/Article';
import Paragraph from 'grommet/components/Paragraph'
import Heart from 'grommet/components/icons/base/Favorite'
import Button from 'grommet/components/Button'

import { loadPathways, loadPathwayDetails } from '../../store/jobPathway'

import './style.css'

class SearchPathways extends PureComponent {

  constructor(props) {
    super();

    const {pathways} = props;
    this.columns = [
      {label: 'Job Title/Program Name', sort: 'name'},
      {label: 'Type', sort: 'type'},
      {label: 'Career Field', sort: 'field'},
      {label: 'Favourite', sort: 'favourite'}
    ];
    this.state = {
      pathways: [],
      searchText: '',
    };
  }

  componentDidMount() {
    this.props.actions.loadPathways()
  }

  generateTableRows = () => {
    let searchText = this.state.searchText.toLowerCase();
    let pathways = this.props.pathways;
    if (searchText) {
      pathways = pathways.filter((pathway) => {
        return pathway.pathway.toLowerCase().indexOf(searchText) !== -1 ||
          pathway.career.toLowerCase().indexOf(searchText) !== -1;
      });
    }
    return pathways ? pathways.map((pathway) => {
      console.log(pathway);
      return (
        <TableRow className='table-row' onClick={() => {this.showPathwayDetails(pathway.key)}}>
          <td>{pathway.pathway}</td>
          <td>Job</td>
          <td>{pathway.career}</td>
          <td>
            <div className='thumb-container'>
              {this.favouritedImage(pathway)}
            </div>
          </td>
        </TableRow>
      )
    }) : null
  };

  showPathwayDetails = (key) => {
    this.props.actions.loadPathwayDetails(key);
  };

  favouritedImage = (pathway) => {
    if (pathway.favourite) {
      return (<Heart colorIndex={'critical'} onClick={() => this.changeFavourite(pathway)}/>)
    }
    return (<Heart onClick={() => this.changeFavourite(pathway)}/>)
  };

  changeFavourite = (pathway) => {
    const key = pathway.key;
    fetch(`/api/v1/user/favourite/${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => this.props.actions.loadPathways());
  };

  handleSearchChange = (ev) => {
    this.setState({searchText: ev.target.value})
  };

  generateSideBar = () => {
    if (this.props.pathway) {
      let pathway = this.props.pathway;
      return (
        <div>
          <Title style={{padding: 16}}>{pathway.pathway[0].name}</Title>
          <Paragraph
            margin='small'
            size='32px'
            style={{fontWeight: 900, padding: 16}}>
            Salary Range: {pathway.pathway[0].J.salaryRange}
          </Paragraph>
          <Paragraph
            margin='small'
            size='32px'
            style={{fontWeight: 900, padding: 16}}>
            Description: {pathway.pathway[0].J.description}
          </Paragraph>
          <Paragraph
            margin='small'
            size='32px'
            style={{fontWeight: 900, padding: 16}}>
            Automation Risk (Chances that computers may take over your job in the future): {pathway.pathway[0].J.automationRisk}
          </Paragraph>
          <Button
            accent
            label='View Pathway'
            style={{marginLeft: '16px'}}
            path={`/comparison`}/>
        </div>
      )
    } else {
      return (
        <Paragraph
          margin='medium'
          size='large'
          style={{padding: 16}}>
          Select a pathway for more details.
        </Paragraph>
      )
    }
  };

  render() {
    return (
      <Article id='Search'>
        <Box flex='grow' direction='row'>
          <Box style={{flex: 3}} direction='column'>
            <Box direction='column'>
              <Header pad='medium' justify='between'>
                <Title> Search Pathways</Title>
              </Header>
              <Box flex='grow' direction='row'>
                <Search
                  fill
                  inline
                  placeHolder='Search'
                  size='large'
                  iconAlign='start'
                  value={this.state.searchText}
                  onDOMChange={this.handleSearchChange}/>
              </Box>
            </Box>
            <Table>
              <TableHeader labels={this.columns.map(v => v.label.toUpperCase())}/>
              <tbody>
              {this.generateTableRows()}
              </tbody>
            </Table>
          </Box>
          <Box style={{flex: 1, border: 'solid 1px black', direction: 'column'}}>
            <Header pad='medium' justify='between'>
              <Title> Details</Title>
            </Header>
            {this.generateSideBar()}
          </Box>
        </Box>
      </Article>
    )
  }
}

const stateToProps = (state) => ({
  pathways: state.jobPathway.pathways,
  pathway: state.jobPathway.pathway
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loadPathways, loadPathwayDetails }, dispatch)
});

export default connect(stateToProps, dispatchToProps)(SearchPathways)
