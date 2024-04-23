import useRequest from "@/hooks/useRequest/useRequest.js";

export const getConversations =  () => {
    return useRequest({
        url: "/conversation/list",
        method: "get"
    })
}

