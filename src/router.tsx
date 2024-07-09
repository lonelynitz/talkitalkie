import { createBrowserRouter} from "react-router-dom";
import { Home } from "./component/home";
import { Login } from "./component/login/login";
import { SignIn } from "./component/login/signIn";
import { HomePage } from "./component/home/home";
import { Room } from "./component/home/room/room";
import { ChatHome } from './component/Chat/index'

export const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/signIn",
    element : <SignIn/>
  },
  {
    path : "/home",
    element : <HomePage/>
  },
  {
    path: "/home/room",
    element : <Room/>
  },
  {
    path : "/chat",
    element : <ChatHome/>
  }
])