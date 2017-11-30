import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Search from 'grommet/components/Search'
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Article from 'grommet/components/Article';
import Paragraph from 'grommet/components/Paragraph'

import { loadPathways } from '../../store/jobPathway'
import redHeart from '../../assets/redHeart30x30.png'
//import './index.css';


class SearchPathways extends PureComponent {

    constructor(props) {
        super();

        const { pathways } = props;
        this.columns = [
            {label: 'Job Title/Program Name', sort: 'name'},
            {label: 'Type', sort: 'type'},
            {label: 'Career Field', sort: 'field'},
            {label: 'Favourite', sort: 'favourite'}
        ];
        this.state = {
            pathways: [],
            searchText: '',
            details: null,
            currentKey: -1,
            Job: ''
        };
    }

    componentDidMount() {
        //this.props.actions.loadPathways()
        var _this = this;
        fetch("/api/v1/user/favourite")
        .then(results => results.json())
        .then(data => {
            const pathways = data.filter((pathway) => pathway.favourite);
            this.setState({ pathways })
        });

    }

   fetchDetails(ev, pathway){
       fetch("/api/v1/pathways/" + ev)
       .then(data => data.json())
       .then(data => {
           console.log(data.pathway);
            this.setState({ details: data.pathway[0].J})
            this.setState({ Job: pathway})
       })
   }

    generateTableRows = () => {
        let searchText = this.state.searchText.toLowerCase();
        let pathways = this.state.pathways;
        if (searchText) {
            pathways = pathways.filter((pathway) => {
                return pathway.pathway.toLowerCase().indexOf(searchText) !== -1;
                // pathways.includes(pathway.pathway.toLowerCase(), searchText)
            });
        }
        return pathways ? pathways.map((pathway) => {
            return (
                
                <TableRow>
                   <tr onClick = {() => {
                        //this.setState({ currentKey: pathway.key });
                        this.fetchDetails(pathway.key,pathway.pathway)
                       }
                    }>
                    <td style= {{cursor:'pointer'}} key={pathway.pathway}>{pathway.pathway}</td>
                    </tr>
                    <td>Job</td>
                    
                    <td>{pathway.career}</td>
                    <td><img src = {redHeart} /> </td>
                   
                </TableRow>
            )
        }) : null
    };

    handleSearchChange = (ev) => {
        this.setState({searchText: ev.target.value.trim()})
    };

    render () {
        return (
            <Article id='Search'>
                <Box flex='grow' direction='row'>
                    <Box style={{flex: 3}} direction='column'>
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
                            <Title> Details Here</Title>
                        </Header>
                        {
                            this.state.details ? 
                            <div>
                                <h1 margin = 'small' align= 'Left'  > {this.state.Job} </h1>
                            <Paragraph id  = "stuff" margin='Small' align='Left'  size = '32px' style={{fontWeight: 900}}> 
                                Salaray Range: {this.state.details.salaryRange}</Paragraph>
                              <Paragraph id  = "stuff" margin='Small' align='Left' size = '32px' style={{fontWeight: 900}}> Description {this.state.details.description} </Paragraph>
                              <Paragraph id  = "stuff" margin='Small' align='Left' size = '32px' style={{fontWeight: 900}}>  Automation Risk (Chances that computers may take over your job in the future) {this.state.details.automationRisk} </Paragraph>
                            </div>  
                                
                            : null
                        }
                        
                    </Box>
                </Box>
            </Article>
        )
    }
}

const stateToProps = (state) => ({
    pathways: state.jobPathway.pathways
});

const dispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ loadPathways }, dispatch)
});

export default connect(stateToProps, dispatchToProps)(SearchPathways)
