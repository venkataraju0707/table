import { useState } from "react";

export default function App() {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);

  const addPerson = () => {
    if (!place || !name || !age) return;

    const newEntry = { place, name, age };
    setPeople([...people, newEntry]);

    setPlace("");
    setName("");
    setAge("");
  };

  const clearList = () => {
    setPeople([]);
  };

  const removePerson = (index) => {
    const updated = [...people];
    updated.splice(index, 1);
    setPeople(updated);
  };

  return (
    <div className="container">
      <style>{`
        .container {
          width: 500px;
          margin: 40px auto;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .form {
          margin-bottom: 20px;
        }

        .form input {
          padding: 8px;
          margin: 5px;
          width: 120px;
        }

        button {
          padding: 8px 12px;
          margin: 5px;
          cursor: pointer;
        }

        table {
          margin: 0 auto;
          border-collapse: collapse;
          width: 100%;
        }

        table th, table td {
          border: 1px solid #333;
          padding: 6px;
        }

        .empty {
          margin-top: 20px;
          font-style: italic;
          color: gray;
        }
      `}</style>

      <h1>Add People to Table</h1>

      <div className="form">
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={addPerson}>Add</button>
        <button onClick={clearList}>Clear</button>
      </div>

      {people.length === 0 ? (
        <p className="empty">No entries yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {people.map((p, index) => (
              <tr key={index}>
                <td>{p.place}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>
                  <button onClick={() => removePerson(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
