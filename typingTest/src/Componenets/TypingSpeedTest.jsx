import React  from "react";
import { useContext,createContext } from "react";


export const list = createContext({
    type : [
       { name : "lust",
       number : '03239878'
    
    }
    ,
    {
        name : "just"

    }
    ]
})

export const setType = createContext({})

