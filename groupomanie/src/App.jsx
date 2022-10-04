import React from "react";
import { Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
// import { UidContext } from "./utils/context";
// import Routes from "./Routes";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { getUser } from "./actions/user.actions";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={< Home />} />
                <Route exact path="/login" element={< Login />} />
                <Route exact path="/signup" element={< Signup />} />
            </Routes>
        </Router >
    )
}

export default App;
    // const [uid, setUid] = useState(null)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     const fetchToken = async () => {
    //         await axios({
    //             method: 'get',
    //             url: `{http://localhost:3000/api/user}${uid}`,
    //             withCredentials: true,
    //         })
    //             .then((res) => {
    //                 setUid(res.data)
    //             })
    //             .catch((err) => console.log('No token'))
    //     }
    //     fetchToken();

    //     if (uid) dispatch(getUser(uid))
    // }, [uid, dispatch])

