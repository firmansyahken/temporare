import HomePage from "./pages/Home/Home";
import { FormProvider } from "./utils/context/FormContext"

function App() {
  return (
    <>
      <FormProvider>
          <HomePage />
      </FormProvider>
    </>
  );
}

export default App;
