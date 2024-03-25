const ChatWindow = () => {
    return (
        <div className="h-screen flex-auto">
            {/* 聊天界面 */}
            <div className="flex flex-col h-full">
                <div className="flex-1 p-4 overflow-y-auto">
                    {/* 聊天消息 */}
                    <div className="mb-4">
                        <div className="flex flex-col justify-start gap-5">
                            {/* 对方 */}
                            <div className={'flex gap-2'}>
                                <div className="rounded-full bg-blue-500 h-8 w-8 flex items-center justify-center">A</div>
                                <div className="bg-gray-200 text-[#000] p-2 rounded-lg">
                                    Hello
                                </div>
                            </div>

                            {/* 自己 */}
                            <div className={'flex self-end gap-2'}>
                                <div className="rounded-full bg-blue-500 h-8 w-8 flex items-center justify-center order-2">B</div>
                                <div className="bg-gray-200 text-[#000] p-2 rounded-lg">
                                    Hello
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 更多聊天消息 */}
                </div>
                {/* 输入框 */}
                <div className="flex items-center justify-between h-[200px]">
                    <div className={'flex-1 rounded-l-lg h-full'}>
                        <textarea
                            className={` resize-none appearance-none block w-full h-full 
                            px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-white
                            focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                            placeholder="Type your message..."
                            rows={3} // 设置行数
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;