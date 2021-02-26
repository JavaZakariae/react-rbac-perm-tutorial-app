import { useContext } from 'react'
import { AuthContext } from "../authContext";


const check = (user, permission, dynamicPermission, dynamicFunction, dynamicData) => {
  const userPermissions = user.permissions;

  if (permission && userPermissions && userPermissions.includes(permission)) {
    return true;
  }

  if (dynamicPermission && dynamicFunction && userPermissions && userPermissions.includes(dynamicPermission)) {
    return dynamicFunction(dynamicData)
  }

  return false;

};

const CanUser = props => {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  return check(user, props.perform, props.dynamicPerform, props.dynamicFunction, props.dynamicData)
    ? props.yes()
    : props.no();
}

CanUser.defaultProps = {
  yes: () => null,
  no: () => null
};

export default CanUser;