import React from 'react';
import BookList from '../book-list';


const HomePage = () => {
  return (
    <div className='container-catalog'>
        <div>Fillter</div>
      <BookList />
    </div>
  );
};

export default HomePage;
