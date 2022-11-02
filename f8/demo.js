var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        coinText: 'Gia: 0',
        id: 2,
        name: 'HTML, CSS',
        coin: 1
    },
    {
        coinText: 'Gia: 1',
        id: 3,
        name: 'Ruby',
        coin: 1
    }
];

function coursesHandler(course){
    console.log(course)
}

var newCourses = courses.map(coursesHandler);
console.log(newCourses)