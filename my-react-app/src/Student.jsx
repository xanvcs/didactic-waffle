// this is a prop that allows you to pass in parameters to customize the component
// propTypes ensure that a passed in value is of a certain data type
// if incorrect data type is passed, a warning will be shown in the console
// default props are used to set default values for props

import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "John Doe",
    age: 18,
    isStudent: false,
}

export default Student