import Login from "./Login";


export default function Home() {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">🏨 Hostel Management System</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to the portal. Use the dashboard to manage hostels.
          </p>
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </a>

          <Login/>
        </div>
      </div>
    );
  }