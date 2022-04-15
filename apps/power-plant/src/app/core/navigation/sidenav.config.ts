// import { ACCESS_TYPE } from 'src/app/core/types/access.type';

export interface SidenavNode {
  name: string;
  url: string;
  icon: string;
  ACCESS: 'admin' | 'user';
  children?: SidenavNode[];
  hasDividerAfter?: boolean;
}

export const SIDENAV_CONFIG: SidenavNode[] = [
  ///////////admin menu//////////////
  {
    name: 'Dashboard',
    url: '/dashboard',
    ACCESS: 'admin',
    icon: 'dashboard',
    hasDividerAfter: true,
  },
  {
    name: 'Plant List',
    icon: 'format_list_bulleted',
    url: '/plants',
    ACCESS: 'admin',
  },
  {
    name: 'Map',
    icon: 'map',
    url: '/ss',
    ACCESS: 'admin',
  },
  {
    name: 'Charts',
    icon: 'insights',
    url: '/manager/user-create',
    ACCESS: 'admin',
  },
  {
    name: 'Reports',
    icon: 'summarize',
    url: '/manager/class-list',
    ACCESS: 'admin',
  },
  {
    name: 'Announcements',
    icon: 'campaign',
    url: '/manager/announcement-list',
    ACCESS: 'admin',
  },
];

// export const BREADCRUMP_BASE = [
//   {
//     value: 'teacher',
//     name: 'Home',
//     url: '/teacher/dashboard',
//   },
//   {
//     value: 'manager',
//     name: 'Home',
//     url: '/manager/dashboard',
//   },
//   {
//     value: 'student',
//     name: 'Home',
//     url: '/student/dashboard',
//   },
// ];
