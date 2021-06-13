var React = require('react');
var Leaderboard = require('./Leaderboard.jsx');
var logo = 'files/LOGO-STAMP-white.png';


function Body() {
    return (
        <div className="app">
            <div className="outer">
                <img className="logo" src={logo} alt="Logo"/>
                <h1 className="title">Leaderboard</h1>
                <div className="subtitle">Select a student to add/change grades</div>
                <Leaderboard/>
            </div>
        </div>
    );
}

module.exports = Body;
