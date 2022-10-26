const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/courses.json');
const courses = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Web Hut Api Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '00'){
        res.send(courses);
    }
    else{
        const category_course = courses.filter(course => course.category_id === id);
        res.send(category_course);
    }
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(course => course._id === id);
    res.send(selectedCourses);
});

app.listen(port, () => {
    console.log('Web Hut Api Running', port);
});