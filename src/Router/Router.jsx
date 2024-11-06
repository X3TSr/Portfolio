import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import Detail from '../Pages/Detail/Detail';
import Timeline from '../Pages/Timeline/Timeline';
import Contact from '../Pages/Contact/Contact';
import NotFound from '../Pages/Not Found/NotFound';
import ROUTES from '../consts/ROUTES';

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.projects} element={<Projects />} />
            <Route path={ROUTES.projectDetail.path} element={<Detail />} />
            <Route path={ROUTES.timeline} element={<Timeline />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.notfound} element={<NotFound />} />
        </Routes>
    );
}

export default Router;