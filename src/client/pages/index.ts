import AboutPage from './about';
import HomePage from './home';
import SearchPage from './search';
import ShowPage from './show';

type pageInfoType = {
    /**
     * The label for the button
     */
    label?: string;
    /**
     * The path to link to
     */
    path: string;
    /**
     * The component to use to render the path
     */
    component: React.FC;
};

export const pageInfo: pageInfoType[] = [
    { label: 'Home', path: '/', component: HomePage },
    { label: 'Search', path: '/search', component: SearchPage },
    { label: 'About', path: '/about', component: AboutPage },
    { path: '/show/:showId', component: ShowPage },
];

export const buttons = [...pageInfo].filter((page) => Boolean(page.label));
export const routes = [...pageInfo].sort((a, b) => b.path.length - a.path.length);

export default { AboutPage, HomePage, SearchPage, ShowPage, pageInfo, buttons, routes };
