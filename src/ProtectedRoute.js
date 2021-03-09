import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from './constants'

export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    const appContext = useContext(AppContext)
    return (
        <Route
            {...rest}
            render={
                props => {
                    console.log(appContext.getAuth(), 'qqqq')
                    if(appContext.getAuth().isLoggedIn) {
                        return <Component {...props}/>
                    } else {
                        return <Redirect to={{
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }}/>
                    }
                }
            }>
        </Route>
    )    

}