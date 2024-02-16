import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { PosterPage } from '../../Pages/PosterPage/PosterPage';
import { PosterList } from "../PosterList/PosterList";
import { LoginPage } from '../../Pages/LoginPage/LoginPage';
import { PosterDetails } from "../PosterDetails/PosterDetails";
import { AboutPage } from '../../Pages/AboutPage/AboutPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/posters" element={<PosterPage />}>
                <Route path=":genreSlug" element={<PosterList />} />
                <Route path=":genreSlug/:posterSlug" element={<PosterDetails />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/about' element={<AboutPage />} />
        </Routes>
    )
}
