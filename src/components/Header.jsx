
import { Box, Heading, Button, Stack, Flex } from '@chakra-ui/react'
import ImageBanner from '../images/banner.jpg'

const Header = () => {
  return (
    <>
      <Box 
        h='50vh'
        bg='black'
        bgImage={`url(${ImageBanner})`}
        bgRepeat='no-repeat'
        bgSize='cover'

      >
        <Flex
          direction='column'
          alignItems='center'
          justify='center'
          p={['0 10%', null, '0 20%']}
          h='100%'
          bg='rgb(0 0 0 / 60%)'
        >
          <Heading
            color='white'
            textAlign='center'
            fontWeight='light'
            letterSpacing='4px'
          >
              DOMINA EL TERRENO 
          </Heading>
          <Stack
            direction={{
              base: 'column', 
              md: 'row'
            }}
            w={['100%', null, 'auto']}
            spacing='30px'
            marginTop='20px'
          >
            <Button 
              variant='outline' 
              color='white' 
              size='lg'
              letterSpacing='2px'
              fontWeight='light' 
              borderRadius='0' 
              _hover={{
                color:'black',
                bg: 'white'
              }}
            > 
              VER DETALLES 
            </Button>
            <Button
              variant='outline' 
              color='white' 
              size='lg'
              letterSpacing='2px'
              fontWeight='light' 
              borderRadius='0'  
              _hover={{
                color:'black',
                bg: 'white'
              }}
            > 
              VER VIDEO 
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default Header
