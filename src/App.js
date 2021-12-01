import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./components/Pages/HomePage";
import ContactsPage from "./components/Pages/ContactsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
