import { useSelector } from "react-redux";

export const useUser = () => {
  const user = useSelector((state) => {
    return state.user;
  });

  return user;
};
