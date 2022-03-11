import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelector } from '../redux/features/auth/auth.slice';

//TODO Мб как то улучшить это
const PrivateRoute = ({children }) => {

  const { status } = useSelector(authSelector);

  return status === 'succeeded' ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;