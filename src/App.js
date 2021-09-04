
import { Reset } from 'styled-reset';
// import styled, { createGlobalStyle } from 'styled-components';
import Header from "./Header";
import QuestionPage from './QuestionPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AskPage from './AskPage';
import Styles from './Styles';

function App() {
  return (
    <>
      <div>
        <Reset />
        <Styles />

        <Router>
          <Header />
          <Switch>
            <Route path="/ask" component={AskPage}></Route>
            <Route path="/" component={QuestionPage}></Route>

          </Switch>
        </Router>

      </div>
    </>
  );

}

export default App;
