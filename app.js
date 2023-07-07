import { useState } from "react";
import { DisplayDifficulty } from "./Components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./Components/MenuList/MenuList";
import s from "./style.module.css";
import { DisplayImage } from "./Components/DisplayImage/DisplayImage";
export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Butt");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
      <div className={s.workspace}>
        <DisplayImage
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
      </div>
    </div>
  );
}
