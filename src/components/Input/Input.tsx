import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface InputProps extends ChakraInputProps {
  label: string;
  errors?: FieldError;
  helper?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  isRequired?: FormControlProps["isRequired"];
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    errors,
    isRequired,
    helper,
    label,
    name,
    placeholder,
    register,
    ...rest
  } = props;

  return (
    <FormControl isInvalid={!!errors} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput ref={ref} {...rest} {...register(name)} />
      {!errors ? (
        <FormHelperText>{helper}</FormHelperText>
      ) : (
        <FormErrorMessage>{errors.message}</FormErrorMessage>
      )}
    </FormControl>
  );
});
Input.displayName = "Input";
