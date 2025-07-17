'use client';
import { useEffect, useState } from 'react';

type Employee = {
  id: number;
  name: string;
  position: string;
  salary: number | string;
};

export default function EmployeePage() {
  const [data, setData] = useState<Employee[]>([]);
  const [form, setForm] = useState<Employee>({
    id: 0,
    name: '',
    position: '',
    salary: '', 
  });
  const [isEdit, setIsEdit] = useState(false);

  const fetchData = async () => {
    const res = await fetch('/api/employee');
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = isEdit ? 'PUT' : 'POST';
    await fetch('/api/employee', {
      method,
      body: JSON.stringify({
        ...form,
        salary: Number(form.salary), 
      }),
    });

    setForm({ id: 0, name: '', position: '', salary: '' }); 
    setIsEdit(false);
    fetchData();
  };

  const handleEdit = (emp: Employee) => {
    setForm({ ...emp, salary: String(emp.salary) }); 
    setIsEdit(true);
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/employee', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  return (
    <main className="max-w-2xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4 bg bg-gray-900 p-2 text-white">
        Employee Management
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Lorem Ipsum"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="IT Consultant"
          className="w-full p-2 border rounded"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="5000000"
          className="w-full p-2 border rounded"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
          required
          min={1} // opsional: validasi agar tidak bisa 0 atau negatif
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          {isEdit ? 'Update' : 'Add'}
        </button>
      </form>

      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-900 text-white text-left text-sm uppercase">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="px-4 py-2 font-semibold">{emp.name}</td>
              <td className="px-4 py-2">{emp.position}</td>
              <td className="px-4 py-2 text-gray-600">
                Rp {Number(emp.salary).toLocaleString()}
              </td>
              <td className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => handleEdit(emp)}
                  className="bg-green-600 p-2 text-white hover:underline rounded font-bold"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 p-2 rounded text-white hover:underline font-bold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
