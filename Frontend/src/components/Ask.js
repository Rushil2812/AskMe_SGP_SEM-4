import React from 'react';
import Askheader from './Askheader';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import './Css/Ask.css';
function Ask() {
  return <div>
      <Askheader/>
      <div className='ask_contents'>
        <div className='ask_content'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
  </div>;
}

export default Ask;
