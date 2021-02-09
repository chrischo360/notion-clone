import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react'
import React from 'react'

export const RadioCard = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const checkbox = getCheckboxProps()
    return (
        <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
    )
}


export const Showcase = () => {
    const options = ["Team wiki", "Projects & Tasks", "Notes & Docs"]
    const { getRootProps, getRadioProps} = useRadioGroup({
        name: "images",
        defaultValue: "Team wiki",
        onChange: console.log
    })

    const group = getRootProps()

    return (
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
      )
    
}

