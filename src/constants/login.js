export const LoginType = {
    Account: 1,
    Github: 2,
}

const GithubClientId = '9c8d8ef6ba910fe3ba94'
const Githubredirect_uri = 'http://127.0.0.1:5173/login'
const OauthGithubUrl = `https://github.com/login/oauth/authorize?client_id=${GithubClientId}&redirect_uri=${Githubredirect_uri}&scope`

export {OauthGithubUrl}