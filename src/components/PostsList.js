import React from "react";

import posts from "../posts";
import CanUser from "./CanUser";
import CanUserOnPost from "./CanUserOnPost";

const isOwnPost = ({ userId, postOwnerId }) => {
  if (!userId || !postOwnerId) return false;
  return userId === postOwnerId;
}
const isNotOwnPost = (data) => {
  return !isOwnPost(data)
}
const PostsList = () => (
  <div>
    <h2>Posts List</h2>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id}>
            <th scope="row">{index + 1}</th>
            <td>{post.title}</td>
            <td>
              <CanUserOnPost
                post={post}
                perform="posts:edit:admin"
                dynamicPerform="posts:edit"
                dynamicFunction={isOwnPost}
                yes={() => (
                  <button className="btn btn-sm btn-primary">
                    Edit Post
                  </button>
                )}
              />
              <CanUserOnPost
                post={post}
                dynamicPerform="posts:comment"
                dynamicFunction={isNotOwnPost}
                yes={() => (
                  <button className="btn btn-sm btn-warning">
                    Comment Post
                  </button>
                )}
              />
              <CanUser
                perform="posts:delete"
                yes={() => (
                  <button className="btn btn-sm btn-danger">
                    Delete Post
                  </button>
                )}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PostsList;