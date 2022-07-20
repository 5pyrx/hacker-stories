import * as React from 'react';

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log("handleSearch Function called " + event.target.value);
    console.log(searchTerm);
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch}  />
      <hr />
      <List list={searchedStories} />
    </>
  );
};


/* Creating the List component */
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);


const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>

);

/* Creating the Search component */
const Search = (props) => {


  const handleBlur = (event) => {
    console.log("Blur value " + event.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} onBlur={handleBlur} />
    </>
  );
};


export default App;
