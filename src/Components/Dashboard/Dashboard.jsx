import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AddTransaction } from '../Transactions/AddTransaction';
import Navbar from "../Navbar/Navbar"

const Dashboard = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route exact path="/dashboard/loans" element={<AddTransaction/>}/>
            <Route exact path="/dashboard/investment" element={<AddTransaction/>}/>
        </Routes>
        </>
    )
}

export default Dashboard
