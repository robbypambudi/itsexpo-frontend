enum PermissionEnum {
  // General
  'USER',
  'ADMIN',
  'dashboard_admin',
  'dashboard_user',
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
  'roles_unassign.store',
  'roles_assign.store',
  'roles.detail',
  'all_url_shortener.index',
  'url_shortener.delete',
  'url_shortener.store',
  'url_shortener.update',
  'announcements.index',
  'announcements.store',
  'pre_event.index',
  // Journalistik
  'jurnalistik.index',
  'jurnalistik_join.store',
  'jurnalistik_team.delete',
  'jurnalistik_ketua.store',
  'jurnalistik_member.store',
  'admin_jurnalistik.index',
  'admin_jurnalistik.detail',
  'pembayaran_jurnalistik.store',
  // KTI
  'kti.index',
  'kti.store',
  'admin_kti.index',
  'admin_kti.detail',
  'pembayaran_kti.store',
  'pembayaran_kti.index',
  // Robotik
  'robotik.index',
  'robotik.store',
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
