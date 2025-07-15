import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctor = ({docId,speciality}) => {
    const {doctors} = useContext(AppContext);
    const [relDoc, setRelDoc] = useState([]);
    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality)
        }
    },[doctors,speciality,docId]);
  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctor
