import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashBoard";
import OwnerDashboard from "./components/Owner/OwnerDashBoard";
import OwnerDetail from "./components/Owner/OwnerDetail";
import Home from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HostelList from "./components/Hostel/HostelList";
import HostelDetail from "./components/Hostel/HostelDetail";
import ScrollToTop from "./components/HelpingUI/ScrollToTop";
function App() {
  return (
    <Router>
        <ScrollToTop /> {/* ✅ Ensures scroll resets on every route change */}
      <Routes>
        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route  path="/admin-dashboard/owner/:id"
          element={ <ProtectedRoute role="admin"> <OwnerDetail /> </ProtectedRoute>}
        />
        
        <Route path="/owner-detail/:id"
            element={ <ProtectedRoute role="owner"> <OwnerDetail /> </ProtectedRoute>}
        />

        {/* Owner Routes */}
        <Route
          path="/owner-dashboard"
          element={
            <ProtectedRoute role="owner">
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Shared Routes */}
        <Route
          path="/dashboard/hostels"
          element={<HostelList />}  // ✅ no props, it will read from zustand
        />
        <Route
          path="/hostel/:hostelId"
          element={
            <ProtectedRoute>
              <HostelDetail />
            </ProtectedRoute>
          }
        />


        {/* Unauthorized + Catch All */}
        <Route
          path="/unauthorized"
          element={<div className="p-4 text-red-600">Unauthorized Access</div>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
