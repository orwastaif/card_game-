var stats = {
    "Altron": {
        0: 8, // hp
        1: 4, // dmg
        2: 5  // cost
    },
    "Antman": {
        0: 4, 
        1: 2,
        2: 1
    },
    "Black_Panther": {
        0: 5,
        1: 2,
        2: 3,
    },
    "Black_Widow": {
        0: 6,
        1: 3,
        2: 3
    },
    "Captain_America": {
        0: 7,
        1: 3,
        2: 4
    },
    "Captain_Marvel": {
        0: 10,
        1: 5,
        2: 6
    },
    "dct_strange": {
        0: 6,
        1: 3,
        2: 4
    },
    "Falcon": {
        0: 3,
        1: 2,
        2: 1
    },
    "Hawkeye": {
        0: 2,
        1: 1,
        2: 1
    },
    "Hela": {
        0: 9,
        1: 5,
        2: 5
    },
    "Hulk": {
        0: 7,
        1: 4,
        2: 2
    },
    "Ironman": {
        0: 5,
        1: 3,
        2: 3
    },
    "Loki": {
        0: 5,
        1: 4,
        2: 4
    },
    "Mysterio": {
        0: 4,
        1: 3,
        2: 3,
    },
    "Nick_Fury": {
        0: 2,
        1: 1,
        2: 1
    },
    "Ronan": {
        0: 8,
        1: 3,
        2: 4
    },
    "Spiderman": {
        0: 4,
        1: 4,
        2: 3
    },
    "Thanos": {
        0: 15,
        1: 6,
        2: 6
    },
    "Thor": {
        0: 6,
        1: 3,
        2: 4
    },
    "Vulture": {
        0: 3,
        1: 2,
        2: 1
    }
}

class Card {
    constructor(card_name, hp, damage, mana) {
       this.card_name = card_name;
       this.hp = hp;
       this.damage = damage;
       this.mana = mana;
   }
}

 class deck {
    cards_name = null;
    deck = [];
    constructor(deck_id) {
        this.deck_id = deck_id;
        var row = 'Altron,Antman,Black_Panther,Black_Widow,Captain_Marvel,Captain_America,dct_strange,Falcon,Hawkeye,Hela,Hulk,Ironman,Loki,Mysterio,Nick_Fury,Ronan,Spiderman,Thanos,Thor,Vulture';
        if(row) {
            this.cards_name = row.split(',');
            this.getCards();
        }
    }

     getCards() {
        var index = 0;
        for(let v of this.cards_name) {
                console.log(stats[v][0], stats[v][1], stats[v][2]);
            index += 1;
            this.deck.push(new Card(v, stats[v][0], stats[v][1], stats[v][2]));
        }
    }

     getCard(card_num) {
        let index = 0; 
        for(let v of this.deck) {
            if(card_num == index) {
                return v;
            }
            index += 1;
        }
    }

     deleteCard(card_name) {
        let index = 0; 
        for(let v of this.deck) {
            if(card_name == v.card_name) {
                break;
            }
            index += 1;
        }
        if(index != 20) {
            this.deck = this.deck.filter(function (value ,index1, self) {
                return index1 !== index
            });
        }
    }
}

class hand {
     hand_deck = [];

    constructor() {
        this.amountOfCards = 0;
        this.crdsLimit = 5;
    }

     deleteCardHand(card_name) {
        let index = 0; 
        for(let v of this.hand_deck) {
            if(card_name == v.card_name) {
                break;
            }
            index += 1;
        }
        if(index != 20) {
            this.hand_deck = this.hand_deck.filter(function (value ,index1, self) {
                return index1 !== index
            });
        }
    }

     getCardHand(card_num) {
        let index = 0; 
        for(let v of this.hand_deck) {
            if(card_num == index) {
                return v;
            }
            index += 1;
        }
    }

    getCardMana(card_name) {
        for(let v of this.hand_deck) {
            if(card_name == v.card_name) {
                return v.mana;
            }
        }
    }

     addCard(card) {
        if(this.crdsLimit > this.amountOfCards) {
            this.hand_deck.push(card);
            return true;
        }
        return false;
    }

}

class tabel {
     Table = [];
     constructor() {
        this.amountOfCardsTable = 0;
        this.crdsLimitTable = 5;
    }

