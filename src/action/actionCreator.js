export const login = (user) => {
    return {user, type: 'LOGIN'}
};

export const logout = () => {return {type:'LOGOUT'}};