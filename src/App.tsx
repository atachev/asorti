import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import { PrivateElement, PrivateOutlet } from "./utils/PrivateRoutes";
import { ROLE } from "./utils/roles";
import Login from "./views/Login/Login";

const History = () => <h1>History qqq(Private)</h1>;
const Settings = () => <h1>Settings (Private)</h1>;
const Dashboard = () => <>
    <h1>Dashboard history (Private)</h1>
</>;
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="history" children={<History />} />
                </Route>
                {/* <Route
                    path="/settings"
                    element={
                        <PrivateRoute
                            path="settings"
                            element={<Settings />}
                            requiredRoles={[ROLE.Admin]}
                        />
                    }
                /> */}
                <Route path="settings" element={
                    <PrivateElement element={<Settings />} requiredRoles={[ROLE.Admin]} />
                } />

                {/* <Route element={
                    <PrivateRoute
                        path="pricing"
                        element={<Pricing />}
                        requiredRoles={[ROLE.Admin]} />
                } /> */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
};

export default App;