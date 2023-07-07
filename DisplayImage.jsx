import s from "./style.module.css";

export function DisplayImage(props) {
  const getDifficultyImage = () => {
    if (props.difficulty === "Smooth") {
      return (
        <img
          src="https://wallpapercave.com/wp/wp10475455.jpg"
          alt="Smooth"
          className={s.container}
        />
      );
    } else {
      if (props.difficulty === "Choppy") {
        return (
          <img
            src="https://ecoclipper.org/wp-content/uploads/clipper-ship-noach.jpg"
            alt="Choppy"
            className={s.container}
          />
        );
      } else {
        if (props.difficulty === "Sloppy") {
          return (
            <img
              src="https://i1.sndcdn.com/artworks-000151756944-s1h9eo-t500x500.jpg"
              alt="Sloppy"
              className={s.container}
            />
          );
        } else {
          if (props.difficulty === "Titanic") {
            return (
              <img
                src="https://t3.ftcdn.net/jpg/05/70/92/26/360_F_570922643_DPh6V3LhnUgSDDDbpznUvgKeGiF8TgnR.jpg"
                alt="Titanic"
                className={s.container}
              />
            );
          }
        }
      }
    }
  };
  return <div className={s.container}>{getDifficultyImage()}</div>;
}
