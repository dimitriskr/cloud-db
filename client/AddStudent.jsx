var PropTypes = require('prop-types');
var React = require('react');
var connection = require('./connection');



function AddStudent() {
    var node;

    function insertStudent(event) {
        event.preventDefault();

        const doc = connection.get('students', '' + index);
        var data = {name: this.state.name, grade: this.state.grade};
        doc.create(data);

    }

    function handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    function handleGradeChange(e) {
        this.setState({grade: e.target.value});
    }

    node = <div className="details">
        <h5>Add a new student</h5>
        <form onSubmit={insertStudent} >
            <label>
                Name:
                <input type="text" name="name" onChange={handleNameChange}/>
            </label>
            <br/>
            <label>
                Grade:
                <input type="number" name="grade" onChange={handleGradeChange}/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    ;

return node;
}

AddStudent.propTypes = {
    selectedStudent: PropTypes.object
};

module.exports = AddStudent;
