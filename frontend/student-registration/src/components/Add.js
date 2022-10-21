import React, { useState } from 'react'
import { addPost } from '../services/Posts';

const Add = ({add,setAdd}) => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [phno,setPhno] = useState(0);
    const [addr,setAddr] = useState("");
    const [clicked,setClicked] = useState(false);
    const json = {name:name,age:age,phno:phno,addr:addr};

    const handleAdd = () => {
        setClicked(true)
        if(name==="" || age===0 || phno===0) {
            return;
        }
        addPost(json);
        setAdd(false);
        window.location.reload();
    }

    const handleBack = () => {
        setAdd(false);
        window.location.reload();
    }

  return (
    <div className={ add ? 
                        'fixed backdrop-blur-lg w-full mx-10 pt-24 px-4 tracking-wider flex justify-center text-sm'
                        :' hidden '}>
        <div className='w-2/3 bg-gray-300 p-10 rounded-xl'>
            <div className='mb-2 pb-4 text-xl uppercase text-left font-bold'> Student details</div>
            <form className='bg-gray-200 p-4 w-full capitalize rounded-xl'>
                <table className='w-full text-right p-4'>
                    <tbody className=''>
                        <tr>
                            <td>Name<span className='text-red-700'>*</span> </td>
                            <td className='p-2 w-5/6'>
                                <input type='text' onChange={(e)=>setName(e.target.value)} className='p-2 m-2 rounded text-right w-full border-2 hover:border-blue-400 '></input>
                                <div className={(name==='' && clicked)?'text-red-700':'hidden'}>Name cannot be empty!</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Age<span className='text-red-700'>*</span></td>
                            <td className='p-2'>
                                <input type='number' onChange={(e)=>setAge(e.target.value)} className='p-2 m-2 rounded text-right w-full border-2 hover:border-blue-400 '></input>
                                <div className={(age===0 && clicked)?'text-red-700':'hidden'}>Age cannot be empty!</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Phone number<span className='text-red-700'>*</span></td>
                            <td className='p-2'>
                                <input type='number' onChange={(e)=>setPhno(e.target.value)} className='p-2 m-2 rounded text-right w-full border-2 hover:border-blue-400 '></input>
                                <div className={(phno===0 && clicked)?'text-red-700':'hidden'}>Phone Number cannot be empty!</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td className='p-2'>
                                <input type='text' onChange={(e)=>setAddr(e.target.value)} className='p-2 m-2 rounded text-right w-full border-2 hover:border-blue-400 '></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className='flex select-none'>
                <div className='py-2 px-4 mt-2 mr-auto w-1/5
                                rounded uppercase 
                                bg-yellow-600 font-semibold text-white
                                hover:shadow-lg hover:cursor-pointer'
                    onClick={handleBack}>
                
                 ◄ Back 
                </div>
                <div className='py-2 px-4 mt-2 mr-0 w-1/5
                                rounded uppercase 
                                bg-green-600 font-semibold text-white
                                hover:shadow-lg hover:cursor-pointer'
                    onClick={handleAdd}> Add </div>
            </div>
        </div>
    </div>
  )
}

export default Add