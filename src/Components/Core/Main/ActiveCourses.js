import React from 'react'
import Button from '../../Common/Buttons/Button';

function ActiveCourses() {
    const hasActiveCourse = false;
  return (
    <div className='px-8 mt-4 w-full'>
        <p className='font-bold  text-3xl underline text-richblue-700 font-inter'>Recent</p>
        <div className='flex mt-6 h-[125px] gap-10 bg-pure-greys-50 justify-center items-center border-l-4 border-richblue-700'>
        {hasActiveCourse ? (
            <p>There is an active course going on.</p>
          ) : (
            <>
             <p>No active course is going on.</p>
            <Button>
            Explore Courses
        </Button>
            </>
           
          )}
        </div>
    </div>
  )
}

export default ActiveCourses