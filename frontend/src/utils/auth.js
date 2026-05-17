export const saveTokens = (data) => {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
};

export const getAccessToken = () => {
    return localStorage.getItem("access");
};

export const getRefreshToken = () => {
    return localStorage.getItem("refresh");
};

export const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
};

export const clearTokens = logout;

export const authFetch = async (url, options = {}) => {
    const token = getAccessToken();

    const headers = {
        ...(options.headers || {}),
        Authorization: token ? `Bearer ${token}` : "",
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    return response;
};