     deleteCardTabel(card_name) {
        let index = 0; 
        for(let v of this.Table) {
            if(card_name == v.card_name) {
                break;
            }
            index += 1;
        }
        if(index != 20) {
            this.Table = this.Table.filter(function (value ,index1, self) {
                return index1 !== index
            });
        }
    }

     addCardTable(card) {
        if(this.crdsLimitTable > this.amountOfCardsTable) {
            this.Table.push(card);
            return true;
        }
        return false;
    }
}

class player {
     turn() {
        this.mana += 1;
    }

     pullCard() {
        
        let card_num = Math.floor(Math.random() * ((this.deck.deck.length) - 0) ) + 0;
        this.hand.addCard(this.deck.getCard(card_num));
        this.deck.deleteCard(this.deck.getCard(card_num).card_name);
    }


     makeMove() {
        var_dump(this.deck.deck);
    }

     makeMove2() {
        var_dump(this.hand.hand_deck);
    }

     tabe(card_name) {
        let index = 0;
        for(let v of this.hand.hand_deck) {
            if(card_name == v.card_name) {
                break;
            }
            index++;
        }
        this.table.addCardTable(this.hand.getCardHand(index));
        this.hand.deleteCardHand(this.hand.getCardHand(index).card_name);
    }
}

class bot extends player{
     constructor() {
        super();
        this.name = "Bot";
        this.hp = 20;
        this.mana = 20;
        this.mana_all = 0;
        this.deck = new deck(1);
        this.hand = new hand();
        this.table = new tabel();

        for(let i = 0; i < 5; i++) {
            this.pullCard();
        }
    }

     RandomMove() {
        for(let v of this.hand.hand_deck) {
            if(v.mana <= this.mana ) {
                this.tabe(v.card_name);
                this.mana -= v.mana ;
            }
        }
    }

}

class player_user extends player{
     constructor(name) {
        super();
        this.name = name;
        this.hp = 20;
        this.mana = 0;
        this.mana_all = 0;
        this.deck = new deck(1);
        this.hand = new hand();
        this.table = new tabel();

        for(let i = 0; i < 5; i++) {
            this.pullCard();
        }
    }

}

function hit(card1, card2) {
    card2.hp -= card1.damage;
    card1.hp -= card2.damage;
}

function randomAttack(Table1, Table2) {
    live = true;
    while(live) {
        live = false;
        for(let v of Table1.Table) {
            
            card_num = Math.floor(Math.random() * ((Table2.Table.length) - 0) ) + 0;
            if(v && Table2.Table[card_num]) {
                hit(v, Table2.Table[card_num]);
                live = true;
            }
            if(v.hp <= 0) {
                Table1.deleteCardTabel(v.card_name);
            }
            if(Table2.Table[card_num])
                if(Table2.Table[card_num].hp <= 0) {
                    Table2.deleteCardTabel(Table2.Table[card_num].card_name);
                }
        }
    
        for(let v of Table2.Table) {
            card_num = Math.floor(Math.random() * ((Table1.Table.length) - 0) ) + 0;
            if(v && Table1.Table[card_num]) {
                hit(v, Table1.Table[card_num]);
                live = true;
            }
            if(v.hp <= 0) {
                Table2.deleteCardTabel(v.card_name);
            }
            if(Table1.Table[card_num])
                if(Table1.Table[card_num].hp <= 0) {
                    Table1.deleteCardTabel(Table1.Table[card_num].card_name);
                }
        }
    }
    
}

function HeroeGetDamage(User1, User2) {
    if(User1.table.Table.length == 0 && User2.table.Table.length != 0) {
        damag = 0;
        for(let v of User2.table.Table) {
            damag += v.damage;
        }
        User1.hp -= damag;
    }
    if(User2.table.Table.length == 0 && User1.table.Table.length != 0 ) {
        damag = 0;
        for(let v of User1.table.Table) {
            damag += v.damage;
        }
        User2.hp -= damag;
    }
}

var User = new player_user('Anton');
var Bot = new bot();
displayUsersStat();
botMakeMove();
displayCards();
userMove();
checkHp();

