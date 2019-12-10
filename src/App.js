import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose'
import data from './mocks/bookData.json';
import * as Sc from './styledComponents';
import { Text } from '@imanage/react-ice'
import { getInitialData } from './services';
import BookList from './bookList.jsx';
import BookReviews from './bookReviews/bookReviews.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = compose(
  lifecycle({
    componentWillMount () {
      const newData = getInitialData()
      return newData
    }
  }),
  withStateHandlers(() => ({
    currentBookISBN: null
  }),
  ({
    setCurrentBook: () => (isbn) => ({
      currentBookISBN: isbn
    })
  }))
)(({ newData, setCurrentBook, currentBookISBN }) => {
  return (
    <Router>
      <Sc.AppWrapper>
        <Sc.Header>
          <Text.Heading1>SQ2 Book Club</Text.Heading1>
        </Sc.Header>
        <Sc.Body>
          <Switch>
            <Route path='/'>
              <BookList {...{ books: data, setCurrentBook }}/>
            </Route>
            <Route path='/review/:id'>
              <BookReviews {...{ books: data, currentBookISBN, setCurrentBook }} />
            </Route>
          </Switch>
        </Sc.Body>
      </Sc.AppWrapper>
    </Router>
  );
})

export default App;
