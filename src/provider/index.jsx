import {UserProvider} from "./UserContext";

export default function AppProvider({children}) {

    return <UserProvider>{children}</UserProvider>;
}