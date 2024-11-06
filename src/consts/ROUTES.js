const ROUTES = {
    home: '/',
    projects: '/projects',
    projectDetail: { path: "/project/:title", to: "/project/" },
    timeline: '/timeline',
    contact: '/contact',
    notfound: '*'
}

export default ROUTES;