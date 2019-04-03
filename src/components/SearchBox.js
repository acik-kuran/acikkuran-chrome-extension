import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { surahs } from '../utils/data';
import { goToSearch, goToSurah, selectStyles } from '../utils/functions';

library.add(faSearch);

const SearchBox = () => {
  return (
    <div className="panel-block">
      <div className="container">
        <div className="search control has-icons-right">
          <input
            className="input"
            ref={(input) => input && input.focus()}
            type="search"
            placeholder="Ara..."
            onKeyPress={goToSearch}
          />
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <Select
          className="surah-select"
          placeholder="Sure seçin"
          isSearchable
          onChange={goToSurah}
          options={surahs}
          styles={selectStyles}
        />
      </div>
    </div>
  );
};

export default SearchBox;
