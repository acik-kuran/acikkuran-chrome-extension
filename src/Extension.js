import React, { useState } from 'react';
import Tabs from './components/Tabs';
import RootBox from './components/RootBox';
import SearchBox from './components/SearchBox';
import Layout from './components/Layout';

const Extension = () => {
  const [tab, setTab] = useState('search');
  return (
    <Layout>
      <Tabs tab={tab} setTab={setTab} />
      {tab === 'search' ? <SearchBox /> : <RootBox />}
    </Layout>
  );
};

export default Extension;
