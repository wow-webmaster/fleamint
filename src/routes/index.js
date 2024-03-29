import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
// guards
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/account',
      element: <MainLayout />,
      children: [
        { element: <ProfilePage/>, path: 'profile/:id' },
        { element: <EditProfilePage />, path: 'edit' },
        { element: <AnalysticPage />, path: 'analystic' },
        { element: <HelpCenterPage />, path: 'help' },
        { element: <CreateLeadPage />, path: 'brand' },
      ],
    },
    {
      path: '/market-place',
      element: <MainLayout />,
      children: [
        { element: <NFTMarketplacePage />, index: true },
        { element: <Navigate to="/market-place" replace />, path: 'nft' },
        { element: <NFTCategoriesPage />, path: 'categories' },
        { element: <LeaderBoardPage />, path: 'leader-board' },
        { element: <ProductDetailPage />, path: 'product-detail' },
        { element: <CreateNFTPage />, path: 'create-nft' },

      ],
    },
    // Main Routes
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { element: <AboutUsPage />, path: 'about' },
        { element: <BrandShowPage />, path: 'brand' },
        { element: <NFTCollectionPage />, path: 'collections' },
        { element: <BlogPage />, path: 'blogs' },

      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}


// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const AboutUsPage = Loadable(lazy(() => import('../pages/About')));
const BrandShowPage = Loadable(lazy(() => import('../pages/Brand')));

// MARKET PLACES
const NFTCategoriesPage = Loadable(lazy(() => import('../pages/marketplace/NFTCategories')));
const LeaderBoardPage = Loadable(lazy(() => import('../pages/marketplace/LeaderBoards')));
const NFTMarketplacePage = Loadable(lazy(() => import('../pages/marketplace/NFTMarketplace')));
const ProductDetailPage =  Loadable(lazy(() => import('../pages/marketplace/ProductDetail')));
const CreateNFTPage = Loadable(lazy(() => import('../pages/marketplace/CreateNFT')));

// BLOGS
const BlogPage =  Loadable(lazy(() => import('../pages/Blog')));

const NFTCollectionPage = Loadable(lazy(() => import('../pages/NFTCollection')));

// ACOUNT ROUTES
const ProfilePage = Loadable(lazy(() => import('../pages/account/Profile')));
const EditProfilePage = Loadable(lazy(() => import('../pages/account/EditProfile')));
const AnalysticPage = Loadable(lazy(() => import('../pages/account/Analystic')));
const HelpCenterPage = Loadable(lazy(() => import('../pages/account/HelpCenter')));
const CreateLeadPage = Loadable(lazy(() => import('../pages/account/CreateLead')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
