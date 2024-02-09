import React, { useState } from "react";
import Card from '../components/Card'
const Cards = ({ courses, category }) => {
    let allCourse = []
    const [likedcourses, setlikedcourses] = useState([]);
    const getCourses = () => {
        if (category === 'All') {

            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourse.push(course)
                });
            })
            return allCourse;
        }
        else{
            return courses[category];
        }
    }
    return (
        <div className="flex flex-wrap justify-center ">

            {getCourses()?.map((course) => (
                <Card
                    key={course.id}
                    course={course}
                    likedcourses={likedcourses}
                    setlikedcourses={setlikedcourses} />
            ))
            }


        </div>
    )
}
export default Cards