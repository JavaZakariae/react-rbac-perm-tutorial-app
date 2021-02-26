import { useContext } from 'react'
import { AuthContext } from "../authContext";


const check = (user, post, permission, dynamicPermission, dynamicFunction) => {
  const userPermissions = user.permissions;

  if (permission && userPermissions && userPermissions.includes(permission)) {
    return true;
  }

  if (dynamicPermission && dynamicFunction && userPermissions && userPermissions.includes(dynamicPermission)) {
    return dynamicFunction({
      userId: user.id,
      postOwnerId: post.ownerId
    })
  }

  return false;

};

const CanUserOnPost = props => {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  return check(user, props.post, props.perform, props.dynamicPerform, props.dynamicFunction)
    ? props.yes()
    : props.no();
}

CanUserOnPost.defaultProps = {
  yes: () => null,
  no: () => null
};

export default CanUserOnPost;