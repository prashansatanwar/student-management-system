import axios from 'axios'

const USER_REST_API_URL = "http://localhost:8000/students"

export function getPosts(){
	return axios
		.get(USER_REST_API_URL)
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

export function getById(id){
	return axios
		.get(USER_REST_API_URL+"/"+id)
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

export function getByName(name){
	return axios
		.get(USER_REST_API_URL+"/name/"+name)
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

export function getByPartialName(name){
	return axios
		.get(USER_REST_API_URL+"/pname/"+name)
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

export function addPost(data){
	console.group(data);
	var config = {
		method: 'post',
		url: USER_REST_API_URL,
		headers: { 
		  'Content-Type': 'application/json'
		},
		data : data
	  };
	  
	  axios(config)
	  .then(function (response) {
		console.log(JSON.stringify(response.data));
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}

export function saveChanges(id,data){
	console.log(data)
	var config = {
	method: 'patch',
	url: USER_REST_API_URL+"/"+id,
	headers: { 
		'Content-Type': 'application/json'
	},
	data : data
	};

	return axios(config)
	.then(function (response) {
	console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
	console.log(error);
	});

}

export function deletePost(id){
	var config = {
		method: 'delete',
		url: USER_REST_API_URL+"/"+id,
		headers: { 
		  'Content-Type': 'application/json'
		}
	  };
	  
	  axios(config)
	  .then(function (response) {
		console.log(JSON.stringify(response.data));
	  })
	  .catch(function (error) {
		console.log(error);
	  });
	  
}
