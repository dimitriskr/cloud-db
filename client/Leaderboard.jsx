var StudentList = require('./StudentList.jsx');
var StudentSelector = require('./StudentSelector.jsx');
var React = require('react');
var _ = require('underscore');
var connection = require('./connection');

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudentId: null,
      students: []
    };
    this.handleStudentSelected = this.handleStudentSelected.bind(this);
    this.handleAddPoints = this.handleAddPoints.bind(this);
  }

  componentDidMount() {
    var comp = this;
    var query = connection.createSubscribeQuery('students', {$sort: {grade: -1}});
    query.on('ready', update);
    query.on('changed', update);

    function update() {
      comp.setState({students: query.results});
    }
  }

  componentWillUnmount() {
    query.destroy();
  }

  selectedStudent() {
    return _.find(this.state.students, function(x) {
      return x.id === this.state.selectedStudentId;
    }.bind(this));
  }

  handleStudentSelected(id) {
    this.setState({selectedStudentId: id});
  }

  handleAddPoints() {
    var op = [{p: ['grade'], na: 5}];
    connection.get('students', this.state.selectedStudentId).submitOp(op, function(err) {
      if (err) { console.error(err); return; }
    });
  }

  render() {
    return (
      <div>
        <div className="leaderboard">
          <StudentList {...this.state} onStudentSelected={this.handleStudentSelected} />
        </div>
        <StudentSelector selectedStudent={this.selectedStudent()} onAddPoints={this.handleAddPoints} />
      </div>
    );
  }
}

module.exports = Leaderboard;

