import useRequest from "@/hooks/useRequest/useRequest.js";

export const getFriends =  () => {
    return useRequest({
        url: "/friend/list",
        method: "get"
    })
}

export const getGroups =  () => {
    return useRequest({
        url: "/group/list",
        method: "get"
    })
}