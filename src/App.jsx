// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
// import { Toaster } from "@/components/ui/toaster";
// import AnimatedCursor from "react-animated-cursor";

// function App() {
//   return (
//     <>
//     <AnimatedCursor/>
//       <Toaster />
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640); // or your preferred breakpoint
    };

    checkIsMobile(); // run on mount
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      {/* Render animated cursor only on desktop */}
      {!isMobile && (
        <AnimatedCursor
          innerSize={12}
          outerSize={40}
          color="0,0,0"
          outerAlpha={0.3}
          innerScale={1.3}
          outerScale={3}
          trailingSpeed={6}
          clickables={["a", "button", ".link"]}
        />
      )}

      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
