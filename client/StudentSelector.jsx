var PropTypes = require('prop-types');
var React = require('react');

function StudentSelector({ selectedStudent, onAddPoints }) {
  var node;

  if (selectedStudent) {
    node = <div className="details">
      <div className="name">{selectedStudent.data.name}</div>
      <button className="inc" onClick={onAddPoints}>Add 10 points</button>
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
