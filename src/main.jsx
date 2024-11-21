import ReactDOM from "react-dom/client";
import store from "./app/store"
import App from "./app/App";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<App />
</Provider>
);
