import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.difficulty === "Smooth"}
        onClick={props.onItemClick}
        difficulty="Smooth"
      />
      <MenuListItem
        isSelected={props.difficulty === "Choppy"}
        onClick={props.onItemClick}
        difficulty="Choppy"
      />
      <MenuListItem
        isSelected={props.difficulty === "Sloppy"}
        onClick={props.onItemClick}
        difficulty="Sloppy"
      />
      <MenuListItem
        isSelected={props.difficulty === "Titanic"}
        onClick={props.onItemClick}
        difficulty="Titanic"
      />
    </div>
  );
}
