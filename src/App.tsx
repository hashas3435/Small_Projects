import "./App.css";
import { FIELD_NAMES, SignInSchema } from "./components/SignIn/schema";
import { getFieldComponentBySchema } from "./components/shared/zod/Componenet/utils";

function App() {
  const getFieldComponent = getFieldComponentBySchema(SignInSchema);
  return (
    <>
      <div className="card">
        {FIELD_NAMES.map((fieldName, index) => {
          return <div key={index}>{getFieldComponent(fieldName)}</div>;
        })}
      </div>
    </>
  );
}

export default App;
