import React from "react";
import { Route, Routes } from "react-router-dom";

import { ALayout, Dashboard } from "../Admin";
import { User, UEdit, Add } from "../Admin/User";
import { Post, PEdit, PostAdd } from "../Admin/Post";
import Error from "../../_utils/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<ALayout />}>
        <Route index element="admin" />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="edit/:uid" element={<UEdit />} />
          <Route path="add" element={<Add />} />
        </Route>
        <Route path="post">
          <Route path="index" element={<Post />} />
          <Route path="edit" element={<PEdit />} />
          <Route path="add" element={<PostAdd />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
