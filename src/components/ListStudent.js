import React, { useState, useEffect } from "react";
import listStudent from "../api/listStudent";
import { Container } from "@material-ui/core";
import deleteStudent from "../api/deleteStudent";
export default (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudent = async () => {
      const data = await listStudent();
      var list = [];
      data.map((student) => list.push(student));
      setStudents(list);
    };
    getAllStudent();
  }, []);
  return (
    <div>
      <Container maxWidth="md">
        <table className="striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirsName</th>
              <th>LastName</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.address}</td>

                <button
                  class="waves-effect  red lighten-1 btn"
                  onClick={() => {
                    deleteStudent(student.id);
                  }}
                >
                  DELETE
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};
