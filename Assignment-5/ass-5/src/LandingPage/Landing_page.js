import React from 'react';

import {Link} from 'react-router-dom';
import background from '../images/background.jpg';
import './Landingpage.css';

function Landing_page() {
return (
<>

<h2>Government Page</h2>

<div className='landPage-container'>
<img className='image' src={background} alt="background_image"/>

<Link className='button' to="/postViewPage">click to enter</Link>
</div>

</>
);

}

export default Landing_page