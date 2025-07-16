import { NextResponse } from 'next/server';

let employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 70000 },
  { id: 2, name: 'Jane Smith', position: 'Project Manager', salary: 80000 },
  { id: 3, name: 'Alice Johnson', position: 'UX Designer', salary: 75000 },
];

export async function GET(request: Request) {
  return NextResponse.json(employees, { status : 200 });
}

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