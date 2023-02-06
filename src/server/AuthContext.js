import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, db } from "./fireBase";
import { doc, setDoc, getDoc, updateDoc, addDoc, collection, getDocs, serverTimestamp, onSnapshot, orderBy } from "firebase/firestore";

// Creating a new context
const UserContext = createContext(null)

// Exporting to provide on App
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const [userData, setUserData] = useState(null)

    const [serviceData, setServiceData] = useState(null)

    const [isActive, setIsActive] = useState(0);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const saveAccountDetails = async (userID, fullName, age, currencyType) => {
        const data = {
            fullName: fullName,
            age: age,
            currencyType: currencyType
        };
        await setDoc(doc(db, "userData", userID), data);
    }

    const getUserData = async (currentUser) => {
        const docRef = doc(db, "userData", currentUser.uid);
        const docSnap = await getDoc(docRef);
        try {
            setUserData(docSnap.data());
        } catch {
            console.log("No documents found")
        }
    }

    const addServiceData = async (userID, name, price, start, end) => {
        const data = {
            serverTime: serverTimestamp(),
            sName: name,
            sPrice: price,
            sStart: start,
            sEnd: end
        }
        const dbRef = collection(db, `${userID}`);
        await addDoc(dbRef, data);
    }

    const getServiceData = async (userID) => {
        const querySnapshot = await getDocs(collection(db, userID), orderBy("sName", "asc"));
        setServiceData(querySnapshot)
        return querySnapshot
    }

    const updateUserData = async (value) => {
        const docRef = doc(db, "users");
        await updateDoc(docRef, {
            userName: value
        });
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const verifyEmail = () => {
        return sendEmailVerification(user)
    }

    const updateEmailAddress = (email) => {
        return updateEmail(user, email)
    }

    // For switching active tab in Dashboard
    const switchTab = (index) => {
        setIsActive(index)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser !== null) {
                getUserData(currentUser)
                getServiceData(currentUser.uid)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, saveAccountDetails, logout, login, resetPassword, updateEmailAddress, verifyEmail, getUserData, updateUserData, userData, user, isActive, switchTab, addServiceData, getServiceData, serviceData }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}