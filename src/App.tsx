import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// views
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Route path="/" children={<Login />} />
      {/* <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <PrivateRoute path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> */}
    </Router>
  );
}

export default App;
