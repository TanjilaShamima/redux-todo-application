import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- navbar --> */}
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header />
          <hr className="mt-4" />

          {/* <!-- todo list --> */}
          <TodoList />

          <hr className="mt-4" />

          {/* <!-- footer --> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
