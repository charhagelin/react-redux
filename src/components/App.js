import React, { Component, PropsTypes } from 'react';

class App extends Component {
    render() {
        return(
            <div className='container-fluid'>
                <p> Header here... </p>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropsTypes-Object.isRequired
};

export default App;