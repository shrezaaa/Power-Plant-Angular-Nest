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
    name: 'Plants List',
    icon: 'format_list_bulleted',
    url: '/plants/list',
    ACCESS: 'admin',
  },
  {
    name: 'Plants Map',
    icon: 'map',
    url: '/plants/map',
    ACCESS: 'admin',
  },
  {
    name: 'Invertors Unit',
    icon: 'ad_units',
    url: '/unit/inv',
    ACCESS: 'admin',
  },
  {
    name: 'Curve',
    icon: 'bar_chart',
    url: '/manager/user-create',
    ACCESS: 'admin',
  },
  {
    name: 'Reports',
    icon: 'summarize',
    url: '/manager/class-list',
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
