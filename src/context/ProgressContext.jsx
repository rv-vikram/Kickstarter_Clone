import { createContext, useState } from "react";

export const ProgressContext = createContext();

export const ProgressContextProvider = ({ childern }) => {
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState({
        category: "",
        description: "",
        country: ""
    });

    const isAuth = () => {
        if (auth) {
            return true;
        } else {
            return false;
        }
    }

    const toggleAuth = () => {
        setAuth(!auth);
    }
    const handleData = (x, y) => {
        setData({ ...data, [x]: y });
    }

    return <ProgressContext.Provider value={{ data, handleData, isAuth, toggleAuth }}> {childern}</ProgressContext.Provider >
}