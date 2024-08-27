import { Box, Portal } from '@chakra-ui/react';
import AdminNavbar from './AdminNavbar';

export default function Header() {
  return (
    <Portal>
      <Box>
        <AdminNavbar/>
      </Box>
    </Portal>
  );
}
