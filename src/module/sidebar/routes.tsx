import { Icon } from '@chakra-ui/react';
import { MdHome } from 'react-icons/md';

// import { IRoute } from 'types/navigation';

const routes: any[] = [
  {
    name: 'Main Dashboard',
    path: '/t',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
