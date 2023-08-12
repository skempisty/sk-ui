import React, { forwardRef } from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

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