const check = (user, permission, dynamicPermission, dynamicFunction, data) => {
  const userPermissions = user.permissions;

  if (permission && userPermissions && userPermissions.includes(permission)) {
    return true;
  }

  if(dynamicPermission == 'posts:comment'){
    console.log('posts:comment');
  }

  if (dynamicPermission && dynamicFunction && userPermissions && userPermissions.includes(dynamicPermission)) {
    return dynamicFunction(data)
  }

  return false;

};

const Can = props =>
  check(props.user, props.perform, props.dynamicPerform, props.dynamicFunction, props.data)
    ? props.yes()
    : props.no();

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;