import React from 'react'
import Getdata from '../../../../Services/getdata'

const  Userid = async(props) => {
    const data=Getdata();
    const users= await data

    const userid =props.params.id;
    const userinfo=users[userid - 1]
  return (
    <> 
    <h2>user information</h2>
    <div className="cont" style={{border:"1px solid black", paddingLeft:" 50px",backgroundColor:"greenyellow", width:"50%"}}>
        <h2>id:{userinfo.id}</h2>
        <h2>Username: {userinfo.name}</h2>
        <h2>Email: {userinfo.email}</h2>
    </div>
        
  </>
  )
}

export default  Userid;

export const generateStaticParams = async () => {
    const data = await Getdata();
    return data.map(user => ({
        id: user.id.toString()
    }));
}