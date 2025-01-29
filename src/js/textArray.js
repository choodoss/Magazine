const text = `4 
A NEW WAVE OF ADVENTURES FOR FANS OF THE ROBLOX UNIVERSE
DevSeries offers toys for children and teenagers based on the most popular games of the online platform.
14 
THE BATTLE ROYALE: COLLECTION EXPANSION!
What’s new in the world of Fortnite figures?
18 
TRANSFORMERS ON WHEELS
Flip Cars is a whole world of adventures that can fit in the palm of your hand.
24 
SUPERHEROES OF THE SKY: HAPPY ADVENTURES AWAIT!
Super Wings gives children the opportunity to explore, fantasize and play without limits.
34 
THE ARENA OF REAL MASTERS
New wave of Infinity Nado VI: more power, more combinations.
40 
BRIGHT COLORS OF CHILDHOOD
The wide range of Janod, French manufacturer, offers solutions for little dreamers, explorers and future musicians that will fill childhood with exciting experiences, rewarding discoveries and unforgettable moments.
70 
BOARD GAMES FOR THE WHOLE FAMILY
Goliath is a fun family activity, learning new things and strengthening emotional ties with your loved ones.
76 
BUILDING SETS THAT FASCINATE!
Each LEGO set is a starting point for your own story.
98 
MAGNETIC CONSTRUCTIONS
Magplayer range includes a varietyof interesting sets that will satisf y children’s boundless imagination.
110 
BABY’S COMFORT CARE
The Greentom Classic stroller is a combination of aesthetics and functionality.
114 
FEEDING LITTLE GOURMETS WITH A STYLE!
The updated collection of Oribel Cocoon accessories is a must-have for both baby and parents.
118 
THE CHOICE OF TRUE BUBBLE FANS
Gazillion continues to surprise with new products that become bestsellers among parents and children.
124 
SUNGLASSES FOR CHILDREN: FASHIONABLE AND ESSENTIAL
KOOLSUN products are a combination of reliable protection, safe materials and stylish design.
130 
NEW ADVENTURES FOR YOUNG DREAMERS
Welcome to the world of Our Generation!
136 
FAIRYTALES THAT COME TO LIFE
Li'l Woodzeez immerses children in a fantastical world full of fun and adventures.
142 
FAMILY IQ MARATHON
Same Toy puzzles are not just toys, but a real brain challenge that brings people together and creates unforgettable moments.
150 
PLAYING TOGETHER: HOW TO ORGANIZE FUN AND PRODUCTIVE TIME WITH YOUR CHILD
Same Toys offer numerous opportunities for joint creativity and exciting rest.
154 
TRANSPORT FOR YOUNG ADVENTURERS
Miqilong Retro-Design Bicycles for Active Adventures.
158 
QUALITY TRANSPORT FOR KIDS IN MODERN COLORS
Miqilong expands the range of HPA 12" balance bikes.
162 
STYLISH BALANCE BIKES AND RELIABLE HELMETS
Miqilong offers a vibrant collection of HP 12" balance bikes in four trendy colors: black, olive, pink and turquoise. And to ensure young adventurers always feel safe, Miqilong also offers the Atlas and Condor helmet series.
164 
SHINE, RIDE, GROW! 
NEON 2-in-1 Combo Skates: New Colors – New Emotions!
168 
WORLD OF ADVENTURES ON WHEELS
Yvolution: Children's transport for active leisure.
180 
USEFUL FUN: FROM SCREEN TO KIDS’ HANDS
CoComelon toy is a ticket to an exciting world where learning is combined with play.
194 
COLLECT THE WHOLE TEAM!
Inspired by the adventures of Spidey, Ghost-Spider and Miles Morales, Jazwares offers a range of toys that let every child feel like a true superhero.
198 
CREATIVE IDEAS
Cra-Z-Art sets offer endless possibilities for young artists!`;

const lines = text.split('\n');

const contents = [];

console.log(contents)
for (let i = 0; i < lines.length; i += 3) {
    contents.push({
        number: lines[i].trim(),
        name: lines[i + 1].trim(),
        text: lines[i + 2].trim()
    });
}
export default contents;
