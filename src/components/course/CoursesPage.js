import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CoursAction';

class CoursePage extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title:""}
        }; 

        this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }

onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({ course: course });
}

onCliCkSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
}

    render() {
        return(
            <div>
                <h1>Courses</h1>
                <h2> Add Courses</h2>
                <input  
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input  
                    type="submit"
                    value="submit"
                    onSubmit={console.log('i submit')} />    
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}
export default connect(mapStateToProps)(CoursePage);