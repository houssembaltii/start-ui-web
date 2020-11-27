import React, { FC } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

export interface HitZoneProps extends BoxProps {}

export const HitZone: FC<HitZoneProps> = React.forwardRef(
  ({ ...rest }, ref: any) => {
    return (
      <Box
        ref={ref}
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        aria-hidden="true"
        {...rest}
      />
    );
  }
);