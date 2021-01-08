export const isLogin = (nextState: any, replaceState: any) => {
    if (nextState.location.query && nextState.location.query.ticket) { // 如果url自带ticket
        localStorage.setItem('token', '123123')
    }
    if (nextState.location.query && nextState.location.query.key) { // 如果url自带key
        localStorage.setItem('token', '456456')
    }
    const token = localStorage.getItem('token')
    if (!token) {
        replaceState('/login')
    }
}