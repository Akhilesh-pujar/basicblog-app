

import { Route, Redirect } from 'react-router-dom';
import auth from '../services/auth';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;