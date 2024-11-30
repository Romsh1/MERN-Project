import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/users" });

export const addUser = (userData) => API.post("/add", userData);
export const getUsers = () => API.get("/");
export const updateUser = (id, updatedData) => API.put(`/${id}`, updatedData);
export const deleteUser = (id) => API.delete(`/${id}`);
