import React from 'react';

const Blogs = () => {
  return (
    <div className='text-justify mb-8'>
      <div className="context border-2 rounded-xl divide-y-4 mx-14 p-8 my-12">
        <p className='font-medium p-4'>What is Context API and why we use it?</p>
        <p className='p-4 font-mono'>The React Context API is a way of passing around data between its' components instead to props drilling. It is an easier and lighter approach for state management. Sometimes we may not need to pass data to one's parent components from grandparent for using data to grandChildren. Context API gives us this extra edge which we don't have in props drilling. </p>
      </div>
      <div className="context border-2 rounded-xl divide-y-4 mx-14 p-8 my-12">
        <p className='font-medium p-4'>What is Semantic Tag?</p>
        <p className='p-4 font-mono'>Semantic Tags give decription what roles the tag is having. We can write endless div and span tag but search engine robots like google and bing would not identify which tag is more important than other which results few problems while ranking a website and users with visual impaired. Semantic tag such as header, footer, aside, nav, article, main describes what the tag is about. These tags help us and search engines to understand the code easily and what the tag represents.</p>
      </div>
      <div className="context border-2 rounded-xl divide-y-4 mx-14 my-12 p-8">
        <p className='font-medium p-4'>Write briefly about Block, Inline and Inline Block?</p>
        <p className='p-4 font-mono'>Inline elements does not start on a new line rather it takes only what it's content is required. We can't set hight or width to it.  <br />
          Inline-Block elements is same as inline elements but we can set height and width to it. Basically we can make any inline element to inline-block element by wrapping the inline element with block elements. <br />
          Block elements take whole row and always will start in a new line. Of course we can set height and width but in nature it will take full width.
        </p>
      </div>

    </div>
  );
};

export default Blogs;