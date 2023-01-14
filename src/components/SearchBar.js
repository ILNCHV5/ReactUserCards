import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export function SearchBar(props) {

  const [input, setInput] = useState('');

  const handleSubmit = () => {
    props.data.forEach(item => {
      if (item.name === input) {
        props.setData([item]);
      } 
      // else {
      //   props.fetchData();
      // }
    })
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <TextField size='small' onChange={handleChange}></TextField>
      <Button type='submit ' variant='contained'>SEARCH</Button>
    </form>
  );
};

