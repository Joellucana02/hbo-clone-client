import { AuthContextProvider } from "./context/AuthContext";
import Routing from "./pages/Routing";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>
  );
}

export default App;
