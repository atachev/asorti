import { render } from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// theme
import { ThemeProvider } from "styled-components";
import theme from './utils/theme';

// redux
import store, { history } from './store';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App history={history} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
