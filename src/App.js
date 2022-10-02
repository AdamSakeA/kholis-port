import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Home from './Home';
import './styles/root.scss';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project
        backgroundColor={"white"}
        date={"dd/mm/yyyy"}
        projectName={"Project Name"}
        projectDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis, aenean risus. Molestie dictumst tortor cum bibendum lobortis tempor. Duis nisi amet, enim adipiscing porttitor amet, rutrum enim platea. "}
        tools={"Tools"}
        toolsDesc={"Tools"}
        link={"Link"}
        linkDesc={"Lorem ipsum dolor sit amet"}
      />
      <Project
        backgroundColor={"darkblue"}
        date={"dd/mm/yyyy"}
        projectName={"Project Name"}
        projectDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis, aenean risus. Molestie dictumst tortor cum bibendum lobortis tempor. Duis nisi amet, enim adipiscing porttitor amet, rutrum enim platea. "}
        tools={"Tools"}
        toolsDesc={"Tools"}
        link={"Link"}
        linkDesc={"Lorem ipsum dolor sit amet"}
      />      
      <Project
        backgroundColor={"blueocean"}
        date={"dd/mm/yyyy"}
        projectName={"Project Name"}
        projectDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis, aenean risus. Molestie dictumst tortor cum bibendum lobortis tempor. Duis nisi amet, enim adipiscing porttitor amet, rutrum enim platea. "}
        tools={"Tools"}
        toolsDesc={"Tools"}
        link={"Link"}
        linkDesc={"Lorem ipsum dolor sit amet"}
      />
      <Project
        backgroundColor={"white"}
        date={"dd/mm/yyyy"}
        projectName={"Project Name"}
        projectDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat felis, aenean risus. Molestie dictumst tortor cum bibendum lobortis tempor. Duis nisi amet, enim adipiscing porttitor amet, rutrum enim platea. "}
        tools={"Tools"}
        toolsDesc={"Tools"}
        link={"Link"}
        linkDesc={"Lorem ipsum dolor sit amet"}
      />
      <Footer />
    </>
  );
}

export default App;
