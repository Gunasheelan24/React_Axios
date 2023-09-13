import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


const UBDATE = () => {
  let {id} = useParams();
  const [SsData, setSsData] = useState({
    id:"",
    name:"",
    username:"",
    email:"",
    website:""
  })
  useEffect(() => { 
    axios.get("http://localhost:3000/Data/"+id)
    .then((e) => {setSsData(e.data)})
    .catch((e) => {alert(e)})
  },[])
  let OubdateValue = (ev) => {
     ev.preventDefault();
     axios.put("http://localhost:3000/Data/" + id, SsData)
     .then(Res => {
        alert("EVERYTHING IS DONE")
     })
     .catch((err) => {alert(err)})
  }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-sm-12 bg-dark text-white-50 fw-bold">
                 <h1 className='text-center'>UBDATE</h1>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-sm-12">
              <form onSubmit={OubdateValue}>
                <label className='form-label'>S.No: </label>
                <input type="text" value={SsData.id} className='form-control' onChange={(e) => (setSsData({...SsData,id:e.target.value}))} />
                <label className='form-label'>Name: </label>
                <input type="text" value={SsData.name} className='form-control' onChange={(e) => (setSsData({...SsData,name:e.target.value}))} />                
                <label className='form-label'>UserName</label>
                <input type="text" value={SsData.username} className='form-control' onChange={(e) => (setSsData({...SsData,username:e.target.value}))} />                
                <label className='form-label'>Email</label>
                <input type="text" value={SsData.email} className='form-control' onChange={(e) => (setSsData({...SsData,email:e.target.value}))} />
                <label className='form-label'>Website</label>
                <input type="text" value={SsData.website} className='form-control' onChange={(e) => (setSsData({...SsData,website:e.target.value}))} />
                <button className='btn mt-2 btn-primary'>Done</button>
             </form>
            </div>
        </div>
      </div> 
    </>
  )
}

export default UBDATE