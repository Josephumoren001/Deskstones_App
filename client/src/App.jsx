import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import About from './pages/About';

import Dashboard from './pages/Dashboard';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Programs from "./pages/Programs";
import Consulting from './pages/Consulting';
import Mentorship from './pages/Mentorship';
import Blog from "./pages/Blog";
import Register from './components/Register';
import Media from "./pages/Media";
import BecomeMentor from "./pages/BecomeMentor";
import Search from "./pages/Search";


const App = () => {
  
  return (
   
   <BrowserRouter>
   <ScrollToTop />
   <Header />
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
      <Route path="/sign-in" element={ <SignIn /> } />
      <Route path='/search' element={<Search />} />
      <Route path="/programs" element={ <Programs /> } />
      <Route path="/consulting" element={ <Consulting /> } />
      <Route path="/mentors" element={ <Mentorship /> } />
      <Route path="/blogs" element={ <Blog /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/media" element={ <Media /> } />
      <Route path="/becomeamentor" element={ <BecomeMentor /> } />
      
     
      <Route element={<PrivateRoute />}> 
      <Route path="/dashboard" element={ <Dashboard /> } />
      </Route>

      <Route element={<OnlyAdminPrivateRoute />}> 
      <Route path="/create-post" element={ <CreatePost /> } />
      <Route path="/update-post/:postId" element={ <UpdatePost /> } />
      </Route>

      
      
      <Route path="/post/:postSlug" element={ <PostPage /> } />
    </Routes>
    <Footer />
   </BrowserRouter>
 
  )
}

export default App
