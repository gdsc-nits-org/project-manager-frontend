import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { GrOverview } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isDashHid, setisDashHid] = useState(true);
  const [isWorkHid, setisWorkHid] = useState(true);


  return (
    <div className={styles.wrapper}>
      <div className={`${styles.dashboard} ${styles.container}`}>
        <button
          style={{ color: `${isDashHid ? "black" : "rgba(115, 100, 255, 1)"}` }}
          onClick={() => {
            setisDashHid(!isDashHid);
            setisWorkHid(true);
          }}
        >
          <RxDashboard />
          Dashboard
          {isDashHid ? <MdKeyboardArrowDown /> : <IoIosArrowUp />}
        </button>
        <div className={styles.items}>
          <div className={`${styles.it} ${isDashHid && styles.hidden}`}>
            <h3>
              <RiCheckboxIndeterminateLine />
              Overview
            </h3>
            <h3>
              <PiClockCounterClockwiseFill />
              Recent Viewed
            </h3>
          </div>
        </div>
      </div>
      <div className={`${styles.workspace} ${styles.container}`}>
        <button
          style={{ color: `${isWorkHid ? "black" : "rgba(115, 100, 255, 1)"}` }}
          onClick={() => {
            setisWorkHid(!isWorkHid);
            setisDashHid(true);
          }}
        >
          <FaRegFolder />
          Workspace
          {isWorkHid ? <MdKeyboardArrowDown /> : <IoIosArrowUp />}
        </button>

        <div className={styles.items}>
          <div className={`${styles.it} ${isWorkHid && styles.hidden}`}>
            <h3>
              <GrOverview />
              Project1
            </h3>
            <h3>
              <GrOverview />
              Project2
            </h3>
            <h3>
              <GrOverview />
              Project3
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
