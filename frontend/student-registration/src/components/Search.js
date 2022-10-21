import React from 'react'
import { getByPartialName, getPosts } from '../services/Posts'

const Search = ({list,setList}) => {

	// const handleClick = ()=>{
	// 	getByName()
	// }

	const handleChange = (e) => {
		if(e!==''){
			getByPartialName(e)
				.then((res)=>{
					setList(res);
				})
		}
		else{
			getPosts()
				.then((res)=>{
					setList(res)
				})
		}
	}

	return (
		<div className='w-full flex'>
			<input type='text' placeholder='Search ' onChange={(e)=>handleChange(e.target.value)} className='p-2 w-full rounded text-right border-2 hover:drop-shadow-lg hover:border-blue-300 text-md tracking-wider'/>

			{/* <button className='p-2 hover border-2 hover:border-blue-400 hover:drop-shadow-lg' onClick={handleClick}>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
				<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
			</svg>
			</button> */}

		</div>
	)
}

export default Search