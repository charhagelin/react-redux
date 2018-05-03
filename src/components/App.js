import React, { Component, PropsTypes } from 'react';
import Header from './common/Header';

class App extends Component {
    render() {
        return(
            <div className='container-fluid'>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropsTypes-Object.isRequired
};

export default App;
