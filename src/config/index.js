let URL_BACKEND_TOP = 'https://dogapitest.herokuapp.com/'
if (typeof window !== 'undefined' && window.location.hostname.includes('localhost')) {
    URL_BACKEND_TOP = 'http://localhost:5000'
}

export default {
    URL_BACKEND_TOP
};
