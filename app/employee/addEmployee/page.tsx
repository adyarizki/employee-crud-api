'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import router

type Employee = {
  id: number;
  name: string;
  position: string;
  salary: number | string; // Allow salary to be a string for input purposes
};

export default function AddEmployeePage() {
  const router = useRouter(); // Inisialisasi router
  const [form, setForm] = useState<Employee>({
    id: 0,
    name: '',
    position: '',
    salary: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/employee', {
      method: 'POST',
      body: JSON.stringify({
        ...form,
        salary: Number(form.salary),
      }),
    });

    // Reset form
    setForm({ id: 0, name: '', position: '', salary: 0 });

     router.push('/employee');
  };

  return (
    <main className="max-w-2xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Add Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="John ..."
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="IT Staff"
          className="w-full p-2 border rounded"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="50000"
          className="w-full p-2 border rounded"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </form>
    </main>
  );
}
