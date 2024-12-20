import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { TodoList } from './components/TodoList/TodoList';
import { EmployeeList } from './components/EmployeeList/EmployeeList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm mb-4">
            <div className="max-w-2xl mx-auto p-4">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Todo List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;