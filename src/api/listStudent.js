const listStudent = async () => {
  const response = await fetch("http://localhost:8080/student/students");
  const data = await response.json();
  return data;
};
export default listStudent;
