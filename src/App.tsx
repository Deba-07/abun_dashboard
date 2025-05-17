import { Sidebar } from "./components/Sidebar";
// import { MainContent } from "./components/MainContent";
import DashboardPage from "./pages/Page";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <DashboardPage />
      {/* <MainContent /> */}
    </div>
  );
};
export default App;
