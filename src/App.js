import Main from "./Components/Main/Main";
import CreateModal from "./Components/Modals/CreateModal";
import Navbar from "./Components/Navbar/Navbar";
import Theme from "./Components/Theme/Theme";

function App() {
  return (
    <>
      <CreateModal />
      <Theme />
      <Navbar />
      <Main />
    </>
  );
}

export default App;
