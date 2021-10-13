import {
    Route,
    Switch
} from 'react-router-dom';
import Login from './Login/Login';

const Layout = () => {
    return (
        <>
            <Switch>
                <Route path="/" children={<Login />} />
                {/*
    //   <Route path="/login" element={<Login />} />
    //   <PrivateRoute path="/dashboard" element={<Dashboard />} />
    //   <Route path="*" element={<NotFound />} /> */}
            </Switch>

        </>
    )
};

export default Layout;