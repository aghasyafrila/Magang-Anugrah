import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar/sidebar";
import Editprofile from "./page/Editprofile/Editprofile";
import Pegawai from "./page/Pegawai/pegawai";
import Mutasi from "./page/Mutasi/mutasi";
import Project from "./page/Project/project";
import Projectdipilih from "./page/Projectdipilih/projectdipilih";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
               
                <Route path="/dashboard" element={<Sidebar />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="editprofile" element={<Editprofile />} />
                    <Route path="pegawai" element={<Pegawai />} />
                    <Route path="mutasi" element={<Mutasi />} />
                    <Route path="project" element={<Project />} />
                    <Route path="projectdipilih" element={<Projectdipilih />} />


                </Route>
                <Route path="/coba" element={<Dashboard />} />
            </Routes>
        </Router>


    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
