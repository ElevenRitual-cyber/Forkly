import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <>
            <Header />

            <main style={{height:"100vh"}}>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}