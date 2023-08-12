import React, { forwardRef, useMemo } from 'react';
import { Box, InputLabel, TextField, type TextFieldProps } from '@mui/material';
import { Flex } from 'reflexbox';


interface TextInputProps extends TextFieldProps<'standard'> {}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((
  { ...rest },
  ref,
) => {
  return (
    <TextField
      inputRef={ref}
      fullWidth
      {...rest}
    />
  );
});