import { HomePage } from "./containers/HomePage";
import { AboutPage } from "./containers/AboutPage";
import { BlogPage } from "./containers/BlogPage";
import { AppsPage } from "./containers/AppsPage/AppsPage";
import { CurrentPostPage } from "./containers/CurrentPostPage";
import { Route, Routes } from "react-router";
import { useScrollToTop } from "./utils/hooks/useScrollToTop";

import "../styles/App.css";

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:name" element={<CurrentPostPage />} />
      <Route path="/contact" element={<AppsPage />} />
    </Routes>
  );
}

export default App;
