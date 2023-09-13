import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const Edit = () => {
  const [PostData, setSetPostData] = useState({
    id: "",
    name:"",
    username:"",
    website:"",
    email:""
  }) 
function SubmitAll(e) {
   if(PostData != "") {
    e.preventDefault();
    axios.post("http://localhost:3000/Data",PostData)
    .then((Post) => {
      alert("Added Successfull")
    }) 
  }
}
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-black text-white-50 text-center">
          <div className="col-sm-12">
             <h1 className='display-4 fw-bold'>Enter New Data</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <form onSubmit={SubmitAll}>
                <label htmlFor="" className='form-label fw-bold mt-2'>S.no: </label>
                <input type="text" className='form-control' onChange={(e) => (setSetPostData({...PostData,id:e.target.value}))} />
                <label htmlFor="" className='form-label fw-bold mt-2'>Name: </label>
                <input type="text" className='form-control' onChange={(e) => (setSetPostData({...PostData,name:e.target.value}))} />
                <label htmlFor="" className='form-label fw-bold mt-2'>UserName: </label>
                <input type="text" className='form-control' onChange={(e) => (setSetPostData({...PostData,username:e.target.value}))} />
                <label htmlFor="" className='form-label fw-bold mt-2'>Email: </label>
                <input type="text" className='form-control' onChange={(e) => (setSetPostData({...PostData,email:e.target.value}))} />
                <label htmlFor="" className='form-label fw-bold mt-2'>Website: </label>
                <input type="text" className='form-control' onChange={(e) => (setSetPostData({...PostData,website:e.target.value}))} />
                <div className="text-end">
                <button type='submit' className='btn btn-lg mt-3 btn-info'>Submit</button>
                </div>
            </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Edit