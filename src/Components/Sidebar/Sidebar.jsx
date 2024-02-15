import React, { useEffect, useRef, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { GrOverview } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const dashboardItems = useRef();
  const workspaceItems = useRef();

  const [isDashHid, setisDashHid] = useState(true);
  const [isWorkHid, setisWorkHid] = useState(true);

  useEffect(() => {
    if (isDashHid) {
      dashboardItems.current.classList.add(styles.hidden);
    } else {
      dashboardItems.current.classList.remove(styles.hidden);
    }
  }, [isDashHid]);

  useEffect(() => {
    if (isWorkHid) {
      workspaceItems.current.classList.add(styles.hidden);
    } else {
      workspaceItems.current.classList.remove(styles.hidden);
    }
  }, [isWorkHid]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.dashboard} ${styles.container}`}>
        <h1
          role="button"
          tabIndex={0}
          style={{ color: `${isDashHid ? "black" : "rgba(115, 100, 255, 1)"}` }}
          onClick={() => {
            setisDashHid(!isDashHid);
            setisWorkHid(true);
          }}
        >
          <RxDashboard />
          Dashboard
          {isDashHid ? <MdKeyboardArrowDown /> : <IoIosArrowUp />}
        </h1>
        <div className={styles.items}>
          <div className={styles.it} ref={dashboardItems}>
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
        <h1
          role="button"
          tabIndex={0}
          style={{ color: `${isWorkHid ? "black" : "rgba(115, 100, 255, 1)"}` }}
          onClick={() => {
            setisWorkHid(!isWorkHid);
            setisDashHid(true);
          }}
        >
          <FaRegFolder />
          Workspace
          {isWorkHid ? <MdKeyboardArrowDown /> : <IoIosArrowUp />}
        </h1>

        <div className={styles.items}>
          <div ref={workspaceItems} className={styles.it}>
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
