import React from 'react'
import Getdata from '../../../Services/getdata'
import Link from 'next/link';

const Staticsgentarion = async () => {
const data =Getdata();
const  users =await data

  return (
    <>
     <h3>SSG generation  using  next js </h3>   
     <tr>
        
        <td>name</td>
        <td>email</td>
        <td>username</td>
     </tr>
     {
        users.map((user,i)=>(
            <tr key={i}>
                <Link href={`/SSG/${user.id}`}>{user.name}</Link>
                <td>{user.email}</td>
                <td>{user.username}</td>

            </tr>

        ))
     }
       
        
        </>
  )
}

export default Staticsgentarion