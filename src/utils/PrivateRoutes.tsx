import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginSelectors } from '../views/Login/selectors';

interface Props {
  element: React.ReactElement;
  requiredRoles: any;
  path?: string;
}

export const PrivateElement: React.FC<Props> = ({ element, requiredRoles }) => {
  const location = useLocation();
  const auth = useSelector(LoginSelectors.getIsUserAuthenticated);
  const userRole = useSelector(LoginSelectors.getUserRole);
  console.log(userRole)
  const userHasRequiredRole = requiredRoles.includes(userRole);
  const loading = false;

  if (loading) return <p>Loading.. </p>
  return auth && userHasRequiredRole ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}


// export const PrivateRoute: React.FC<Props> = ({
//   element,
//   requiredRoles,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       element={
//         <PrivateElement element={element} requiredRoles={requiredRoles} />
//       }
//     />
//   );
// };


// export const PrivateElement: React.FC<Props> = ({ element }) => {
//   let location = useLocation();

//   // const { isAuthenticated, loading } = useSelector((state) => state.auth);
//   const isAuthenticated = false;
//   const loading = false;

//   if (loading) return <p>Loading.. </p>
//   return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
// };

// export const PrivateRoute: React.FC<Props> = ({ element, ...rest }) => {
//   return <Route {...rest} element={<PrivateElement element={element} />} />;
// };


export function PrivateOutlet() {
  const auth = useSelector(LoginSelectors.getIsUserAuthenticated);
  return auth ? <Outlet /> : <Navigate to="/login" />;
}