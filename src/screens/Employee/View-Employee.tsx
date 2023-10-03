import {useState,useEffect} from 'react';
import axios from 'axios';
import {Table,Container,Button} from '@mantine/core';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

function ViewEmployee(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const dataparms = params.get('data');
    if(dataparms){
    const data = JSON.parse(decodeURIComponent(dataparms));
    let parseddata=data;
    let editdata=async()=>{
        try{
            var obj={
                "userId":parseddata
            }
            const editresponse = await axios.post('https://localhost:7190/api/Employee/GetEmployeeById',obj);
            console.log(editresponse.data[0])
    
     
    
        }catch(err){
            console.error("Error Fetchin data:",err)
      }
    
    }
    editdata();
}else{
    console.log("Not Found")
}  
    return(
        <></>
    )
}
export default ViewEmployee;