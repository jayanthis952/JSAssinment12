let studentData = new Map();
studentData.set('id', [1, 2, 3]);
studentData.set('name', ['Hitanshu', 'Ninad', 'Amandeep']);
studentData.set('scores', [90, 88, 92]);

// Get Student Names using map functions
let studentNames = studentData.get('name');
console.log(studentNames);

// Delete Student Scores using map functions
studentData.delete('scores');

// Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
// One parameter
console.log(studentData.get('id'));
console.log(studentData.get('name'));
// Two parameters
console.log('id', studentData.get('id'));
console.log('name', studentData.get('name'));
// Three parameters
console.log('id', studentData.get('id'), studentData);
console.log('name', studentData.get('name'), studentData);
console.log('scores', studentData.get('scores'), studentData);
