import { NextResponse } from 'next/server';

let employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 7000000 },
  { id: 2, name: 'Jane Smith', position: 'Project Manager', salary: 8000000 },
  { id: 3, name: 'Alice Johnson', position: 'UX Designer', salary: 7500000 },
];

export async function GET(request: Request) {
  return NextResponse.json(employees, { status : 200 });
}

// This function handles the creation of a new employee
export async function POST(request: Request) {
  const body = await request.json();
  const { name, position, salary } = body;
  
  const newEmployee = {
    id: Date.now(), // Using timestamp as a simple unique ID
    name,
    position,
    salary,
  };
  employees.push(newEmployee);
  return NextResponse.json(newEmployee, { status: 201 });
}
// This function handles the update of an existing employee
export async function PUT(request: Request) {
    const body = await request.json();
    const { id, name, position, salary } = body;
    
    const employeeIndex = employees.findIndex((emp) => emp.id === id);
    if (employeeIndex === -1) {
        return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }
    
    employees[employeeIndex] = { id, name, position, salary };
    return NextResponse.json(employees[employeeIndex], { status: 200 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  employees = employees.filter((emp) => emp.id !== id);
  return NextResponse.json({ message: 'employee data successfully deleted' });
}