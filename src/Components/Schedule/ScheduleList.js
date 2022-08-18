import React from 'react'
import CalenderListItem from '../CalenderListItem';
import NoItemAvailabl from '../NoItemAvailabl';

function ScheduleList({SchedulesList}) {
    if(!SchedulesList.length){
        return (
            <>
            <NoItemAvailabl />
            </>
        )
    }
  return (
    <>
        {SchedulesList.map((value, key) => {
          
              return (
                <CalenderListItem
                  propid={value._id}
                  title={value.Description}
                  color={value.color}
                  startTime={value.Entry}
                  date={value.CurrDate}
                  endTime={value.Exit}
                  empName={value.EmpID}
                  location= {value.Location}
                />
              );
            })}
    </>
  )
}

export default ScheduleList