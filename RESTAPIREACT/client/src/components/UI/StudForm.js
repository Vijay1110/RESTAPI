import React from 'react';
import {Field, reduxForm} from 'redux-form';

const styles = {
    root : {
        display: 'flex',
        flexDirection: 'column'
    }
}

 
class StudForm extends React.Component {

    renderInput = ({input}) => {
        console.log('i am in the studentForm',this.props.initialValues)
        // console.log(input)
        return(
            <div className="ui input" style={{marginTop: '1rem', display: 'flex', flexDirection:'column'}}>
                <input type="text" {...input} placeholder={`Enter Your ${input.name}`} />
            </div> 
        )
    }
        

     onSubmit = (formValues) => {
        console.log(formValues)
        this.props.onSubmit(formValues);
    }

    

    render() {
        console.log(this.props)
        return (
            <div style={styles.root}>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" component={this.renderInput} label="Enter Your Name"/>
                    <Field name="sirname" component={this.renderInput} label="Enter Your SirName"/>
                    <Field name="position" component={this.renderInput} label="Enter Your Position"/>
                    
                    <button className="ui primary button" style={{marginTop: '1rem'}}>{this.props.buttonLabel}</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'studentForm'})(StudForm); 