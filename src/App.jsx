import AppLayout from "./components/AppLayout";
import { JobProvider } from "./contexts/JobContext";

function App() {
  return (
    <JobProvider>
      <AppLayout />
    </JobProvider>
  );
}

export default App;
