import { Box } from "@chakra-ui/react"
import React from "react"

interface pagelayoutProps{
    children: React.ReactNode
}

export const Pagelayout: React.FC<pagelayoutProps> = ({children}) => {
    return (
        <Box display="flex" flexDirection="row">
            {children}
        </Box>
    )
}