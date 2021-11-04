const db = connect("mongodb://localhost:27017/motivate")

db.quotes.drop()

db.quotes.insertMany([
    {quote: "The best time to plant a tree was 20 years ago, the second best time is now.", author: "Chinese Proverb"},
    {quote: "The secret of getting ahead is gettin started.", author: "Mark Twain"},
    {quote: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi"},
    {quote: "Everything you can imagine is real.", author: "Pablo Picasso"},
    {quote: "Impossible is just an opinion.", author: "Paul Coelho"},
    {quote: "Magic is believing in yourself. If you can make that happen, you can make anything happen.", author: "Johann Wolfgang von Goethe"},
    {quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle"},
    {quote: "If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh"},
    {quote: "I now tried a new hypothesis: It was possible that I was more in charge of my happiness than I was allowing myself to be.", author: "Michelle Obama"},
    {quote: "Nothing will work unless you do.", author: "Maya Angelou"}
])