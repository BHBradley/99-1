import { useState } from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import { ACCENT_DEFAULT, GLOW_DEFAULT, MODES, dailyIndex } from './src/verses';

const C = {
  bg: '#0b0a12',
  bg2: '#15121f',
  edge: '#060509',
  ink: '#f4ede0',
  muted: '#b9ad98',
  faint: '#6f6757',
  card: 'rgba(255,250,240,0.04)',
  line: 'rgba(255,245,225,0.10)',
};

// The prototype leans on Fraunces / Newsreader. Custom fonts are a Phase-3
// polish item (expo-font); for the POC we approximate with the platform serif.
const SERIF = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

const VOICE_KEYS = Object.keys(MODES);

const todayLabel = () =>
  new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

export default function App() {
  const [voice, setVoice] = useState(null); // null = home screen
  const [offset, setOffset] = useState(0); // 0 = today's verse; bumped by "Pull another word"

  const mode = voice ? MODES[voice] : null;
  const accent = mode ? mode.color : ACCENT_DEFAULT;
  const glow = mode ? mode.glow : GLOW_DEFAULT;

  const openVoice = (key) => {
    setVoice(key);
    setOffset(0);
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[C.bg, C.bg2, C.edge]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />
      {/* candlelight glow rising from the horizon, tinted per voice */}
      <LinearGradient
        colors={['transparent', glow]}
        style={styles.horizon}
        pointerEvents="none"
      />
      <StatusBar style="light" />

      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          {/* header */}
          <View style={styles.top}>
            <Text style={styles.brand}>
              The <Text style={styles.brandBold}>99</Text>{' '}
              <Text style={[styles.brandNum, { color: accent }]}>÷ 1</Text>
            </Text>
            <Text style={styles.date}>{todayLabel().toUpperCase()}</Text>
          </View>

          {mode ? (
            <VerseScreen
              mode={mode}
              accent={accent}
              offset={offset}
              onAnother={() => setOffset((o) => o + 1)}
              onBack={() => setVoice(null)}
            />
          ) : (
            <HomeScreen accent={accent} onPick={openVoice} />
          )}

          <Text style={styles.footer}>
            The 99 · a daily word for the ones still finding their way home
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function HomeScreen({ accent, onPick }) {
  return (
    <View>
      <View style={styles.hero}>
        <Text style={[styles.kicker, { color: accent }]}>
          For the one in the wilderness
        </Text>
        <Text style={styles.h1}>
          He left the ninety-nine.{'\n'}
          <Text style={[styles.h1em, { color: accent }]}>He came for you.</Text>
        </Text>
        <Text style={styles.lede}>
          Prodigal. Black sheep. Lost in the dry land. Whatever voice you need to
          hear it in today — choose, and receive your word.
        </Text>
      </View>

      <Text style={styles.pickLabel}>CHOOSE YOUR VOICE</Text>

      <View style={styles.grid}>
        {VOICE_KEYS.map((key) => {
          const m = MODES[key];
          return (
            <Pressable
              key={key}
              onPress={() => onPick(key)}
              style={({ pressed }) => [
                styles.modeCard,
                { borderColor: pressed ? m.color : C.line },
                pressed && { backgroundColor: 'rgba(255,250,240,0.06)' },
              ]}
            >
              <Text style={styles.glyph}>{m.glyph}</Text>
              <Text style={[styles.modeName, { color: m.color }]}>{m.name}</Text>
              <Text style={styles.modeBlurb}>{m.blurb}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function VerseScreen({ mode, accent, offset, onAnother, onBack }) {
  const i = dailyIndex(mode.verses.length, offset);
  const v = mode.verses[i];

  return (
    <View style={styles.stage}>
      <View style={[styles.voicetag, { borderColor: C.line }]}>
        <View
          style={[styles.dot, { backgroundColor: accent, shadowColor: accent }]}
        />
        <Text style={[styles.voicetagText, { color: accent }]}>
          {mode.name.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.word}>{v.w}</Text>

      <Text style={styles.verse}>
        <Text style={[styles.quote, { color: accent }]}>“</Text>
        {v.t}
      </Text>

      <Text style={[styles.ref, { color: accent }]}>{v.r.toUpperCase()}</Text>
      <Text style={styles.trans}>KING JAMES VERSION</Text>

      <View style={styles.controls}>
        <Pressable
          onPress={onAnother}
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: accent, borderColor: accent },
            pressed && styles.btnPressed,
          ]}
        >
          <Text style={styles.btnText}>Pull another word</Text>
        </Pressable>

        <Pressable
          onPress={onBack}
          style={({ pressed }) => [
            styles.btn,
            styles.ghost,
            pressed && { borderColor: C.muted },
          ]}
        >
          <Text style={[styles.btnText, styles.ghostText]}>← Change voice</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  horizon: { position: 'absolute', left: 0, right: 0, bottom: 0, height: '45%' },
  safe: { flex: 1 },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 56,
    minHeight: '100%',
  },

  // header
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: { fontFamily: SERIF, fontSize: 18, color: C.ink },
  brandBold: { fontWeight: '700' },
  brandNum: { fontStyle: 'italic' },
  date: { fontSize: 11, letterSpacing: 1.5, color: C.faint },

  // hero
  hero: { marginTop: 48, alignItems: 'center' },
  kicker: { fontSize: 12, letterSpacing: 3, marginBottom: 20, textAlign: 'center' },
  h1: {
    fontFamily: SERIF,
    fontWeight: '300',
    fontSize: 40,
    lineHeight: 44,
    color: C.ink,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  h1em: { fontStyle: 'italic' },
  lede: {
    marginTop: 24,
    maxWidth: 420,
    color: C.muted,
    fontSize: 16,
    lineHeight: 27,
    textAlign: 'center',
  },

  pickLabel: {
    marginTop: 56,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 12,
    letterSpacing: 3,
    color: C.faint,
  },

  // mode cards
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  modeCard: {
    width: '48%',
    borderWidth: 1,
    backgroundColor: C.card,
    borderRadius: 18,
    padding: 20,
    marginBottom: 14,
  },
  glyph: { fontSize: 28 },
  modeName: { fontFamily: SERIF, fontWeight: '500', fontSize: 22, marginTop: 12 },
  modeBlurb: { color: C.muted, fontSize: 14, lineHeight: 21, marginTop: 6 },

  // verse stage
  stage: { marginTop: 40, alignItems: 'center' },
  voicetag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 999,
    marginBottom: 32,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 9,
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
  voicetagText: { fontSize: 11, letterSpacing: 2.5 },
  word: {
    color: C.muted,
    fontSize: 17,
    lineHeight: 27,
    textAlign: 'center',
    maxWidth: 360,
    marginBottom: 28,
  },
  verse: {
    fontFamily: SERIF,
    fontStyle: 'italic',
    fontWeight: '300',
    fontSize: 28,
    lineHeight: 38,
    textAlign: 'center',
    maxWidth: 460,
    color: C.ink,
  },
  quote: { fontSize: 34 },
  ref: { marginTop: 26, fontSize: 13, letterSpacing: 2.5 },
  trans: { color: C.faint, fontSize: 11, letterSpacing: 1.5, marginTop: 8 },

  // controls
  controls: { marginTop: 44, width: '100%', alignItems: 'center' },
  btn: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginBottom: 12,
    minWidth: 220,
    alignItems: 'center',
  },
  btnPressed: { opacity: 0.85 },
  btnText: { fontSize: 15, fontWeight: '600', color: '#1a130a', letterSpacing: 0.5 },
  ghost: { backgroundColor: 'transparent', borderColor: C.line },
  ghostText: { color: C.muted, fontWeight: '500' },

  footer: {
    marginTop: 'auto',
    paddingTop: 40,
    textAlign: 'center',
    color: C.faint,
    fontSize: 12,
  },
});
