import React from 'react';
import {Paper } from '@material-ui/core';
import StudForm from '../UI/StudForm';
import {connect} from 'react-redux';
import {editStudent, fetchStudent} from '../../actions/index';
import _ from 'lodash';

const styles = {
    Paper : {
        width: '50%',
        margin: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem'
    }
}



class EditStudent extends React.Component {

    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        
        this.props.editStudent(this.props.match.params.id, formValues)
    }

    render() {
        console.log(this.props)
        console.log(this.props.student)
        return(
            <div>
                <Paper elevation={3} style={styles.Paper } >
                <StudForm 
                    buttonLabel="Edit" 
                    id={this.props.match.params.id} 
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.student,'name', 'sirname', 'position')}
                />
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {student: state.students[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {editStudent, fetchStudent})(EditStudent);