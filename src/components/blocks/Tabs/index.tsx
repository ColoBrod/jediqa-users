import React from 'react';

import Tab, { TabProps } from '~/components/elements/Tab';

import './style.css';

const tabs: TabProps[] = [
  { url: 'users', title: 'Список пользователей' }, 
  { url: 'favorite-users', title: 'Список избранных' }, 
]

const Tabs = () => {
  return (
    <div className='tabs'>
      {tabs.map(tab => <Tab key={tab.url} url={tab.url} title={tab.title} />)}
    </div>
  );
};

export default Tabs;
