import Sidebar from "./cpn/Sidebar.jsx";
import ListWrapper from "@/pages/home/cpn/list/ListWrapper.jsx";
import ChatWindow from "@/components/ChatWindow.jsx";

const Home = () => {
    return <div className="flex">
        <Sidebar />
        <ListWrapper/>
        <ChatWindow />
    </div>
}

export default Home;