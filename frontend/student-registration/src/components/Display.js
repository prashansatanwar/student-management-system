import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Add from './Add'
import Search from './Search'

function Display({list,setList}) {
	const [add, setAdd] = useState(false)
	
	return (
		<div className='mx-10 pt-24 px-4 h-screen
		text-sm md:text-base
		flex flex-col items-center'>

			<Add add={add} setAdd={setAdd} />

			<Search list={list} setList={setList}/>

			<div className='mt-2 mx-10 px-10 py-4 text-sm md:text-base
						flex flex-col items-center w-full overflow-clip
						rounded-xl
						bg-gray-200'>

				<div className='w-full p-1 bg-green-800 text-white
								rounded-xl uppercase font-semibold select-none
								border-2 hover:border-green-700 hover:bg-green-700 
								hover:shadow-lg hover:cursor-pointer'
								onClick={()=>setAdd(true)}> Add student </div>
				

				<table className="m-2 w-full text-left text-gray-500 border-4 ">
					<thead className="text-gray-700 uppercase bg-gray-300">
						<tr>
							<th className="py-3 px-6">Student ID</th>
							<th className="py-3 px-6">Name</th>
							<th className="py-3 px-6">Age</th>
							<th className="py-3 px-6">Phone Number</th>
							<th className="py-3 px-6">Address</th>
							<th></th>
						</tr>
					</thead>
					<tbody className='border striped text-center'>
						{
							list.map((row) =>
							<tr key = {row.id} className='hover:font-bold hover:shadow hover:text-lg capitalize'>
									<td>{row.id}</td>
									<td>{row.name}</td>
									<td>{row.age}</td>
									<td>{row.phno}</td>
									<td>{row.addr}</td>
									<td>
										<Link to='/edit' state={{id:row.id}} className='hover:text-blue-500'>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
												<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
												<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
											</svg>
										</Link>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Display