// import { useSelector } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';

interface Props {
  element: React.ReactElement;
  path?: string;
}

const PrivateRoute = () => {

}

export default PrivateRoute;
// const PrivateElement<Props> = ({ element }) => {
//   let location = useLocation();

//   const { isAuthenticated, loading } = useSelector((state) => state.auth);

//   if(loading) return <p>Loading.. </p>

//   return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
// };

// export const PrivateRoute<Props> = ({ element, ...rest }) => {
//   return <Route {...rest} element={<PrivateElement element={element} />} />;
// };

// export default PrivateRoute;