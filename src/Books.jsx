import React from 'react';
import { BookContext } from './BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import WishList from './WishList';


const Books = () => {
  
    return (
        <div className='container mx-auto'>
             <Tabs>
    <TabList>
      <Tab>ReadList</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
      <ReadList></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList></WishList>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;