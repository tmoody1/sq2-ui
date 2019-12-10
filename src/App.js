import React from 'react';
import { compose, lifecycle } from 'recompose'
import data from './mocks/bookData.json';
import * as Sc from './styledComponents';

const App = compose(
  lifecycle(
  )
)(() => {
  return (
    <Sc.AppWrapper>
      <Sc.Header>
        <Sc.HeaderText>SQ2 Book Reviews</Sc.HeaderText>
      </Sc.Header>
      <Sc.Body>
        {data.map(d => {
          console.log('data', data)
          return (
            <Sc.BookWrapper>
              {d.title}
            </Sc.BookWrapper>
          )
        })}
      </Sc.Body>
    </Sc.AppWrapper>
  );
})

export default App;
