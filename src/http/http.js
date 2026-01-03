import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',  //send json data
        'Accept': 'application/json',       //accept json response
    },
}
)

//interceptors
    http.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access_token')  // Example: get token from local storage
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }
            return config
            }, 
            (error) => {
            return Promise.reject(error)
}
)

// export default http
    http.interceptors.response.use(
        (response) => {
            return response
            }, 
            (error) => {
            if (error.response) {
                // Handle specific status codes if needed
                if (error.response.status === 401) {
                    // Unauthorized access - maybe redirect to login
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user')
                    window.location.href = '/login'   //redirect to login

                }           
            }
            return Promise.reject(error)
}
)

export default http