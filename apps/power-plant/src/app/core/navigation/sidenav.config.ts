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
    icon: 'pin_drop',
    url: '/plants/map',
    ACCESS: 'admin',
  },
  {
    name: 'Units',
    icon: 'layers',
    url: '/unit/units-analysis/3',
    ACCESS: 'admin',
  },
  {
    name: 'Curve',
    icon: 'bar_chart',
    url: '/curve',
    ACCESS: 'admin',
  },
  {
    name: 'Reports',
    icon: 'summarize',
    url: '/report',
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
