enum PermissionEnum {
  'login_user.store',
  'users.index',
  'users.store',
  'users.update',
  'users.delete',
  'admin.index',
  'admin.store',
  'admin.update',
  'admin.delete',
  'permissions.index',
  'permissions.delete',
  'permissions.store',
  'permissions.update',
  'roles.index',
  'roles.delete',
  'roles.store',
  'roles.update',
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
