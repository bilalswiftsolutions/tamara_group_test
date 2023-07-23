import React, { useState, useEffect } from "react";
import axios from "../axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState("");
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");


  useEffect(() => {
    fetchUsers();
    fetchLocations();
  }, []);

  const fetchUsers = () => {
    axios
      .get("/all-users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const fetchLocations = () => {
    axios
      .get("/all-locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const handleFilter = () => {
    axios
      .get("/all-users", {
        params: {
          date,
          location,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filtered transactions:", error);
        setUsers([]);
      });
  };

  return (
    <div>
        <div>
        <h3>Filters</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "10px" }}>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label style={{ marginLeft: "20px", marginRight: "10px" }}>Location: </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.location}
              </option>
            ))}
          </select>
          <button
            onClick={handleFilter}
            style={{ backgroundColor: "green", color: "white", marginLeft: "20px" }}
          >
            Apply Filters
          </button>
        </div>
      </div>
      <hr></hr>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Total Transactions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.transactions_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
