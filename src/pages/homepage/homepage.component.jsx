import React from 'react';

import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

//create a function component because we dont need state or lifecycle methods
const HomePage = () => (
  <div className="homepage" >
    <Directory />
  </div>
)

export default HomePage;