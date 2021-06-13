var React = require('react');
var Leaderboard = require('./Leaderboard.jsx');

function Body() {
  return (
    <div className="app">
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Leaderboard</h1>
        <div className="subtitle">Select a student to add/change grades</div>
        <Leaderboard />
      </div>
    </div>
  );
}

module.exports = Body;
