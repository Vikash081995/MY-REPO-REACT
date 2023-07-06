import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "./usersApi";

const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = useState({ ...user });
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onMutate: (updatedUser) => {
      queryClient.setQueryData(["user", user.id], updatedUser);
      setIsEditing(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user", user.id]);
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefaults();
    mutate(fields);
  };

  if (isLoading) {
    return "Saving your changes.....";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Details:
          <textarea
            name="details"
            type="text"
            value={fields.details}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save </button>
      </form>
    </div>
  );
};

export default UserForm;
