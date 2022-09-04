// axios.js
import axios from "axios";

export default axios.create({
	baseURL: "/api/",
	headers: {
		"Content-Type": "application/json",
	},
});
// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		console.log("before");
		console.log(config);
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		console.log("After");
		console.log(response);
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);
