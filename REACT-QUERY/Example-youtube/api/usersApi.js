import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const getUsers = () => api.get("/users").then((res) => res.data);

export const getUser = (id) => {
  api.get(`/users/${id}`).then((res) => res.data);
};

export const updateUser = ({ id, ...updatedUser }) => {
  api.put(`/users/${id}`, updatedUser).then((res) => res.data);
};
