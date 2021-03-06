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

  const [searchTerm, setSearchTerm] = React.useState('React');

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
      <Search search={searchTerm} onSearch={handleSearch}  />
      <hr />
      <List list={searchedStories} />
    </>
  );
};


/* Creating the List component */
const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

/* Creating the Item component */
const Item = ({item}) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>

);

/* Creating the Search component */
const Search = ({ search, onSearch }) => (

  // const handleBlur = (event) => {
  //   console.log("Blur value " + event.target.value);
  // }

  <>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      onChange={onSearch}
      value={search}
    />
  </>
);


export default App;
