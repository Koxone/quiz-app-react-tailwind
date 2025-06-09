import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./styles/layout";
import MainView from "./components/pages/MainView";
import WelcomeView from "./components/pages/WelcomeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <WelcomeView />
            </Layout>
          }
        />
        <Route
          path="/main"
          element={
            <Layout>
              <MainView />
            </Layout>
          }
        />
        <Route
          path="/welcome"
          element={
            <Layout>
              <WelcomeView />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
