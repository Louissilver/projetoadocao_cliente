let URL_BACKEND_TOP = 'https://adocao.vercel.app/api'
if (typeof window !== 'undefined') {
    window.location.hostname.includes('localhost')
    URL_BACKEND_TOP = 'http://localhost:3000/api'
}

export default {
    URL_BACKEND_TOP
};
