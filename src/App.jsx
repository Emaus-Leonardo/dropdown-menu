import { useState } from "react";
import Profile from "../public/img/profile.jpg";
import Header from "./components/Header";

function App() {
  const [open, setOpen] = useState(false);

  const dropDownMenu = [
    { title: "Portfolio", link: "https://emaus-leonardo.github.io/portfolio-leo/" },
    { title: "Linkedin", link: "https://www.linkedin.com/in/ema%C3%BAs-leonardo/" },
    { title: "Github", link: "https://github.com/Emaus-Leonardo" },
    { title: "CV", link: "/assets/Currículo-Emaús Leonardo.pdf" } 
  ];

  return (
    <div>
      <Header/>
      <div className="h-screen bg-gray-200 flex justify-center pt-20">
        <div className="relative">
          <img
            onClick={() => setOpen(!open)}
            src={Profile}
            alt="profile"
            className="h-28 w-28 object-cover rounded-full cursor-pointer hover:scale-110 hover:shadow-lg transition-all"
          />
          {open && (
            <div className="bg-white p-4 w-52 shadow-lg absolute -left-12 top-[140px]">
              <ul className="flex flex-col   text-center justify-center">
                {dropDownMenu.map((menuItem) => (
                  <li
                    className="p-2 text-lg cursor-pointer rounded hover:bg-fundo"
                    key={menuItem.title}
                  >

                    <a href={menuItem.link} download={menuItem.title === "CV"} target={menuItem.title === "CV" ? "_self" : "_blank"} rel="noopener noreferrer">
                      {menuItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
