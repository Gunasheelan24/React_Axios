import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';
import Footer from './Footer';
import Edit from './Edit';

function Home() {
   let Navigate = useNavigate();
  //UseState For Storing the Data's From the Axios Then Block
  const [DataStore, setDataStore] = useState([])
  //Inside UseEffect i used axios to get data from the json-server ...
  useEffect(() => { 
    axios.get("http://localhost:3000/Data")
    .then((e) => {setDataStore(e.data)})
    .catch((e) => {alert(e)})
  },[])
  return (
    <>
    <Nav />
    <div className="container-fluid col-sm-5 w-100">
        <div className="row bg-black">
            <div className="col-sm-12 d-flex justify-content-start mt-4 mb-4">
                <Link to="/Add" className='btn btn-info w-25 btn-lg'>ADD</Link>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-sm-12 col-sm-5">
            <table className='table table-hover table-success text-center'>
        <thead> 
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Website</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    {DataStore.map((e) => (
            <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.website}</td>
                <td>
                    <Link to={`/Ubdate/${e.id}`} className='btn btn-primary'>Edit</Link>
                    <button onClick={() => (HandleDelete(e.id))} className='btn ms-2 btn-danger'>Delete</button>
                </td>
            </tr>
    ))}
    </tbody>
    </table>
            </div>
        </div>
    </div>
    {/* Footer Section */}
    <Footer />

    </>
  )
  function HandleDelete(id) {
     let Dvalue = window.confirm("Do You Want To Delete");
     if(Dvalue) { 
        axios.delete("http://localhost:3000/Data/"+ id)
        .then(Res => {
              alert("Done");
              Navigate("/")
            })
        .catch(err => alert(err))
     }
  }
}

export default Home