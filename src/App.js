import React from 'react';
import data from './mocks/bookData.json';
import * as Sc from './styledComponents';

import { getInitialData } from './services';
import BookList from './bookList/bookList.jsx';
import BookReviews from './bookReviews/bookReviews.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Sc.AppWrapper>
        <Sc.Header>
          <Sc.HeaderText>SQ2 Book Club</Sc.HeaderText>
        </Sc.Header>
        <Sc.Body>
          <Switch>
          <Route path='/review/:isbn'>
              <BookReviews {...{ books: data }} />
            </Route>
            <Route path='/'>
              <BookList {...{ books: data }}/>
            </Route>
          </Switch>
        </Sc.Body>
      </Sc.AppWrapper>
    </Router>
  );
}

export default App;
