"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    setData(value) {
        this.data.push(value);
    }
    getData() {
        return [...this.data];
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
const datastore = new DataStorage();
datastore.setData('Wassem');
datastore.setData('Darkwa');
console.log(datastore.getData());
function createcoursegoal(title, description, date) {
    let coursegoal = {};
    coursegoal.title = title;
    coursegoal.description = description;
    coursegoal.completeduntil = date;
    return coursegoal;
}
const names = ['Wassem', 'Darkwa'];
