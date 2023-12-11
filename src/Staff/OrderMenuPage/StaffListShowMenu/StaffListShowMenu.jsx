import React, { useState, useEffect } from "react";
import "./StaffListShowMenu.css";
import { collection, getDocs,onSnapshot } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { database, imagedatabase } from "../../../Firebase";
import { orderBy,query } from "firebase/firestore";

function StaffListShowMenu() {
  const [menuData, setMenuData] = useState([]);
const [menuImages, setMenuImages] = useState([]);

const table1Ref = collection(database, "table1");

useEffect(() => { // Make sure `loadImages` is defined somewhere
  const unsubscribe = loadRealTime();
  return () => {
    unsubscribe();
  };
}, []);

const loadRealTime = () => {
  const unsubscribe = onSnapshot(
    query(collection(database, "table1"), orderBy("menu_name")), // Sort by 'menu_name'
    (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Check for duplicates before updating the state
      setMenuData((prevData) => {
        const existingIds = prevData.map((item) => item.id);
        const filteredNewData = newData.filter((item) => !existingIds.includes(item.id));
        return [...prevData, ...filteredNewData];
      });
    }
  );

  return unsubscribe;
};

useEffect(() => {
  const fetchImageURLs = async () => {
    try {
      const imgs = await listAll(ref(imagedatabase, "files"));
      const urls = await Promise.all(imgs.items.map((val) => getDownloadURL(val)));
      setMenuImages(urls); // Use setMenuImages instead of setImgUrl
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  fetchImageURLs();
}, []);
console.log('menuImages:', menuImages);
console.log('menuData:', menuData);


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
