// src/verses.js
// All verse text is King James Version (public domain — free to ship).
// The "w" field is the personality reflection shown above each verse.

export const ACCENT_DEFAULT = '#e3a155';
export const GLOW_DEFAULT = 'rgba(227,161,85,.5)';

export const MODES = {
  shepherd: {
    name: 'The Shepherd',
    glyph: '🕯️',
    color: '#e3a155',
    glow: 'rgba(227,161,85,.5)',
    blurb: 'You were sought on purpose. Gentle reminders that you are not a number — you are the one.',
    verses: [
      { t: 'What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine, and go after that which is lost, until he find it?', r: 'Luke 15:4',
        w: "You imagine being left behind. Read it again — you're the one He goes after." },
      { t: 'Joy shall be in heaven over one sinner that repenteth, more than over ninety and nine just persons.', r: 'Luke 15:7',
        w: "Heaven isn't disappointed in you. Heaven is throwing a party the day you turn around." },
      { t: 'But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.', r: 'Luke 15:20',
        w: "He saw you while you were still far off. He didn't wait for you to arrive — He ran." },
      { t: 'For the Son of man is come to seek and to save that which was lost.', r: 'Luke 19:10',
        w: "Being lost isn't disqualifying. It's the exact thing He came looking for." },
      { t: 'I will seek that which was lost, and bring again that which was driven away, and will bind up that which was broken.', r: 'Ezekiel 34:16',
        w: 'Not just found — bound up, healed, brought home. He finishes what He starts.' },
      { t: 'Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.', r: 'Isaiah 43:1',
        w: "He knows your name. Not the crowd's name — yours." },
    ],
  },
  comforter: {
    name: 'The Comforter',
    glyph: '🤍',
    color: '#9cb8e0',
    glow: 'rgba(156,184,224,.45)',
    blurb: 'For the heavy days. A soft place to land when getting up feels like too much.',
    verses: [
      { t: 'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.', r: 'Psalm 34:18',
        w: "He doesn't keep His distance from your lowest day. That's exactly where He draws near." },
      { t: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', r: 'Matthew 11:28',
        w: "You don't have to fix yourself first. Bring the weight as it is. Rest is the invitation." },
      { t: 'He healeth the broken in heart, and bindeth up their wounds.', r: 'Psalm 147:3',
        w: 'The same hands that named the stars are gentle enough for your wounds.' },
      { t: 'Why art thou cast down, O my soul? hope thou in God: for I shall yet praise him.', r: 'Psalm 42:11',
        w: "Even the psalmist had to talk to his own heavy heart. You're in good company. The word is: yet." },
      { t: 'Weeping may endure for a night, but joy cometh in the morning.', r: 'Psalm 30:5',
        w: "The night is real. So is the morning. Don't let the dark convince you it's permanent." },
      { t: 'His compassions fail not. They are new every morning: great is thy faithfulness.', r: 'Lamentations 3:22-23',
        w: "Yesterday's mercy ran out — and there's a fresh batch waiting for you today." },
    ],
  },
  fire: {
    name: 'The Fire',
    glyph: '🔥',
    color: '#ef7d3a',
    glow: 'rgba(239,125,58,.5)',
    blurb: 'When you need to get up. Bold, loud, get-off-the-floor energy for the comeback.',
    verses: [
      { t: 'They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary.', r: 'Isaiah 40:31',
        w: "You're not running on your own tank anymore. Renewed strength is on the table. Get up." },
      { t: 'Behold, I will do a new thing; now it shall spring forth. I will even make a way in the wilderness, and rivers in the desert.', r: 'Isaiah 43:19',
        w: "That dry season you're in? He specializes in putting rivers exactly where there's no water." },
      { t: 'I can do all things through Christ which strengtheneth me.', r: 'Philippians 4:13',
        w: 'Not on a good day. Not when you feel it. All things — borrowed strength, not your own.' },
      { t: 'Be strong and of a good courage; be not afraid: for the LORD thy God is with thee whithersoever thou goest.', r: 'Joshua 1:9',
        w: "That's not a suggestion — it's a command, backed by a promise. Move." },
      { t: 'If God be for us, who can be against us?', r: 'Romans 8:31',
        w: 'Count the room. The only opinion that outweighs the rest is already on your side.' },
      { t: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.', r: '2 Timothy 1:7',
        w: 'That fear talking you out of it? Not from Him. Check the return address.' },
    ],
  },
  real: {
    name: 'The Real One',
    glyph: '⚡',
    color: '#d8c08a',
    glow: 'rgba(216,192,138,.42)',
    blurb: "Straight talk, no fluff. Tough love for the wilderness that's actually building you.",
    verses: [
      { t: 'For a just man falleth seven times, and riseth up again.', r: 'Proverbs 24:16',
        w: "Falling isn't the headline. The number that defines you is the getting-up count." },
      { t: 'Let us not be weary in well doing: for in due season we shall reap, if we faint not.', r: 'Galatians 6:9',
        w: "The harvest is late, not cancelled. Don't quit one season before it shows up." },
      { t: 'Thou shalt remember all the way which the LORD thy God led thee these forty years in the wilderness, to humble thee, and to prove thee.', r: 'Deuteronomy 8:2',
        w: "The desert wasn't a detour. It was the training. Stop asking to skip the part that's making you." },
      { t: 'Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life.', r: 'James 1:12',
        w: "Nobody's handing out crowns for comfort. The trial you're hating is the qualifier." },
      { t: 'Tribulation worketh patience; and patience, experience; and experience, hope.', r: 'Romans 5:3-4',
        w: "There's an actual order to this. The pressure isn't random — it's manufacturing something." },
      { t: 'In the world ye shall have tribulation: but be of good cheer; I have overcome the world.', r: 'John 16:33',
        w: "He told you it'd be hard so the hard wouldn't shake you. It's not a surprise. It's not the end." },
    ],
  },
};

// Deterministic "verse of the day": stable for the whole day, rolls over at LOCAL midnight.
// Uses the local calendar date (not UTC) so the verse changes at the user's midnight,
// not at UTC midnight (which is mid-day in NZ/AU).
export function dailyIndex(len, offset = 0) {
  const now = new Date();
  const local = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const day = Math.round(local.getTime() / 864e5);
  return (((day + offset) % len) + len) % len;
}
