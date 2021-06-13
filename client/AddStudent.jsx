var PropTypes = require('prop-types');
var React = require('react');
var connection = require('./connection');



function AddStudent() {
    var node;

    function insertStudent() {
// create connection and add
        const doc = connection.get('students', '' + index);
        var data = {name: input_name, grade: input_grade};
        doc.create(data);

    }

    node = <div className="details">
        <h5>Add a new student</h5>
        <form onSubmit={insertStudent} >
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Grade:
                <input type="number"/>
            </label>
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
