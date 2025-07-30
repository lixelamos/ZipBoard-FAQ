import FAQList from './components/FAQList';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <ThemeToggle />
      <main className="pt-24 px-6 flex justify-center items-center">

        <FAQList />
      </main>
    </div>
  );
}

export default App;
