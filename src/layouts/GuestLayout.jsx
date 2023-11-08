// import { Navigate, Outlet } from "react-router-dom";
// import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
  /*
  const { userToken, currentUser } = useStateContext();
  
  if (userToken) {
    if (currentUser.user_type === 'analyst') {
      return <Navigate to="/" />;
    }
    return <Navigate to="/" />;
  }
  */
 
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(/images/background.png)` }}>
      <div className="flex-grow flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg space-y-12">
          <div className="flex flex-col items-center p-4 bg-white rounded-full shadow-lg">
            <img
              className="h-32 w-auto shadow-lg rounded-full mt-4 mb-4"
              src={`/images/logo.png`}
              alt="F13 Gamers Club"
            />
            <h1 className="text-xl font-semibold text-gray-800">
              <span className="text-2xl font-bold">F13 GamersClub</span>
            </h1>
          </div>
          {
            // <Outlet />
          }
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-gray-500">F13 GamersClub © 2023</p>
      </div>
    </div>
  );
}
