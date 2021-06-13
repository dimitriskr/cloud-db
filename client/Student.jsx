var PropTypes = require('prop-types');
var React = require('react');
var classNames = require('classnames');

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onStudentSelected(this.props.doc.id);
  }

  componentDidMount() {
    var comp = this;
    var doc = comp.props.doc;
    doc.subscribe();
    doc.on('load', update);
    doc.on('op', update);
    function update() {
      // `comp.props.doc.data` is now updated. re-render component.
      comp.forceUpdate();
    }
  }

  componentWillUnmount() {
    this.doc.unsubscribe();
  }

  render() {
    var classes = {
      'student': true,
      'selected': this.props.selected
    };

    return (
      <li className={classNames(classes)} onClick={this.handleClick}>
        <span className="name">{this.props.doc.data.name}</span>
        <span className="grade">{this.props.doc.data.grade}</span>
      </li>
    );
  }
}

Student.propTypes = {
  doc: PropTypes.object.isRequired,
  onStudentSelected: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

module.exports = Student;
