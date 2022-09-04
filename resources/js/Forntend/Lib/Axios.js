// axios.js
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: "/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

const useAxiosLoader = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const inc = (mod) => setCounter((c) => c + mod);

        const handleRequest = (config) => {
            inc(1);
            return config;
        };
        const handleResponse = (response) => {
            inc(-1);
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
            return response;
        };
        const handleError = (error) => {
            inc(-1);
            toast.error(error.response.data.message);
            return Promise.reject(error);
        };

        // add request interceptors
        const reqInterceptor = instance.interceptors.request.use(
            handleRequest,
            handleError
        );
        // add response interceptors
        const resInterceptor = instance.interceptors.response.use(
            handleResponse,
            handleError
        );
        return () => {
            // remove all intercepts when done
            instance.interceptors.request.eject(reqInterceptor);
            instance.interceptors.response.eject(resInterceptor);
        };
    }, []);

    return counter > 0;
};

export const AxiosLoader = useAxiosLoader;

export default instance;
