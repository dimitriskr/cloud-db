var PropTypes = require('prop-types');
var React = require('react');

function StudentSelector({ selectedStudent, onChangeGrade }) {
  var node;

  if (selectedStudent) {
    node = <div className="details">
      <div className="name">{selectedStudent.data.name}</div>
      <div className="grade" >
        <label>
          Grade:
          <input type="text" onKeyPress={onChangeGrade}/>
        </label>
       <br/> Press "Enter" to insert the new grade
      </div>


    </div>;
  } else {
    node = <div className="message">Click a student to select</div>;
  }

  return node;
}

StudentSelector.propTypes = {
  selectedStudent: PropTypes.object
};

module.exports = StudentSelector;
