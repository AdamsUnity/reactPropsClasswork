import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <section className="flex justify-center items-center gap-8 h-screen flex-col lg:flex-row">
      <Login />
      <Signup />
    </section>
  );
}

export default App;
