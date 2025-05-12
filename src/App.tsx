import { Card } from "./components";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  return (
    <ul className="h-[300px]">
      <Card />
    </ul>
  );
};

export default App;
