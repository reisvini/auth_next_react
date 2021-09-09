type User = {
  permissions: string[];
  roles: string[];
};

type ValidadeUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validadeUserPermissions({
  user,
  permissions,
  roles,
}: ValidadeUserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllroles = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasAllroles) {
      return false;
    }
  }

  return true;
}
