import { useSelector } from "react-redux";

export default function useAuth() {
  const user = useSelector((state) => {
    return state.user;
  });
  return {
    user,
  };
}
