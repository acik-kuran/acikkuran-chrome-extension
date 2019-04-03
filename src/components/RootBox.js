import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { rootchars } from '../utils/data';
import { goToRoot, selectStyles } from '../utils/functions';

const RootBox = () => {
  const [roots, setRoots] = useState([]);

  const fetchRootcharRoots = async (e) => {
    const { data } = await axios.get(
      `https://api.acikkuran.com/rootchar/${e.value}`
    );

    const $roots = [];
    data.data.map((x) => {
      return $roots.push({
        value: x.latin,
        label: `${x.arabic} (${x.latin})`
      });
    });
    setRoots($roots);
  };

  return (
    <div className="panel-block">
      <div className="container">
        <div className="columns is-mobile is-variable is-1">
          <div className="column is-5">
            <Select
              className="surah-select"
              placeholder="Harf"
              isSearchable
              options={rootchars}
              onChange={fetchRootcharRoots}
              styles={selectStyles}
            />
          </div>
          <div className="column is-7">
            <Select
              className="surah-select"
              placeholder="Kök"
              isDisabled={!(roots.length > 0)}
              isSearchable
              options={roots}
              onChange={goToRoot}
              styles={selectStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootBox;
