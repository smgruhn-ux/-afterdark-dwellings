import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guides from './pages/Guides';
import GuideArticle from './pages/GuideArticle';
import Spaces from './pages/Spaces';
import SpaceDetail from './pages/SpaceDetail';
import CuratedFinds from './pages/CuratedFinds';
import ShopTheLook from './pages/ShopTheLook';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="guides" element={<Guides />} />
        <Route path="guides/:slug" element={<GuideArticle />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="spaces/:slug" element={<SpaceDetail />} />
        <Route path="curated-finds" element={<CuratedFinds />} />
        <Route path="shop-the-look" element={<ShopTheLook />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="privacy-policy" element={<LegalPage page="privacy-policy" />} />
        <Route path="terms-of-use" element={<LegalPage page="terms-of-use" />} />
        <Route path="affiliate-disclosure" element={<LegalPage page="affiliate-disclosure" />} />
        <Route path="editorial-policy" element={<LegalPage page="editorial-policy" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
