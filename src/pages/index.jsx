import Sidebar from "../components/Sidebar.jsx";
import ChatList from "../components/ChatList.jsx";
import ChatWindow from "../components/ChatWindow.jsx";

const Index = () => {
    return <div className="flex">
        <Sidebar />
        <ChatList />
        <ChatWindow />
    </div>
}

export default Index;