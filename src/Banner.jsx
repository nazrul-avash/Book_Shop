import React from 'react';
import book from './assets/pngwing.png';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 py-15 px-10 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between my-4">
    <img
      src={book}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold my-5">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-success">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;