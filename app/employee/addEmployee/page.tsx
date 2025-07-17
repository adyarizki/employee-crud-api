import Employee from '../page';
export default function AddEmployeePage() {
  return (
    <main className="max-w-2xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Add Employee</h1>
      {/* Add your form or content for adding an employee here */}
       <form  className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-2 border rounded"
          // value={form.name}
          // onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Posisi"
          className="w-full p-2 border rounded"
          // value={form.position}
          // onChange={(e) => setForm({ ...form, position: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Gaji"
          className="w-full p-2 border rounded"
          // value={form.salary}
          // onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {/* {isEdit ? 'Update' : 'Tambah'} */}Tambah
        </button>
      </form>
    </main>
  );
}