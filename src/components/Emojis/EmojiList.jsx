import EmojiCard from "./EmojiCard";

const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
];

function EmojiList() {
  return (
    <dl className="dictionary">
      {emojipedia.map((emoji) => (
        <EmojiCard
          key={emoji.id}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
        />
      ))}
    </dl>
  );
}

function buildEmoji(emoji) {
  return (
    <EmojiCard
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

export default EmojiList;
