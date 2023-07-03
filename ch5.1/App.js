import { Greetings } from "./Greetings"

export function App(){
    return (
        <div>
            <input 
            type="checkbox" 
            checked 
            onChange={function(){
                console.log("You clicked");
            }}
            />
            <h1>Welcome to the React world</h1>
            <Greetings 
                firstName={"Rachel"} 
                lastName={"Green"} 
                /*here we can adjust the props.age data as it is watched conditionally from the Greetings.js file */
                age={120}
                car={{ brand: "Viper", color: "Red", speed: 200 }}
                doSomething={ function() {
                    console.log("BLAZE IT LIKE THE FIRE");
                }}
                image={<img src="https://picsum.photos/200/300" />}
            />
        </div>
    )
}
