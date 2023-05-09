import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  useColorMode,
  IconButton,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Spinner,
} from "@chakra-ui/react";

const Auth = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const LoginArea = () => {
  return (
    <Flex
      minHeight="100vh"
      width={"full"}
      align="center"
      justifyContent={"center"}
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader></LoginHeader>
          <LoginForm></LoginForm>
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign={"right"} py={4}>
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Box textAlign="center">
      <Heading>Welcome Back Admin</Heading>
      <Text>Sign in to continue with Appointmate</Text>
    </Box>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };
  function handleLoading(isLoading) {
    setIsLoading(isLoading);
  }
  async function login() {
    handleLoading(true);
    //navigate("/dashboard", { replace: true });
    //here
    try {
      
      const response = await axios.post(
        "https://abc.onrender.com/users/login",
        { email: email, password: password }
      );
      handleLoading(false);
      if (response.data.role === "Admin") {
        localStorage.setItem("userInfo", response.data);
        navigate("/dashboard", { replace: true });
      } else {
        
        toast.error("Authentication Error");
      }
    } catch (e) {
      handleLoading(false);
      try {
        toast.error(e.response.data.error);
      } catch (e) {
        toast.error("Something went wrong");
      }
    }
  }

  return (
    <Box my={8}>
      <form>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            onChange={(e) => handleEmailChange(e)}
            type="email"
            placeholder="abc@gmail.com"
          ></Input>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            placeholder="••••••••••"
          ></Input>
        </FormControl>
        <Box textAlign={"left"} mt={4}>
          <Checkbox>Remember Me</Checkbox>
        </Box>
        <Button onClick={login} colorScheme="blue" width={"full"} mt={4}>
          {isLoading ? <Spinner /> : "Login"}
        </Button>
        <div>
          <Toaster position="top-right" />
        </div>
      </form>
    </Box>
  );
};

export default Auth;
