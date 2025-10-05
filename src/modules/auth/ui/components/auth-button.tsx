import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
const AuthButton = () => {
  return (
    <Button>
      <UserCircleIcon />
      Sign In
    </Button>
  );
};

export default AuthButton;
