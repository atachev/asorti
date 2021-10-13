import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import Layout from './views/Layout';

interface Props {
  history: History;
}

const App = (props: Props) => {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  );
}

export default App;
