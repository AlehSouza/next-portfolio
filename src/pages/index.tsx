import { Box } from "@chakra-ui/react"
import Portfolio from "@/components"

const Index = () => {
  return (
    <Box>
      <Portfolio.header />
      <Box
        backgroundImage={'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/bgImage.png?alt=media&token=c05b7127-7f39-4c25-b33c-dc0ca24361c2'}
        backgroundSize={'cover'}
        py={'80px'}
      >
        <Portfolio.about />
        <Portfolio.breakline />
        <Portfolio.trajectory />
        <Portfolio.breakline />
        <Portfolio.tecnologies />
        <Portfolio.breakline />
        <Portfolio.projects />
        <Portfolio.breakline />
      </Box>
    </Box>
  )
}

export default Index