# Realtime database backend for course grading

This is a dockerised application using ShareDB, MongoDB and Docker that allows to grade students of a course and sort them by grade.

It is based on the [ShareDB example Leaderboard](https://github.com/share/sharedb/tree/master/examples/leaderboard)

For the frontend it uses [ReactJS](https://reactjs.org/)

The data is stored in the MongoDB database

Check the [Install file](docs/INSTALL.md) for more information

## Warning
There's a bug in sorting the students. The grades are saved as strings instead of numbers and proper sorting cannot take place. ShareDB uses JSON0 OT Type which has limited functionalities in regards to numbers