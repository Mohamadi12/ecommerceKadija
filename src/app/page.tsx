import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Home = () => {
  return (
    <div>
      <Button asChild>
        <LoginLink>Login</LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
    </div>
  );
};

export default Home;
