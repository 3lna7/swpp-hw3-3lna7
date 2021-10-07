import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoutes = ({ component: Cmp, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            localStorage.getItem('/') ? (
                <Cmp {...props} />
            ) :
                <Redirect to='/' />
        )}
    />
)
export default ProtectedRoutes