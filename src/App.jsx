import { useState, useEffect } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const gettask = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/task");
    const data = await response.json();
    setTask(data);
    setLoading(false);
  };
  useEffect(() => {
    gettask();
  }, []);

  if (loading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (editingId) {
      await fetch(`http://localhost:8000/api/task/${editingId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      setEditingId(null);
    } else {
      await fetch("http://localhost:8000/api/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
    }
    setName("");
    gettask();
  };
  const handleEdit = (items) => {
    setName(items.name);
    setEditingId(items.id);
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/api/task/${id}`, {
      method: "DELETE",
    });
    gettask();
  };
  return (
    <>
      <div>
        <h1>Task API CRUD</h1>
      </div>
      <div className="flex gap-2">
        <form onSubmit={handleSubmit} method="post">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your task"
            className="border"
          />
          <button
            type="submit"
            className="btn bg-green-600 p-2 w-20 rounded text-white"
          >
            {/* Add */}
            {editingId ? "Update" : "Add"}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn bg-gray-500 p-2 m-2 rounded text-white"
              onClick={() => {
                setEditingId(null);
                setName("");
              }}
            >
              Cancle
            </button>
          )}
        </form>
      </div>
      <div className="tab">
        <table className="border border-collapse border-gray-300 w-lg">
          <thead>
            <tr className="border border-gray-400">
              <th className="border border-gray-400">Id</th>
              <th className="border border-gray-400">Name</th>
              <th className="border border-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((tasks) => (
              <tr className="border border-gray-400">
                <td className="border border-gray-400">{tasks.id}</td>
                <td className="border border-gray-400">{tasks.name}</td>
                <td className="border border-gray-400 flex gap-2 justify-center">
                  <button
                    type="button"
                    onClick={() => handleEdit(tasks)}
                    className="border w-20 rounded bg-amber-400"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(tasks.id)}
                    className="border w-20 rounded bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default App;
