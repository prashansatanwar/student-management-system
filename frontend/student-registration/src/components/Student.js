import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { deletePost, getById, saveChanges } from '../services/Posts';
import Deleted from '../components/Deleted';


function Student () {
    const loc = useLocation();
    const id = loc.state.id;

    const [row,setRow] = useState({});
    const [name,setName] = useState(row.name);
    const [age,setAge] = useState(row.age);
    const [phno,setPhno] = useState(row.phno);
    const [addr,setAddr] = useState(row.addr);

    const [isDeleted,setIsDeleted] = useState(false);
    const [isSaved,setIsSaved] = useState(false);

    useEffect(()=>{
        getById(id)
            .then((res)=>{
                setRow(res)
                setName(res.name)
                setAge(res.age)
                setPhno(res.phno)
                setAddr(res.addr)
            })
    },[id])

    const json = {name:null,age:0,phno:0,addr:null};

    const handleChange = (option,value) => {
        setIsSaved(false)
        switch(option){
            case "name":
                setName(value);
                break;
            case "age":
                setAge(value);
                break;
            case "phno":
                setPhno(value);
                break;
            case "addr":
                setAddr(value);
                break;
            }
    }

    const handleSave = () => {
        if(name!==row.name) json.name = name;
        if(age!==row.age) json.age = age;
        if(phno!==row.phno) json.phno = phno;
        if(addr!==row.addr) json.addr = addr;

        saveChanges(row.id,JSON.stringify(json));

        setIsSaved(true)
    }

    const handleDelete = () => {
        deletePost(row.id);
        setIsDeleted(true);
    }

    const refreshPage = () => {
		setTimeout(()=>{
			window.location.reload(false);
		}, 500);
		console.log('page to reload')
	}

  return (
    <div className='mx-10 pt-24 px-4 h-screen flex flex-col items-center' >
        <Deleted isDeleted={isDeleted} />

        <div className='w-full items-center justify-center flex tracking-wider rounded-xl bg-gray-200 px-8'>

            <div className='w-1/4 h-2/3 border-1 m-2 rounded-xl'>
                <img src='../dp.png' className='h-full w-full'></img>
            </div>

            <table className='ml-auto mr-0 flex flex-col w-3/4 text-right items-right pb-4'>
                <tbody className='px-4'>
                    <tr>
                        <td>ID</td>
                        <td className='m-2 py-4 w-full tracking-wider'>{id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type='text' value={name} onChange={(e)=>handleChange('name',e.target.value)} className='p-2 m-2 text-right w-full border-2 hover:border-blue-400 tracking-wider capitalize'></input></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td><input type='number' value={age} onChange={(e)=>handleChange('age',e.target.value)} className='p-2 m-2 text-right w-full border-2 hover:border-blue-400 tracking-wider'></input></td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td><input type='number' value={phno} onChange={(e)=>handleChange('phno',e.target.value)} className='p-2 m-2 text-right w-full border-2 hover:border-blue-400 tracking-wider'></input></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><input type='text' value={addr} onChange={(e)=>handleChange('addr',e.target.value)} className='p-2 m-2 text-right w-full border-2 hover:border-blue-400 tracking-wider capitalize'></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={isSaved?'w-full text-green-700 text-right m-1 p-2':'hidden'}> Changes saved! </div>

        <div className='m-2 text-white font-semibold flex select-none w-full select-none'>
            
            <Link to='/' className='z-10 py-2 px-4 mx-2 rounded-xl uppercase w-1/5
                        hover:shadow-lg hover:cursor-pointer
                        bg-yellow-600'
                onClick={refreshPage}>
                 ◄ Back 
            </Link>
            <div className='py-2 px-4 mx-2 rounded-xl uppercase w-2/5 hover:shadow-lg hover:cursor-pointer bg-red-600'
                    onClick={isDeleted ? ()=>{}:handleDelete}>
                Delete
            </div>
            <div className='py-2 px-4 mx-2 rounded-xl uppercase w-2/5 hover:shadow-lg hover:cursor-pointer bg-yellow-600 '
                    onClick={isDeleted ? ()=>{}:handleSave}>
                Save 
            </div>
        </div>
    </div>
  )
}

export default Student