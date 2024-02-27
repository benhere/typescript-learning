
// Generic Utility Types

interface CourseGoal1{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal1(
    title: string,
    description: string,
    date: Date
): CourseGoal1 {
    let courseGoal1: Partial<CourseGoal1> = {};
    courseGoal1.title = title;
    courseGoal1.description = description;
    courseGoal1.completeUntil = date;
    return courseGoal1 as CourseGoal1;
}

const names: Readonly<string[]> = ["Peter", "Kevin"];

// names.push('Mike');
// names.pop();