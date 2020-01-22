import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import Header from '../components/UI/Header';
import Login from './Login';
import ViewStudent from './student/ViewStudent';
import CreateStudent from './student/CreateStudent';
import EditStudent from './student/EditStudent';
import SimpleModal from '../components/UI/Modal';
import HomePage from '../components/UI/HomePage';
import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';
import ProtectedPage from './ProtectedPage'
class App extends React.Component {

    render() {
        return (
            <div>
                <Router history={history}>
                <div>
                    <Header/>
                    <h1>App is heres</h1>
                </div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" exact component={Login}/>
                        
                        {/* <Route path="/students" exact component={ViewStudent} /> */}
                        <PrivateRoute path="/students" isAuth={this.props.isAuth}>
                            <ViewStudent />
                        </PrivateRoute>

                        <Route path="/student/edit/:id" exact component={EditStudent} /> 
                        <Route path="/student/create" exact component={CreateStudent} />
                        <Route path="/modal" exact component={SimpleModal} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isAuth: state.auth }
}

export default connect(mapStateToProps)(App);