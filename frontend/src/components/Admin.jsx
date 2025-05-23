import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';

function Admin() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from backend
    axios.get("https://mern-crud-2-t79m.onrender.com/api/jobs")
      .then(res => {
        setApplications(res.data);
      })
      .catch(err => {
        console.error('Error fetching applications', err);
      });
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      {applications.length === 0 ? (
        <p>No applications received yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>
                  <a
                    href={`https://mern-crud-2-t79m.onrender.com/${app.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
