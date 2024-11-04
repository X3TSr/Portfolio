const ROUTES = {
    home: '/',
    projects: '/projects',
    projectDetail: { path: "/project/:id", to: "/project/" },
    contact: '/contact',
    notfound: '*'
}

export default ROUTES;