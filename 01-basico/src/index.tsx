import { createRoot } from "react-dom/client";
import { App } from "./appComponent";
import * as classes from "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <div>
      <table>
        <thead>
          <tr>
            <th>ENTORNO</th>
            <th>API_URL</th>
            <th>TECNOLOGÍAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{process.env.ENV}</td>
            <td>{process.env.API_BASE}</td>
            <td>
              <ul className={classes.resetListado}>
                <li>webpack@5.93.0</li>
                <li>sass@1.77.8</li>
                <li>react@18.3.1</li>
                <li>typescript@5.5.4</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={classes.container}>
      <h1 className={classes.title}>WEBPACK TEMPLATE</h1>
      <App />
    </div>
  </>
);
