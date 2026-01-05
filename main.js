// 単語リスト
const words = [
	"a", "about", "above", "accept", "account", "across", "act", "action", "activity", "actually",
	"add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age",
	"ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along",
	"already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal",
	"another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue",
	"arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at",
	"attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby",
	"back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful",
	"because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best",
	"better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue",
	"board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother",
	"budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign",
	"can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case",
	"catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge",
	"chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen",
	"city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection",
	"college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern",
	"condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could",
	"country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup",
	"current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death",
	"debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe",
	"design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult",
	"dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog",
	"door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early",
	"earth", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort",
	"eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter",
	"entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every",
	"everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience",
	"expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far",
	"fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure",
	"fill", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "first",
	"fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force",
	"forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full",
	"fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give",
	"glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow",
	"growth", "guess", "gun", "hair", "half", "hand", "hang", "happen", "happy", "hard",
	"have", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here",
	"herself", "high", "him", "his", "history", "hit", "hold", "home", "hope", "hospital",
	"hot", "hotel", "hour", "house", "how", "however", "hundred", "husband", "idea", "identify",
	"if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase",
	"indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting",
	"international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself",
	"job", "join", "just", "keep", "key", "kind", "kitchen", "know", "knowledge", "land",
	"language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead",
	"learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level",
	"life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local",
	"long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main",
	"maintain", "major", "majority", "make", "man", "manage", "management", "many", "map", "market",
	"watashi", "anata", "kare", "kanojo", "sensei", "gakusei", "inu", "neko", "sakana", "uma",
	"tori", "kuma", "usagi", "kaeru", "inu", "neko", "shigoto", "gohan", "ocha", "nomimono",
	"tabemono", "pan", "koohii", "mizu", "miru", "suru", "kiku", "hanasu", "iu", "iku",
	"aruku", "kuru", "kau", "tsukuru", "omou", "omou", "shiru", "kangaeru", "atarashii", "omoshiroi",
	"tanoshii", "kawaii", "sugoi", "ganbatte", "yasashii", "kurai", "akarui", "tsumetai", "atsui", "samui",
	"sekai", "machi", "ie", "jikan", "tokoro", "kore", "sore", "are", "doko", "itsu",
	"dare", "nani", "nan", "ikura", "douzo", "onegai", "arigatou", "sumimasen", "sayounara", "konnichiwa",
	"ohayou", "konbanwa", "mata", "ashita", "kyou", "ima", "gozen", "gogo", "hitori", "futari",
	"san", "yon", "go", "roku", "nana", "hachi", "kyuu", "juu", "hyaku", "sen",
	"michi", "eki", "densha", "kuruma", "kouen", "gakkou", "daigaku", "yuubin", "denwa", "tegami",
	"hon", "zasshi", "shashin", "kamera", "kagi", "kutsu", "kasa", "hane", "hana", "ki",
	"mori", "yama", "kawa", "umi", "sora", "hoshi", "tsuki", "taiyou", "ame", "yuki",
	"kaze", "uchi", "soto", "tachi", "kata", "heya", "toire", "ie", "kaimono", "ryokou",
	"shokuji", "asagohan", "hirugohan", "bangohan", "ohiru", "yoru", "yasai", "fruit", "jam", "salad",
	"aisu", "omiyage", "tabemono", "nomimono", "kanpai", "tanjoubi", "shiawase", "kibou", "kimochi", "omoide"
];

let isPlaying = false;
let score = 0;
let life = 3;
let spawnRate = 2000;
let duckSpeed = 2;
let lastSpawnTime = 0;
let animationFrameId;

let ducks = [];
let targetDuck = null;

const stage = document.getElementById('stage');
const scoreDisplay = document.getElementById('score-display');
const lifeDisplay = document.getElementById('life-display');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');

function startGame() {
	isPlaying = true;
	score = 0;
	life = 3;
	duckSpeed = 1.5;
	spawnRate = 2000;
	ducks = [];
	targetDuck = null;
	stage.innerHTML = '';

	updateUI();
	startScreen.classList.add('hidden');
	gameOverScreen.classList.add('hidden');

	lastSpawnTime = performance.now();
	requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
	if (!isPlaying) return;

	if (timestamp - lastSpawnTime > spawnRate) {
		spawnDuck();
		lastSpawnTime = timestamp;
		if (spawnRate > 800) spawnRate -= 50;
		if (duckSpeed < 4) duckSpeed += 0.05;
	}

	const width = window.innerWidth;
	const toRemove = [];

	ducks.forEach((duck, index) => {
		duck.x += duckSpeed;
		duck.element.style.left = duck.x + 'px';

		if (duck.x > width) {
			life--;
			updateUI();
			stage.removeChild(duck.element);
			toRemove.push(index);

			if (targetDuck === duck) targetDuck = null;

			if (life <= 0) {
				gameOver();
			}
		}
	});

	for (let i = toRemove.length - 1; i >= 0; i--) {
		ducks.splice(toRemove[i], 1);
	}

	animationFrameId = requestAnimationFrame(gameLoop);
}

function spawnDuck() {
	const word = words[Math.floor(Math.random() * words.length)];
	const duckEl = document.createElement('div');
	duckEl.className = 'duck-container';

	duckEl.innerHTML = `
                <div class="word-label">${word}</div>
                <div class="duck-art">
                    <div class="duck-head"></div>
                    <div class="duck-eye"></div>
                    <div class="duck-beak"></div>
                    <div class="duck-body"></div>
                </div>
            `;

	const randomBottom = 10 + Math.random() * 20;
	duckEl.style.bottom = randomBottom + '%';

	stage.appendChild(duckEl);

	ducks.push({
		element: duckEl,
		word: word,
		remaining: word,
		typed: "",
		x: -120
	});
}

function updateUI() {
	scoreDisplay.innerText = `スコア: ${score}`;
	let lifeStr = "ライフ: ";
	for (let i = 0; i < life; i++) lifeStr += "❤️";
	lifeDisplay.innerText = lifeStr;
}

function gameOver() {
	isPlaying = false;
	cancelAnimationFrame(animationFrameId);
	document.getElementById('final-score').innerText = `スコア: ${score}`;
	gameOverScreen.classList.remove('hidden');
}

document.addEventListener('keydown', (e) => {
	if (e.code === 'Space') {
		if (!isPlaying) startGame();
		return;
	}

	if (!isPlaying) return;

	const key = e.key.toLowerCase();
	if (!/^[a-z]$/.test(key)) return;

	if (targetDuck) {
		checkInput(targetDuck, key);
	} else {
		const potentialTarget = ducks.find(d => d.remaining.startsWith(key));
		if (potentialTarget) {
			targetDuck = potentialTarget;
			targetDuck.element.classList.add('target');
			checkInput(targetDuck, key);
		}
	}
});

function checkInput(duck, key) {
	if (duck.remaining.startsWith(key)) {
		duck.typed += key;
		duck.remaining = duck.remaining.substring(1);

		const label = duck.element.querySelector('.word-label');
		label.innerHTML = `<span class="typed">${duck.typed}</span>${duck.remaining}`;

		if (duck.remaining.length === 0) {
			score += duck.word.length * 10;
			updateUI();

			duck.element.classList.add('poof');
			setTimeout(() => {
				if (duck.element.parentNode) stage.removeChild(duck.element);
			}, 300);

			ducks = ducks.filter(d => d !== duck);
			targetDuck = null;
		}
	}
}
