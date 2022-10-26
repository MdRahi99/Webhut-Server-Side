const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Web Hut Api Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(courses);
});

app.get('/course-category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '00'){
        res.send(courseDetails);
    }
    else{
        const courseCategory = courseDetails.filter(course => course.category_id === id);
        res.send(courseCategory);
    }
});

app.get('/course-details', (req, res) => {
    res.send(courseDetails);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(course => course._id === id);
    res.send(selectedCourse);
    console.log(req.params.id);
});

app.listen(port, () => {
    console.log('Web Hut Api Running', port);
});