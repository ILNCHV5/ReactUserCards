import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function SearchBar(props) {

    const [input, setInput] = useState('');

    const handleChange = (event) => {
      setInput(event.target.value);
    }

    const handleSubmit = () => {
      console.log(`${input} please finish function`)
    }


    return (
      <form onSubmit={handleSubmit}>
        <TextField size='small' onChange={handleChange}></TextField>
        <Button type='submit 'variant='contained'>SEARCH</Button>
      </form>
    );
};

