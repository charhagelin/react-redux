import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return(
            <div className= 'jumbotron'>
                <h1> PLuralSight Admin </h1>
                <p>React, Redux and react routyer in ES6 fgor ultra responsive web-apps.</p>
                <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
            </div>
        )
    }
}

export default HomePage;