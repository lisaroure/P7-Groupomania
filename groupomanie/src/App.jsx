import React, { useState, useEffect } from "react";
import { UidContext } from "./utils/context";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "./actions/user.actions";

const App = () => {
    const [uid, setUid] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchToken = async () => {
            await axios({
                method: 'get',
                url: `{http://localhost:3000}jwtid`,
                withCredentials: true,
            })
                .then((res) => {
                    setUid(res.data)
                })
                .catch((err) => console.log('No token'))
        }
        fetchToken();

        if (uid) dispatch(getUser(uid))
    }, [uid, dispatch])

    return (
        <UidContext.Provider value={uid}>
            < Routes />
        </UidContext.Provider>
    )
}

export default App;