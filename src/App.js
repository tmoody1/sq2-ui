import React from 'react';
import dataMock from './mocks/bookData.json';
import * as Sc from './styledComponents';
import { getInitialData } from './services';
import BookList from './bookList/bookList.jsx';
import BookReviews from './bookReviews/bookReviews.jsx';
import Header from './header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import useAxios from 'axios-hooks'

const App = () => {

  const [{ data, loading, error }, refetch] = useAxios(
    'http://35.246.56.181:30090/books'
  )

  console.log('test', data)
  console.log('loading', loading)

  return (
    <Router>
      <Sc.AppWrapper>
        <Header />
        <Sc.Body>
          <Switch>
          <Route path='/review/:isbn'>
              <BookReviews {...{ books: dataMock }} />
            </Route>
            <Route path='/'>
              <BookList {...{ books: dataMock }}/>
            </Route>
          </Switch>
        </Sc.Body>
      </Sc.AppWrapper>
    </Router>
  );
}

export default App;
