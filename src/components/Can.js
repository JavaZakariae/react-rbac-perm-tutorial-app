const check = (user, permission, dynamicPermission, dynamicFunction, dynamicData) => {
  const userPermissions = user.permissions;

  if (permission && userPermissions && userPermissions.includes(permission)) {
    return true;
  }

  if(dynamicPermission === 'posts:comment'){
    console.log('posts:comment');
  }

  if (dynamicPermission && dynamicFunction && userPermissions && userPermissions.includes(dynamicPermission)) {
    return dynamicFunction(dynamicData)
  }

  return false;

};

const Can = props =>
  check(props.user, props.perform, props.dynamicPerform, props.dynamicFunction, props.dynamicData)
    ? props.yes()
    : props.no();

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;