import Container from "./components/layout/Container";
import Feed from "./components/layout/Feed";
import Sidebar from "./components/layout/Sidebar";
import Widgets from "./components/layout/Widgets";

function App() {
  return (
    <Container>
      <Sidebar />
      <Feed />
      <Widgets />
    </Container>
  );
}

export default App;