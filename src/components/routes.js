import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";

export const publickRoutes = [
	{
		path: LOGIN_ROUTE,
		Component: Login
	}
]
export const privateRoutes = [
	{
		path: CHAT_ROUTE,
		Component: Chat
	}
]