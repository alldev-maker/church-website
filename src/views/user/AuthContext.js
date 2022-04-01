import React, { useContext, useState, useEffect } from "react"
import { auth } from "helpers/Firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(firebase.auth().currentUser);
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}