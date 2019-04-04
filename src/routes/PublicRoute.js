import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

function PublicRoute({isAuthenticated, component : Component, ...rest}) {
    return (
        <Route
            {...rest}
            component={(props) => (
                isAuthenticated ? (
                    <Redirect to='/dashboard'/>
                ) : (
                    <Component {...props}/>
                )
            )}
        />
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PublicRoute);