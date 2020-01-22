import React from 'react';
import {Paper} from '@material-ui/core';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../actions';

const styles = {
    Paper : {
        width: '50%',
        margin: 'auto',
        padding: '1rem'
    }
}

class Login extends React.Component {

    renderInput({input}){
        return (
            <div className={"ui input"} style={{margin: '1rem 0', display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder={`Enter your ${input.name}`} {...input}/>
            </div>
        )
    }

    onSubmit = (formValue) => {
        console.log(formValue)
        this.props.login(formValue)
    }

    render() {
        return(
            <div>
               <Paper elevation={3} style={styles.Paper} >
                    <div style={{border: '1px solid grey', display: 'flex', flexDirection:'column', alignItems:'center', borderRadius: '6px', padding: '1rem'}}>
                        <div>
                            {/* <Typography variant={"h4"}>Login to access resource</Typography> */}
                        </div>
                        <div>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>    
                                <div className={"ui input"} style={{margin: '1rem 0', display: 'flex', flexDirection: 'column'}}>
                                    <Field name="email" component={this.renderInput}/>
                                    <Field name="password" component={this.renderInput} />
                                    <button className="ui primary button">SignIn</button>
                                </div>
                            </form>
                        </div>
                        <div>
                        </div>
                   </div>
                </Paper>
            </div>   
        )
    }
}

const decoratedComponent = connect(null, {login})(Login)

export default reduxForm({form: 'loginForm'})(decoratedComponent);

// connect(mapStateToProps, adction)(Login)