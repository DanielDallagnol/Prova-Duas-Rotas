import { Box } from "@mui/material";
import type { ReactNode } from "react";


type ComponentBoxProps = {
  children: ReactNode;
};

export default function ComponentBox({ children }: ComponentBoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
}
