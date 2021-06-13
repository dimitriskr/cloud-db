var PropTypes = require('prop-types');
var React = require('react');
var Student = require('./Student.jsx');
var _ = require('underscore');

function StudentList(props) {
  var { students, selectedStudentId } = props;
  var other = _.omit(props, 'students', 'selectedStudentId');

  var studentNodes = students.map(function(student, index) {
    var selected = selectedStudentId === student.id;

    return (
      <Student {...other} doc={student} key={student.id} selected={selected} />
    );
  });
  return (
    <div className="studentList">
      {studentNodes}
    </div>
  );
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
  selectedStudentId: PropTypes.string
};

module.exports = StudentList;
