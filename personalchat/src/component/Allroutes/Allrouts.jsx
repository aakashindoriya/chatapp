import { Route, Routes } from "react-router-dom"
import Login from "../authentication/Login"
import Signup from "../authentication/Signup"

export default function Allrouts(){
    return(<>
    <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>)
}