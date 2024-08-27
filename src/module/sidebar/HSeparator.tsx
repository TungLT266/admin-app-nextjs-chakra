import { Flex } from '@chakra-ui/react';
import React from 'react';

export const HSeparator = (props: { variant?: string; [x: string]: any }) => {
	const { variant, ...rest } = props;
	return <Flex h='1px' w='100%' bg='rgba(135, 140, 189, 0.3)' {...rest} />;
};

