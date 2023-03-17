class DataStorage<T> {
  private data: T[] = [];

  setData(value: T) {
    this.data.push(value);
  }

  getData() {
    return [...this.data];
  }

  removeData(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
}

const datastore = new DataStorage<string>();
datastore.setData('Wassem');
datastore.setData('Darkwa');
console.log(datastore.getData());

interface CourseGoal {
  title: string;
  description: string;
  completeduntil: Date;
}

function createcoursegoal(
  title: string,
  description: string,
  date: Date
) {
  let coursegoal: Partial<CourseGoal> = {};
  coursegoal.title = title;
  coursegoal.description = description;
  coursegoal.completeduntil = date;

  return coursegoal;
}

const names: Readonly<string[]> = ['Wassem', 'Darkwa'];
