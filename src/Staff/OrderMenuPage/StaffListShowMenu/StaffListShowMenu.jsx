import React, { useState, useEffect } from "react";
import "./StaffListShowMenu.css";
import { collection, getDocs } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { database, imagedatabase } from "../../../Firebase";

function StaffListShowMenu() {
  const [menuData, setMenuData] = useState([]); // Show data
  const [menuImages, setMenuImages] = useState([]);

  const table1Ref = collection(database, "table1");

  useEffect(() => {
    loadData();
    loadImages();
  }, []);

  const loadData = async () => {
    try {
      const querySnapshot = await getDocs(table1Ref);
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched Data:", newData);
      setMenuData(newData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const loadImages = () => {
    listAll(ref(imagedatabase, "files"))
      .then((imgs) => {
        const promises = imgs.items.map((val) => getDownloadURL(val));
        return Promise.all(promises);
      })
      .then((urls) => {
        console.log("Image URLs:", urls);
        setMenuImages(urls);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  };

  return (
    <div className="StaffListShowMenu">
      <h2>นม</h2>
      <div className="FrameAddMenu">
        {menuData.map((item, index) => (
          <div key={index} className="MenuItemContainer">
            <div className="FrameImageMenu">
              <div className="ShowImage">
                {menuImages[index] ? (
                  <img src={menuImages[index]} alt={`Image ${index}`} />
                ) : (
                  <span>No Image</span>
                )}
              </div>
            </div>
            <div className="AddNameMenuandDiscription">
              <h3 className="TextNameMenu">{item.menu_name}</h3>
              <h4 className="TextDescription">{item.menu_description}</h4>
            </div>
            <div className="HotandCoolPrice">
              <button className="HotPrice t-hotprice">
                ร้อน {item.menu_hotprice} .-
              </button>
              <button className="CoolPrice t-coolprice">
                เย็น {item.menu_coolprice} .-
              </button>
            </div>
            <div className="ButtonOrderNow">
              <button className="OrderNow t-ordernow">order now</button>
            </div>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
}

export default StaffListShowMenu;
