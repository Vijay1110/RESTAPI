import React from 'react';
import {Paper} from '@material-ui/core';
import StudForm from '../UI/StudForm';
import {connect} from 'react-redux';
import {createStudent} from '../../actions';

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

class CreateStudent extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStudent(formValues)
    }

    render() {
        return(
            <div>
                <Paper elevation={3} style={styles.Paper}>
                <StudForm buttonLabel="Create" onSubmit={this.onSubmit}/>
                </Paper>
            </div>
        )
    }
}

export default connect(null,{createStudent} )(CreateStudent);