"use client"

import { useEffect, useState } from "react";
import Loader from "./loader";


async function myList() {
    let data=await fetch("https://jsonplaceholder.typicode.com/users")
    data =await data.json();
    return data;
}

const page = () => {

const [users,setusers]=useState([]);
const [loading,setloading]=useState(true);
useEffect(()=>{
 const fetchdata =async () =>{
   let fethdatausers =await myList();
   setusers(fethdatausers);
   setloading(false)
 }
 fetchdata()
},[])


  return (
    <>
<h1>here  is  loading  with client  side api data </h1>  
<table>
  <tbody>
    <tr>
      <th>name</th>
      <th>email</th>
     
     
    </tr>
  </tbody>
  </table>  
{
   loading ? <Loader/> :(
    users.map((user,i) =>(
      <tr key={i}>
        <td>name:{user.name}</td>
       <td>email:{user.email}</td>
      </tr>
    ))
   )
}

    </>
  )
}

export default page