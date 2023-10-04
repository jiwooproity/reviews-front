class Game {
    constructor({title, genre}) {
        this.title = title;
        this.genre = genre;
    }

    getGenre() {
        return this.genre.join(', ');
    }
}

Game.prototype.getTitle = function() {
    return `생성한 게임의 이름은 ${this.title} 입니다.`;
}

const game = new Game({title: 'Rainbow Six Siege', genre: ['FPS', 'HardCore']});
console.log(game.getTitle());
console.log(game.getGenre());
console.log(Game.prototype)