import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../Spinner";
import MD_IRFAN from "../pages/DevDesign/DevPages/MD_IRFAN.jsx";

const Layout = lazy(() => import("../Layout/Layout.jsx"));
const Home = lazy(() => import("../components/Home/Home.jsx"));
const Roadmap = lazy(() => import("../pages/Roadmaps/Roadmap.jsx"));
const Guide = lazy(() => import("../pages/Guide/Guide.jsx"));
const Index = lazy(() => import("../pages/Roadmaps/IntroPage/Index.jsx"));
const Frontend = lazy(() => import("../pages/Roadmaps/Frontend/Frontend.jsx"));
const Service = lazy(() => import("../pages/service/Service.jsx"));
const HtmlPage = lazy(() => import("../pages/Roadmaps/Frontend/Pages/Html/HtmlPage.jsx"));
const CSSPage = lazy(() => import("../pages/Roadmaps/Frontend/Pages/CSS/CSSPage.jsx"));
const FrontendGuide = lazy(() => import("../pages/Guide/Content/FrontendGuide.jsx"));
const HtmlPrev = lazy(() => import("../pages/Guide/Content/HtmlPrev.jsx"));
const GuideShow = lazy(() => import("../pages/Guide/Intro/GuideShow.jsx"));
const CssGuide = lazy(() => import("../pages/Guide/Content/CssGuide.jsx"));
const JsGuide = lazy(() => import("../pages/Guide/Content/JsGuide.jsx"));

const DevDesign = lazy(() => import("../pages/DevDesign/DevDesign.jsx"));
const DevIntro = lazy(() => import("../pages/DevDesign/Dev/DevIntro.jsx"));
const MDIRFAN = lazy(() => import("../pages/DevDesign/DevPages/MD_IRFAN.jsx"));
const JsPage = lazy(() => import("../pages/Roadmaps/Frontend/Pages/Js/JsPage.jsx"));
const GithubPage = lazy(() => import("../pages/Roadmaps/Frontend/Pages/Github/GithubPage.jsx"));
const GithubGuide = lazy(() => import("../pages/Guide/Content/GithubGuide.jsx"));
const ReactJsGuide = lazy(() => import("../pages/Guide/Content/ReactJsGuide.jsx"));
const ReactJsPage = lazy(() => import("../pages/Roadmaps/Frontend/Pages/ReactJs/ReactJsPage.jsx"));
const TSPage = lazy(() => import("../pages/Roadmaps/Frontend/Pages/TypeScript/TSPage.jsx"));
const BackendGuide = lazy(() => import("../pages/Guide/Content/BackendGuide.jsx"));
const TsGuide = lazy(() => import("../pages/Guide/Content/TsGuide.jsx"));
const Backend = lazy(() => import("../pages/Roadmaps/Backend/Backend.jsx"));
const NodeJsPage = lazy(() => import("../pages/Roadmaps/Backend/Pages/NodeJs/NodeJsPage.jsx"));
const ExpressJsPage = lazy(() => import("../pages/Roadmaps/Backend/Pages/ExpressJs/ExpressJsPage.jsx"));
const NodeExpressGuide = lazy(() => import("../pages/Guide/Content/NodeExpressGuide.jsx"));
const MongoDbGuide = lazy(() => import("../pages/Guide/Content/MongoDbGuide.jsx"));
const PostgreSQLGuide = lazy(() => import("../pages/Guide/Content/PostgreSQLGuide.jsx"));
const NotFound = lazy(() => import("../components/utils/NotFound.jsx"));
const DockerGuide = lazy(() => import("../pages/Guide/Content/DockerGuide.jsx"));
const MongoDbPage = lazy(() => import("../pages/Roadmaps/Backend/Pages/MongoDb/MongoDbPage.jsx"));

// Route grouping for better organization
const devDesignRoutes = [
  { path: "", element: <DevIntro /> },
  { path: "MD_IRFAN", element: <MD_IRFAN /> },
];

const roadmapRoutes = [
  { path: "", element: <Index /> },
  { path: "frontend", element: <Frontend /> },
  { path: "html", element: <HtmlPage /> },
  { path: "css", element: <CSSPage /> },
  { path: "javascript", element: <JsPage /> },
  { path: "github", element: <GithubPage /> },
  { path: "reactjs", element: <ReactJsPage /> },
  { path: "typescript", element: <TSPage /> },
  { path: "backend", element: <Backend /> },
  { path: "nodejs", element: <NodeJsPage /> },
  { path: "express-js", element: <ExpressJsPage /> },
  { path: "mongodb", element: <MongoDbPage /> }
];

const guideRoutes = [
  { path: "", element: <GuideShow /> },
  { path: "frontend", element: <FrontendGuide /> },
  { path: "html", element: <HtmlPrev /> },
  { path: "css", element: <CssGuide /> },
  { path: "javascript", element: <JsGuide /> },
  { path: "github", element: <GithubGuide /> },
  { path: "react-js", element: <ReactJsGuide /> },
  { path: "ts-guide", element: <TsGuide /> },
  { path: "backend-guide", element: <BackendGuide /> },
  { path: "nodejs-express", element: <NodeExpressGuide /> },
  { path: "mongodb-guide", element: <MongoDbGuide /> },
  { path: "psql-guide", element: <PostgreSQLGuide /> },
  { path: "docker-guide", element: <DockerGuide /> }
];

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "dev-design",
        element: (
          <Suspense fallback={<Spinner />}>
            <DevDesign />
          </Suspense>
        ),
        children: devDesignRoutes,
      },
      {
        path: "roadmap",
        element: (
          <Suspense fallback={<Spinner />}>
            <Roadmap />
          </Suspense>
        ),
        children: roadmapRoutes,
      },
      {
        path: "guide",
        element: (
          <Suspense fallback={<Spinner />}>
            <Guide />
          </Suspense>
        ),
        children: guideRoutes,
      },
      {
        path: "service",
        element: (
          <Suspense fallback={<Spinner />}>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Routes;
