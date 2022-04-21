import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/Main';
import * as actionCreators from './actions/index';

import './App.css';

const mapStateToProps = function(state){
  return {
    product: state.product
  }
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
