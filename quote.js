 let Quotations=document.querySelector(".quote")
 
 let quotesData = [
    "All our dreams can come true, if we have the courage to pursue them.",
    "A great leader's courage to fulfill his vision comes from passion, not position.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Dream as if you'll live forever. Live as if you'll die today.",
    "Failure is success in progress.",
    "It will never rain roses: when we want to have more roses, we must plant more roses.",
    "Passion is energy. Feel the power that comes from focusing on what excites you.",
    "Happiness is an attitude of mind, born of the simple determination to be happy under all outward circumstances.",
    "Just one small positive thought in the morning can change your whole day.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The strongest of all warriors are these two—Time and Patience.",
    "Play the game for more than you can afford to lose...only then will you learn the game.",
    "Only those who will risk going too far can possibly find out how far one can go.",
    "The man who moves a mountain begins by carrying away small stones.",
    "The greater the obstacle, the more glory in overcoming it.",
    "The expert in anything was once a beginner.",
    "It is better to fail in originality than to succeed in imitation.",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    "Education is the most powerful weapon which you can use to change the world."
];

function generateQuote(){
    const a=Math.floor(Math.random() *quotesData.length)
    console.log(a)
    Quotations.textContent=quotesData[a]
}