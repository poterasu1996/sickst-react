import React, { useEffect, useState } from "react";

let logoutTimer;

// store auth context, available globally
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime(); // current time
    const adjExpiprationTime = new Date(expirationTime).getTime(); // time when expires
    const remainingDuration = adjExpiprationTime - currentTime; // time untill expiration

    return remainingDuration;
}

// get the token from local storage only if is available
const retrievedStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);
    
    if (remainingTime <= 0) { // if the time left is less than 1 min
        localStorage.clear();
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    };
}

// use this component as a wrapper @ other components, to have access to upper info
export const AuthContextProvider = (props) => {
    const tokenData = retrievedStoredToken();  // store token data
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token; // set token only if we have it in local storage
    }
    
    const [token, setToken] = useState(initialToken);

    // it token is not empty, return true 
    const userIsLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.clear();

        if (logoutTimer) {
            clearTimeout(logoutTimer); // clear the timer, if it was set
        }
    }

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime); // used to set a timer
        console.log(remainingTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime); // automatically log out user
    }

    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration); // set timer to the remaining time
        }
    }, [tokenData]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;