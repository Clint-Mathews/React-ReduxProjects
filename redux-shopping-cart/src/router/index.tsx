import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Loading from "../components/Loading";
import Auth from "../pages/Auth";
import Landing from "../pages/Landing";


export default function AppRouter() {
    const isLogggedIn = useSelector((state : any) => state.auth.isLoggedIn);
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/login" element={<Auth />} />
                    {isLogggedIn && <Route path="/dashboard" element={<Landing />} /> }
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}