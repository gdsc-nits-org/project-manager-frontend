// const Navbar = () => {
//   return <nav>Navbar</nav>;
// };

// export default Navbar;

import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GiBackwardTime } from "react-icons/gi";
import { CiFolderOn } from "react-icons/ci";
import { GoPlus , GoProjectRoadmap } from "react-icons/go";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
      {/** navbbar */}
      <div className={styles.Navbar}>Navbar</div>

      
      <div className={styles.mainframe}>
        <div className={styles.frame1}>
          <div className={styles.dashboard}>
          <RxDashboard/>Dashboard
          </div>

          <div className={styles.dropdown}>
            <ul>
              <li><a href=""> < GoProjectRoadmap />Overview</a></li>
              <li><a href=""><GiBackwardTime/>Recent viewed</a></li>
            </ul>
          </div>
        </div>

        {/** frame2 */}
        {/* <div className={styles.frame2}>
          <div className={styles.workspace}>
            <CiFolderOn />
            Your Workspace
            <div className={styles.dropdown1}>
              <p>
                <a href="#">
                  <GoPlus />
                  Add Project
                </a>
              </p>

              <div>
                <a href="#">
                  <GoProjectRoadmap />
                  Project 1
                </a>
              </div>
              <div>
                <a href="#">
                  <GoProjectRoadmap />
                  Project 2
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.frame2}>
          <div className={styles.workspace}>
            
            <CiFolderOn />
            Your Workspace
          </div>
          <div className={styles.submenu}>
            <ul>
              <li >
                <a href="&">
                  
                 
                  <span className={styles.projects}> <GoPlus />Add Project</span>
                </a>
              </li>
              <li>
                <a href="#"> <GoProjectRoadmap />project1</a>
              </li>
              <li>
                <a href="#"> <GoProjectRoadmap />project2</a>
              </li>
              <li>
                <a href="#"> <GoProjectRoadmap />project3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
