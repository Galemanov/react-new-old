import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";

import { Home, About } from "./pages";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
