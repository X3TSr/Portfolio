const ROUTES = {
    home: '/',
    projects: '/projects',
    projectDetail: { path: "/project/:id", to: "/project/" },
    timeline: '/timeline',
    contact: '/contact',
    notfound: '*'
}

export default ROUTES;