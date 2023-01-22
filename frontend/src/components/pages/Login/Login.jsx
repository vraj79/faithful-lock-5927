import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack ,Image, useToast} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { Userlogin } from '../../../redux/UserLogin/userLoginaction'
 
const Login = () => {

  const [login,SetLogin]=useState({})
  const dispatch = useDispatch();
     
  const toast=useToast()
    const {isAuth,isAuthError,isAuthLoading} =useSelector((store)=>store.loginAuth)
     
    
    const {state} = useLocation();
    const navigate = useNavigate();
    
     
   
  const handlechange=(e)=>{
     const {name,value}=e.target
     SetLogin({
      ...login,
      [name]:value
     })
  }
// console.log(state)
  const HandleSubmit=(e)=>{
    e.preventDefault()
    dispatch(Userlogin(login));
     
  }

   useEffect(()=>{
     if(isAuth){
      if (state===null) {
        // console.log(state.form);
        toast({
          title: "Success",
          description: "Welcome To The Login Dashboard",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
         navigate("/");

      }else if(state!==null){
        navigate(state.from, { replace: true });

       return toast({
          title: "Success",
          description: "Welcome To The Login Dashboard",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
     }
     if(isAuthError){
      toast({
        title: "Something Went Wrong ",
        description: "Enter correct Email and Password",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
     }
   },[isAuth,isAuthError])
    //  useEffect(()=>{

    //  },[HandleSubmit])
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
          <form   style={{ width: "100%" }} onSubmit={HandleSubmit}>
            <FormControl id="email" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Email address</FormLabel>
              <Input
                placeholder="your-email@dailysope.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="password" isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Password</FormLabel>
              <Input type="password" name="password"  onChange={handlechange}  />
            </FormControl>
            <Stack spacing={6} alignItems={"center"}>
              
                <Button
                 
                  isLoading={isAuthLoading}
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
          <Stack>
          <Link to="/signup">
               <Button
                 
                  
                 width={"200px"}
                 bg={"green.700"}
                 color={"white"}
                 _hover={{
                   bg: "green.600",
                 }}
                 
               >
                 Click to go Register Page
               </Button>
               </Link>
          </Stack>
          
        </Stack>
      </Flex>
         
    </div>
     
    </>
  )
}

export default Login