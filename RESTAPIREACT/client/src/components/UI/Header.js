import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import credential from '../../credential';
import {logout} from '../../actions'

const styles = {
    Toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}

class Header extends React.Component {

    state = {
        userName:'',
        password: ''
    }

    onClickHandler = () => {
        this.props.logout();
    }



    render() {
        console.log(this.props.auth)
        return (
            <div>
                <AppBar>
                <Toolbar style={styles.Toolbar}>
                <Link to="/"><Typography variant="h4" style={{color: 'white'}}>IN_UP</Typography></Link>
                {this.props.userName && this.props.password ?
                    <Link 
                    to="/students" 
                    variant="body2" 
                    style={
                        {
                            textDecoration: "none", 
                            color: "white", 
                            backgroundColor: "#c4af33", 
                            height: "2rem", 
                            width: "5rem", 
                            borderRadius: "1rem", 
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }>Student</Link>
                 : null
                }
                    
                
                {this.props.auth.userName && this.props.auth.password ? <Link to='/login' onClick={this.onClickHandler}>SignOut</Link> : <Link to='/login'>SignIn</Link>}
                {console.log(this.props.userName)}
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // userName: state.auth.userName,
        // password: state.auth.password,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{logout})(Header);