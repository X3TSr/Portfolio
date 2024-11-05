const ROUTES = {
    home: '/',
    projects: '/projects',
    projectDetail: { path: "/project/:id", to: "/project/" },
    contact: '/contact',
    getInTouch: '/get-in-touch',
    notfound: '*'
}

export default ROUTES;