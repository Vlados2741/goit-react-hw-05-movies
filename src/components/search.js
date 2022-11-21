import { useState } from 'react';

export const Search = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleInput = e => {
    const { value } = e.target;
    setName(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Enter film name');
    }
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        name="searchName"
        value={name}
        type="text"
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};
