import { useState, useEffect } from "react";
import axios from "./Axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Redux/slice/auth";

export const syncProfile = () => {
    const [data, setData] = useState({});
    const token = useSelector((state) => state.auth.token);
    const isLogedin = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const profile = await axios.get("/users/view-profile");
            setData(profile.data.data);
            dispatch(authActions.updateUserProfile(profile.data.data));
        }
        if (isLogedin) {
            fetchData();
        }
    }, [token]);

    return [data];
};
