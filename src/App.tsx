import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <Header />
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
