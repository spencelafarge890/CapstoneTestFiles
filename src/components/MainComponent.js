import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {HomePage} from './HomePageComponent';

const mapStateToProps = (state) => {
	return {
		login: state.login,
	}
}

const mapDispatchToProps = (dispatch) => ({
    postLogin: (username, password, role) => dispatch(postLogin(username, password, role)),
    resetLoginForm: () => {dispatch(actions.reset('login'))}
})

class MainComponent extends Component{

constructor(props) {
    super(props);
}

render() {
    return (
        <div>
            <Header/>
                <Switch location={this.props.location}>
                    <Route path='/home' component={() => <HomePage postLogin={this.props.postLogin} resetLoginForm={this.props.resetLoginForm}/>}/>
                    <Redirect to="/home" />
                </Switch>
            <Footer/>
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));