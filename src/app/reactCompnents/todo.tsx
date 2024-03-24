"use client";

import { useEffect, useState } from "react";
import { employeeData } from "../data/data";

type EmployeeDataType = {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
};

let nextId = 4;

const Todo = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [isUpdate, setUpdate] = useState(false);
  const [data, setData] = useState<EmployeeDataType[]>([]);

  useEffect(() => {
    setData(employeeData);
  }, []);

  const handleDelete = (id: number) => {
    if (id) {
      if (window.confirm("Are you sure you delete this item?")) {
        const dt = data.filter((item: EmployeeDataType) => item.id !== id);
        setData(dt);
      }
    }
  };

  function handleEdit(id: number) {
    const dt = data.filter((item: EmployeeDataType) => item.id === id);
    if (dt) {
      setUpdate(true);
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  }

  function handleClear() {
    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
    setUpdate(false)
  }

  const handleUpdate = ()=>{
    const index = data.map((item:EmployeeDataType)=>{
      return item.id
    }).indexOf(id)

    const dt = [...data]
    dt[index].firstName = fname;
    dt[index].lastName = lname;
    dt[index].age = age
    setData(dt)
    handleClear()
  }

  

  return (
    <div className="p-8">
      <div className="pb-24 flex flex-col justify-center items-center gap-y-4">
        <label>
          First Name :
          <input
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name :
          <input
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Age :
          <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <div>
          {!isUpdate ? (
            <>
              <button
                className=" self-start px-6 py-1 bg-slate-800 text-white rounded-md mr-2 mt-2"
                onClick={() => {
                  setData([
                    ...data,
                    {
                      id: nextId++,
                      firstName: fname,
                      lastName: lname,
                      age: age,
                    },
                  ]);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                className=" self-start px-6 py-1 bg-slate-800 text-white rounded-md mr-2 mt-2"
                onClick={handleUpdate}
              >
                Update
              </button>
            </>
          )}
          <button
            onClick={handleClear}
            className="self-start px-6 py-1 bg-slate-800 text-white rounded-md "
          >
            Clear
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead className="">
          <tr className="">
            <td className=" font-bold pb-2 ">Sr. No</td>
            <td className=" font-bold pb-2 ">Id</td>
            <td className=" font-bold pb-2 ">First Name</td>
            <td className=" font-bold pb-2 ">Last Name</td>
            <td className=" font-bold pb-2 ">age</td>
            <td className="font-bold pb-2">Actions</td>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item: EmployeeDataType, index: number) => (
            <tr key={index + 1} className="">
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  className=" mr-2 py-2 w-20 rounded-md bg-blue-600 text-white"
                >
                  Edit
                </button>
                <button
                  className=" py-2   w-20 rounded-md bg-red-600 text-white"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
