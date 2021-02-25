import React from "react";

import posts from "../posts";
import { AuthConsumer } from "../authContext";
import Can from "./Can";

const isOwnPost = ({ userId, postOwnerId }) => {
  if (!userId || !postOwnerId) return false;
  return userId === postOwnerId;
}
const isNotOwnPost = (data) => {
  return !isOwnPost(data)
}
const PostsList = () => (
  <AuthConsumer>
    {({ user }) => (
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
                  <Can
                    user={user}
                    perform="posts:edit:admin"
                    dynamicPerform="posts:edit"
                    dynamicFunction={isOwnPost}
                    dynamicData={{
                      userId: user.id,
                      postOwnerId: post.ownerId
                    }}
                    yes={() => (
                      <button className="btn btn-sm btn-primary">
                        Edit Post
                      </button>
                    )}
                  />
                  <Can
                    user={user}
                    dynamicPerform="posts:comment"
                    dynamicFunction={isNotOwnPost}
                    dynamicData={{
                      userId: user.id,
                      postOwnerId: post.ownerId
                    }}
                    yes={() => (
                      <button className="btn btn-sm btn-warning">
                        Comment Post
                      </button>
                    )}
                  />
                  <Can
                    user={user}
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
    )}
  </AuthConsumer>
);

export default PostsList;