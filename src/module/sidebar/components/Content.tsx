// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
//   Custom components
import Brand from 'module/sidebar/components/Brand';
import Links from 'module/sidebar/components/Links';

// FUNCTIONS

function SidebarContent() {
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Brand />
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links />
				</Box>
			</Stack>
		</Flex>
	);
}

export default SidebarContent;
