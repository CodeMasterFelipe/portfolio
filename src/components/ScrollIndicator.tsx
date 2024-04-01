import { KeyboardArrowDown } from "@mui/icons-material"
import { IconButton } from "@mui/material"


export const ScrollIndicator = () => {
  return (
    <IconButton
      id="scroll-indicator"
      onClick={() => window.scrollTo({ top: window.outerHeight, behavior: 'smooth' })}
      sx={{
        pt: 2,
        animation: 'bounce 3s infinite',
        '@keyframes bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
          '10%': { transform: 'translateY(-14px)' },
          '30%': { transform: 'translateY(-8px)' },
        }
      }}>
      <KeyboardArrowDown fontSize="large" sx={{ opacity: 0.5 }} />
    </IconButton>
  )
}
