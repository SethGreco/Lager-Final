import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactToPrint from "react-to-print";
import Form from './form';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 15,

  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class ComponentToPrint extends React.Component {
  state = { data: [] };



  handleFormSubmit = () => {
    this.setState(this.state);
  };


  getPosts = () => {


    return this.props.data.map(post => {
      let date = new Date(post.when)
      let formattedDate = date.toString()
      let timeString = date.toLocaleTimeString()
      let dateString = date.toLocaleDateString()
      let reallyFormatted = `${dateString}                  ${timeString}`
      return (

        <tr key={post.id}>

          <CustomTableCell>{post.who}</CustomTableCell>
          <CustomTableCell>{reallyFormatted}</CustomTableCell>
          <CustomTableCell>{post.what}</CustomTableCell>
          <CustomTableCell>{post.how}</CustomTableCell>

        </tr>


      );
    });
  };



  render() {

      return (
        <Paper>
        <Table >
          <TableHead>
            <TableRow>
            <CustomTableCell>Who</CustomTableCell>
            <CustomTableCell>When</CustomTableCell>
            <CustomTableCell>What</CustomTableCell>
            <CustomTableCell>How is it</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {this.getPosts()}
          </TableBody>
        </Table>
        </Paper>
      );
    }
  }
  
  class Feature extends React.Component {
    state = {
      data: []

    };
    componentDidMount() {
      this.getData();
    }
    handleFormSubmit = () => {
      console.log("called")
      this.getData()
    };
    getData() {
      fetch('http://127.0.0.1:8000/api/project')
        .then(response => response.json())

        .then(data => {
          this.setState({'data': data})
        });



    }
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a  href="#">Print this out!</a>}
            content={() => this.componentRef}
          />

          <ComponentToPrint data={this.state.data} ref={el => (this.componentRef = el)} />
          &nbsp;&nbsp;&nbsp;

          <Form onSumbitClick={this.handleFormSubmit} endpoint={'127.0.0.1:8000/api/project/'}/>

        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return { features: state.features.homePageFeatures }
};

export default connect(mapStateToProps, actions)(Feature);
