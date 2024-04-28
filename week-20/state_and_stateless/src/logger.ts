// import { games } from "./store";
// import { gameManager } from "./store";
import { GameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(GameManager.getInstance().logState());
    }, 4000)
}
