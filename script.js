const facts = [
    "🐞 The first software bug ever recorded was a literal moth stuck in a computer in 1947!",
    "📅 Software Engineering is one of the youngest engineering disciplines, officially recognized in 1968.",
    "🚀 NASA’s Apollo missions ran on computers with less power than today’s smartphones.",
    "🐍 The Python programming language is named after the British comedy show Monty Python, not the snake!",
    "🌍 There are over 700 programming languages, and more are created every year.",
    "📱 The first mobile app was created in 1994 for a phone called the IBM Simon.",
    "🏗️ The term ‘software engineering’ was coined to address the 'software crisis' of the 1960s, when projects often ran over budget and behind schedule.",
    "🔧 Debugging software makes up nearly 50% of a developer's time.",
    "🌐 The first website ever made is still online! It was created by Tim Berners-Lee in 1991.",
    "📏 The longest piece of software code is 2.5 billion lines long—used by Google for its search engine!"
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
}
