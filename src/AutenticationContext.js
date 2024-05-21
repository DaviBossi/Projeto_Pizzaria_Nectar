import React, { createContext, useState } from 'react'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({ name: "", telefone: "" })
    const [end, setEnd] = useState({ bairro: "", rua:"", num:"" })
    const [sabor, setSabor] = useState()
    const [preço, setPreço] = useState(0);

    return (
        <AuthContext.Provider value={{ data, setData, end, setEnd, sabor, setSabor, preço, setPreço }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;