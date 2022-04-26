import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Assignment from "../pages/ClassAssignments/Lesson5";


export const AllRoutesList = [
    { name: "Home", path:"/", comp: <Home/>},
   
    {name: "About", path:"/about", comp: <About/>},

    {name: "Contact", path:"/contact", comp: <Contact/>},

    {name: "Projects", path:"/projects", comp: <Projects/>},

    {name: "Skills", path:"/skills", comp: <Skills/>},

    { name: "Assignment", path: "/Assignment", comp: <Assignment/>}
]

/* export const AllRoutesObj ={
    home: {path: "/"},
     About: {path: "/about"},
      Contact: {path: "/"},
       Projects: {path: "/"},
        skills: {path: "/"},
}
*/
