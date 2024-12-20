import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchEmployees } from '../../store/slices/employeeSlice';

export const EmployeeList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading, error } = useSelector(
    (state: RootState) => state.employees
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <div className="space-y-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="p-4 border rounded shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-gray-600">@{employee.username}</p>
            <p className="text-gray-600">{employee.email}</p>
            <p className="text-gray-600">{employee.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};