import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser]= useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'))

    const navigate = useNavigate();

    const [credit, setCredit] = useState('false');

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const loadCreditData =async()=>{
        try{
            const {data} = await axios.get(backendUrl + '/api/user/credits', {headers:{token}})

            if(data.success){
                setCredit(data.credits);
                setUser(data.user);
            }
        }catch(err){
            console.log(err);
            toast.error(err.message);
        }
    }

    const generateImage = async(prompt)=>{
        try{
            const {data} = await axios.post(backendUrl+ '/api/image/generate-image',{prompt},{headers:{token}})

            if(data.success){
                loadCreditData()
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditData()
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }
        }catch(err){
            console.log(err);
            toast.error(err.message);
        }
    }

    const logout =()=>{
        localStorage.removeItem('token');
        setToken('');
        setUser(null)
    }

    useEffect(()=>{
        if(token){
            loadCreditData()
        }
    },[token])

    const value ={
        user, setUser,showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditData,logout,
        generateImage
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext };
export default AppContextProvider;