function checkHp() {
    let result = null;
    if(User.hp <= 0 && Bot.hp <=0 ) {
        result = "50/50";
    }
    else if(User.hp <= 0) {
        result = "Bot Win";
    }
    else if(Bot.hp <=0 ) {
        result = "User Win";
    }
    if(result)
        document.querySelector(".card_field .battle .battleStart").innerHTML = result;
}

function displayCardsBot() {
    let arr = document.getElementsByClassName("enemy_field")[0].getElementsByClassName('card');
    let index = 0;
    for(let v of Bot.table.Table) {
        let card_img = document.getElementById(arr[index].getElementsByClassName('imageCard')[0].id);
        card_img.src = "images/" + v.card_name + ".jpg";
        index++;
    }
    
}

function botMakeMove () {

    Bot.RandomMove();
    document.querySelector(".card_field .cards .User_card1 .mana_text ").innerHTML = Bot.mana;
    for (let ind = 0; ind < Bot.table.Table.length; ind++) {
        let card = document.getElementsByClassName("cards")[0].getElementsByClassName('card')[0];
        let par = document.getElementsByClassName('cards')[0];
        if (card.parentNode == par) {
            let pl = document.getElementsByClassName("enemy_field")[0];
            pl.appendChild(card);
        }
    }
    displayCardsBot();
}

function displayUsersStat() {
    let user_hp = parseInt(getCookie("user_hp") || 30, 10);
    User.hp = user_hp;
    let user_mana = parseInt(getCookie("user_mana") || 1, 10);
    User.mana_all = user_mana;
    User.mana = User.mana_all;
    let bot_hp = parseInt(getCookie("bot_hp") || 30, 10);
    Bot.hp = bot_hp;
    let bot_mana = parseInt(getCookie("bot_mana") || '1', 10);
    Bot.mana_all = bot_mana;
    Bot.mana = Bot.mana_all;
    document.querySelector(".card_field .cards .User_card1 .hp_text").innerHTML = Bot.hp;
    document.querySelector(".card_field .cards .User_card1 .mana_text ").innerHTML = Bot.mana;

    document.querySelector(".card_field .cards .User_card2 .hp_text").innerHTML = User.hp;
    document.querySelector(".card_field .cards .User_card2 .mana_text").innerHTML = User.mana;
}

document.querySelector(" .marvel-background .exit-button").addEventListener("click", event => {
    document.cookie = "user_hp=" + 30;
    document.cookie = "user_mana=" + 1;
    document.cookie = "bot_hp=" + 30;
    document.cookie = "bot_mana=" + 1;
})

document.querySelector(".card_field .battle .battleStart").addEventListener("click", event => {
    if(document.querySelector(".card_field .battle .battleStart").innerHTML == "Start Battle") {
        randomAttack(Bot.table, User.table);
        HeroeGetDamage(User, Bot);
    
        let mana = 6;
        if(User.mana_all < 6) {
            mana = User.mana_all + 1;
        }
    
        document.cookie = "user_hp=" + User.hp;
        document.cookie = "user_mana=" + mana;
        document.cookie = "bot_hp=" + Bot.hp;
        document.cookie = "bot_mana=" + mana;
        document.location.reload();
    }
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function displayCards() {
    let index = 1;
    for(let v of User.hand.hand_deck) {
        let card_img = document.getElementById('img' + index);
        card_img.src = "images/" + v.card_name + ".jpg";
        index++;
    }
    
}


function userMove() {
    let card_arr = document.getElementsByClassName("cards")[1].getElementsByClassName('card');
    for (let ind = 0; ind < card_arr.length; ind++) {
        let card = document.getElementsByClassName("cards")[1].getElementsByClassName('card')[ind];
        card.onclick = function (i) {
            let src = i.currentTarget.getElementsByClassName("imageCard")[0].src;
            src = src.split('/')[src.split('/').length - 1].split('.')[0]
            if(User.hand.getCardMana(src) > User.mana) {
                return;
            }
            User.mana -= User.hand.getCardMana(src);
            document.querySelector(".card_field .cards .User_card2 .mana_text").innerHTML = User.mana;
            User.tabe(src);
            let par = document.getElementsByClassName('cards')[1];
            if (card.parentNode == par) {
                let pl = document.getElementsByClassName("player_field")[0];
                pl.appendChild(card);
            }
        }
    }
}