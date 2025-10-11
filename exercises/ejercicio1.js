const user = {
  firstName: 'Beatriz',
  lastName: 'H Castro',
  courses: [
    { name: 'Node.js', startDate: '2025-10-20' },
    { name: 'Git', startDate: '2025-09-21' },
    { name: 'React', startDate: '2025-12-09' }
  ],
  activeSearch: true
};

console.log(user.courses[2].startDate)