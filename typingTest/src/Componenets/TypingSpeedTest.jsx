import React  from "react";
import { useContext,createContext } from "react";


export const list = createContext({
    type : [
       { name : "lust"}
    ]
})

export const setType = createContext({})

