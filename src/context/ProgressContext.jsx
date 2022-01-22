import { createContext, useState } from "react";

export const ProgressContext = createContext();

export const ProgressContextProvider = ({ childern }) => {
    const [data, setData] = useState({
        category: "",
        description: "",
        country: ""
    });

    const handleData = (x, y) => {
        setData({ ...data, [x]: y });
    }

    return <ProgressContext.Provider value={{ data, handleData }}> {childern}</ProgressContext.Provider >
}