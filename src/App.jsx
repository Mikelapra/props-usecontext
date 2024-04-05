import './App.css';
import { CalculatorProvider } from './CalculatorProvider';
import RoutesApp from './Routes';

function App() {
  return (
    <>
    <CalculatorProvider>
      <RoutesApp></RoutesApp>
    </CalculatorProvider>
    </>
  );
}

export default App;
