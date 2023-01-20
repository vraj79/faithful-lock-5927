import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack ,Image} from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <> 
    <div>
    <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        //   bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={6}
          w={"full"}
          maxW={"md"}
          // bg={useColorModeValue('white', 'gray.700')}
          rounded={"xl"}
          boxShadow={"lg"}
           
          p={5}
          my={12}
          alignItems={"center"}
        >
          <Image
            src={
              "https://drive.google.com/uc?export=view&id=1Au2Q9AJ9LQwCZ4VIzPk52z5ZroOkNBfh"
            }
            width={"30%"}
          />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Login
          </Heading>
          <form   style={{ width: "100%" }}>
            <FormControl id="email" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Email address</FormLabel>
              <Input
                placeholder="your-email@dailysope.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                
              />
            </FormControl>
            <FormControl id="password" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Password</FormLabel>
              <Input type="password" name="password"   />
            </FormControl>
            <Stack spacing={6} alignItems={"center"}>
              
                <Button
                 
                  
                  width={"200px"}
                  bg={"green.700"}
                  color={"white"}
                  _hover={{
                    bg: "green.600",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              
            </Stack>
          </form>
        </Stack>
      </Flex>
         
    </div>
     
    </>
  )
}

export default Login