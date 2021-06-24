const courses = [
  {
    name: "CS",
    fees: 100,
  },
  {
    name: "Electronics",
    fees: 200,
  },
  {
    name: "Arts",
    fees: 300,
  },
  {
    name: "Science",
    fees: 250,
  },
  {
    name: "Law",
    fees: 300,
  },
  {
    name: "Human",
    fees: 500,
  },
];

const getCourses = (filter) => {
  let filteredCourses = courses;
  if (filter.maxFees) {
    filteredCourses = filteredCourses.filter(
      (course) => course.fees <= filter.maxFees
    );
  }
  if (filter.search) {
    filteredCourses = filteredCourses.filter(
      (course) => course.name.toLowerCase() === filter.search.toLowerCase()
    );
  }
  return filteredCourses;
};

const createCourse = (course) => {
  courses.push(course);
};

module.exports = {
  getCourses,
  createCourse,
};
