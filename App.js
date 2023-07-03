/*
import { AgeCounter } from "./AgeCounter";
import { Greetings } from "./Greetings"
*/

import { AgeCounter } from "./AgeCounter";

export function App(){
    return (
        <div>
<AgeCounter/>
        </div>
    );
}


        /*commenting out below to work on ch16
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
                /*here we can adjust the props.age data as it is watched conditionally from the Greetings.js file 
                age={30}
                car={{ brand: "Viper", color: "Red", speed: 200 }}
                doSomething={ function() {
                    console.log("BLAZE IT LIKE THE FIRE");
                }}
                image={<img src="https://picsum.photos/200/300" />}
            />
            <p></p>
        </div>
    )
}
*/
