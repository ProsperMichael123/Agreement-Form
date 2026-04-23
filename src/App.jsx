import { BrowserRouter, Routes, Route } from "react-router-dom";

import MultiStepForm from "./component/MultiStepForm";
import PageNavigation from "./component/Admin/PageNavigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/*" element={<MultiStepForm />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/*" element={<PageNavigation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;