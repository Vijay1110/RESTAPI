import React from 'react';
import {Paper, TableContainer, Table, TableHead, TableBody,TableRow, TableCell, Button} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchStudents, fetchStudent,editStudent, deleteStudent} from '../../actions'


const useStyles = theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  });
  
  
class ViewStudent extends React.Component {
    
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    onDelete = (id) => {
        this.props.deleteStudent(id)
        console.log(`Yes I Sure`);
        this.setState({open: false})
    }

    onCancleDelete = () => {
        console.log(`OOps By Mistake`);
        this.setState({open:false})
    }
    
    componentDidMount() {
        this.props.fetchStudents();
        // this.props.fetchStudent(1);
        
    }


    renderData = () => {
        const { classes } = this.props;
        if(this.props.students){
            return(
                this.props.students.map((student) => (
                    <TableRow key={student.id}>
                    <TableCell component="th" scope="row">
                      {student.id}
                    </TableCell>
                    <TableCell align="right">{student.name}</TableCell>
                    <TableCell align="right">{student.sirname}</TableCell>
                    <TableCell align="right">{student.position}</TableCell>
                    <TableCell align="right">
                    <Link to={`/student/edit/${student.id}`} variant="contained" color="primary" style={{textDecoration: 'none', border: '1px solid red' }}>
                        Edit
                    </Link>
                    
                    </TableCell>
                    <TableCell align="right">
                    <Button variant="contained" color="secondary" style={{marginLeft:'0px 3px' }} onClick={this.handleOpen}>
                        Delete
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={this.state.open}
                        onClose={this.handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                <Fade in={this.state.open}>
                  <div className={classes.paper}>
                    Are You Sure ?{console.log('ViewStudent====>',student.id)}
                    <button onClick={()=>this.onDelete(student.id)}>Yes</button>
                    <button onClick={this.onCancleDelete}>No</button>
                  </div>
                </Fade>
              </Modal>
                    </TableCell>
                  </TableRow>
                ))
            )
        }else {
            return null
        }
    }

    render() {
        

        return (
            <div>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table" >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white', backgroundColor: 'black'}}>ID</TableCell>
                            <TableCell style={{color: 'white', backgroundColor: 'black'}} align="right">NAME</TableCell>
                            <TableCell style={{color: 'white', backgroundColor: 'black'}} align="right">SIRNAME</TableCell>
                            <TableCell style={{color: 'white', backgroundColor: 'black'}} align="right">POSITION</TableCell>
                            <TableCell style={{color: 'white', backgroundColor: 'black'}} align="right">UPDATE</TableCell>
                            <TableCell style={{color: 'white', backgroundColor: 'black'}} align="right">DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderData()}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="create_student" style={{display:'flex', justifyContent: 'center', margin: '4rem'}}>
                <Link to="/student/create" className="ui primary button">
                    Create Student
                </Link>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {students: Object.values(state.students)}
}

// withStyles(useStyles)(ViewStudent);

export default connect(mapStateToProps,{fetchStudents, fetchStudent,editStudent, deleteStudent} )(withStyles(useStyles)(ViewStudent));