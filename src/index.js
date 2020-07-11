import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Context } from './views/context';
// import store from './app/store';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer, applyMiddleware(thunk))
class TopComponent extends React.Component {
  constructor() {
    super()
    this.onLangChange = () => {
      this.setState(prevState => ({
        bahasa: prevState.bahasa === 'id' ? 'en' : 'id'
      }))
    }

    this.onThemeChange = () => {
      this.setState(prevState => ({
        tema: prevState.tema === 'light' ? 'dark' : 'light'
      }))
    }

    this.state = {
      bahasa: 'id',
      onLangChange: this.onLangChange,
      tema: 'light',
      onThemeChange: this.onThemeChange
    }
  }
  render() {
    return(
      <Context.Provider value={this.state}>
        <App />
      </Context.Provider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <TopComponent/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
