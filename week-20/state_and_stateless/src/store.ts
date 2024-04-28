interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

// export const games: Game[] = [];
//
export class GameManager {
    private static instances: GameManager;
    private games: Game[] = [];

    private constructor() {

    }

    public static getInstance(): GameManager {
        if (!GameManager.instances) {
            GameManager.instances = new GameManager();
        }
        return GameManager.instances
    }

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}

// export const gameManager = new GameManager();
