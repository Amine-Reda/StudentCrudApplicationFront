import axios from "axios";
export default (id) => {
  axios({
    method: "DELETE",
    url: `http://localhost:8080/student/students/${id}`,
  }).catch((error) => {
    console.log(error);
  });
};
