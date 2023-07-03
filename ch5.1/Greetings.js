export function Greetings(props) {
  console.log(props);
/* here we add a conditional element to determine whether the props.age entry is young or old */
  if (props.age > 100) {
    return <div>You are old</div>;
  } else {
    return <div>You are young</div>;
  }
}
