import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";

function App() {
  return (
    <section className="">
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
    </section>
  );
}

export default App;
