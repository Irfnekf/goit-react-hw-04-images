import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setState(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}></span>
        </button>
        <input
          value={state}
          name="search"
          placeholder="Search images and photos"
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          required
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
