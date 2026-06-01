const fs = require('fs/promises');

// //Synchronous read
// const data= JSON.parse (fs.readFileSync('students.json', 'utf-8'));
// console.log(data);



const getAllStudents = async () => {
    const data = await fs.readFile('students.json', 'utf-8');
    return JSON.parse(data);
}

const getStudentByName = async (name) => {
    const students = await getAllStudents();
    return students.find(s => s.name.toLowerCase() === name.toLowerCase());
}

const addStudent = async (student) => {
    const students = await getAllStudents();
    students.push(student);
        fs.writeFile('students.json', JSON.stringify(students), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Student added successfully!');
            }
        });
}

const updateStudentCourse =(id, newCourse)=>{
    
        const students = getAllStudents();
        const student = students.find(s => s.id === id);
        if (student) {
            student.course = newCourse;
            fs.writeFile('students.json', JSON.stringify(students), (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log('Student course updated successfully!');
                }
            });
        } else {
            console.log('Student not found!');
        }
}

const deleteStudent = (id) => {
        let students = getAllStudents();
        students = students.filter(s => s.id !== id);
        fs.writeFile('students.json', JSON.stringify(students), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Student deleted successfully!');
            }
        });
}

module.exports = {
    getAllStudents,
    addStudent,
    updateStudentCourse,
    deleteStudent
}

// Sync code is blocking, so we will use async code for better performance and user experience.

// Asynchronous code allows other operations to run while waiting for file I/O, improving responsiveness and efficiency, Async code is being forward to event loop, so it doesn't block the main thread, allowing for better performance and user experience.