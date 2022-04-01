import { adminRoot } from './defaultValues';
import HomeIcon from '@mui/icons-material/Home';

const data = [
  {
    id: 'home',
    icon: 'simple-icon-home',
    label: 'Dashboard',
    to: `${adminRoot}/Home`,
  },
  {
    id: 'mysermons',
    icon: 'simple-icon-pencil',
    label: 'My Sermons',
    to: `${adminRoot}/sermons`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    id: 'mydevotions',
    icon: 'iconsminds-open-book',
    label: 'My Devotions',
    to: `${adminRoot}/devotions`,
  },
  {
    id: 'profile',
    icon: 'iconsminds-user',
    label: 'Profile',
    to: `${adminRoot}/Profile`,
  },

  // TODO LATER
  // 
  // {
  //   id: 'preacher',
  //   icon: 'simple-icon-notebook',
  //   label: 'Preacher Notes',
  //   to: `${adminRoot}/Preacher`,
  // },
  // {
  //   id: 'admin',
  //   icon: 'iconsminds-business-man-woman',
  //   label: 'Admin',
  //   to: `${adminRoot}/Admin`,
  // },
];
export default data;
