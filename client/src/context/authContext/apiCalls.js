import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import clientAxios from '../../apis';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const data = await clientAxios.post("auth/login", user);
    dispatch(loginSuccess(data));

    console.log(data)
  } catch (err) {
    dispatch(loginFailure( err.response.data.message ));
  }
};
