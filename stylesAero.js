import { Platform, StyleSheet } from 'react-native';

const SANS = Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif';

const G = {
  skyTop:    '#0d4f2a',
  skyMid:    '#1a7a3c',
  skyBot:    '#2db554',
  aqua:      '#34d475',
  aquaDark:  '#16a34a',
  glass:     'rgba(255,255,255,0.13)',
  glassBord: 'rgba(255,255,255,0.28)',
  sheen:     'rgba(255,255,255,0.22)',
  white:     '#ffffff',
  textPrim:  '#ffffff',
  textSoft:  'rgba(255,255,255,0.72)',
  textMuted: 'rgba(255,255,255,0.45)',
  orb1:      'rgba(100,220,130,0.38)',
  orb2:      'rgba(56,189,248,0.30)',
  orb3:      'rgba(167,243,208,0.22)',
  redAqua:   'rgba(239,68,68,0.72)',
  redDark:   '#b91c1c',
};

const glassCard = {
  backgroundColor: G.glass,
  borderWidth: 1,
  borderColor: G.glassBord,
  borderRadius: 20,
};

const aquaButton = {
  height: 50,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: G.aqua,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.5)',
  overflow: 'hidden',
  marginTop: 18,
};

export const ls = StyleSheet.create({
  safe:       { flex: 1, backgroundColor: G.skyTop },
  flex:       { flex: 1 },

  bgOrbs:     { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  orb:        { position: 'absolute', borderRadius: 999 },
  orb1:       { width: 320, height: 320, backgroundColor: G.orb1, top: -80,  left: -80 },
  orb2:       { width: 240, height: 240, backgroundColor: G.orb2, top: 180,  right: -60 },
  orb3:       { width: 180, height: 180, backgroundColor: G.orb3, bottom: 40, left: 60 },

  body:       { flex: 1, justifyContent: 'center', paddingHorizontal: 28, gap: 28 },

  logoArea:   { alignItems: 'center', gap: 8 },
  logoIcon:   { width: 80, height: 80, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.18)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.45)', alignItems: 'center', justifyContent: 'center' },
  logoInner:  { width: 56, height: 56, borderRadius: 14, backgroundColor: G.aqua, alignItems: 'center', justifyContent: 'center' },
  logoGlyph:  { fontFamily: SANS, fontSize: 18, fontWeight: '800', color: '#fff', letterSpacing: 1 },
  appName:    { fontFamily: SANS, fontSize: 28, fontWeight: '800', color: G.white, letterSpacing: 3 },
  appTagline: { fontFamily: SANS, fontSize: 13, color: G.textSoft },

  card:       { ...glassCard, padding: 24, overflow: 'hidden' },
  cardSheen:  { position: 'absolute', top: 0, left: 0, right: 0, height: 44, backgroundColor: G.sheen, borderTopLeftRadius: 20, borderTopRightRadius: 20 },

  inputLabel: { fontFamily: SANS, fontSize: 12, color: G.textSoft, marginBottom: 6, fontWeight: '600', letterSpacing: 0.5 },
  input:      { height: 44, backgroundColor: 'rgba(255,255,255,0.10)', borderWidth: 1, borderColor: G.glassBord, borderRadius: 12, paddingHorizontal: 14, color: G.white, fontFamily: SANS, fontSize: 14 },
  inputFocus: { borderColor: G.aqua, backgroundColor: 'rgba(52,212,117,0.12)' },

  erro:       { color: '#fca5a5', fontFamily: SANS, fontSize: 12, marginTop: 10, textAlign: 'center' },

  aquaBtn:     { ...aquaButton },
  aquaBtnSheen:{ position: 'absolute', top: 0, left: 0, right: 0, height: 26, backgroundColor: 'rgba(255,255,255,0.28)', borderTopLeftRadius: 25, borderTopRightRadius: 25 },
  aquaBtnText: { fontFamily: SANS, fontSize: 15, fontWeight: '700', color: '#fff', letterSpacing: 0.5, zIndex: 1 },

  hintBox:    { marginTop: 16, padding: 10, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 10, alignItems: 'center' },
  hintText:   { fontFamily: SANS, fontSize: 11, color: G.textMuted },
});

export const ps = StyleSheet.create({
  safe:        { flex: 1, backgroundColor: G.skyTop },
  scroll:      { flex: 1 },
  scrollContent:{ paddingBottom: 48 },

  bgOrbs:      { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  orb:         { position: 'absolute', borderRadius: 999 },
  orb1:        { width: 300, height: 300, backgroundColor: G.orb1, top: -60,  right: -80 },
  orb2:        { width: 200, height: 200, backgroundColor: G.orb2, top: 300,  left: -50 },

  header:      { alignItems: 'center', paddingTop: 36, paddingBottom: 24, gap: 6 },
  avatar:      { width: 88, height: 88, borderRadius: 44, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'rgba(255,255,255,0.55)', overflow: 'hidden', marginBottom: 4 },
  avatarSheen: { position: 'absolute', top: 0, left: 0, right: 0, height: 44, backgroundColor: 'rgba(255,255,255,0.25)', borderTopLeftRadius: 44, borderTopRightRadius: 44 },
  avatarText:  { fontFamily: SANS, fontSize: 28, fontWeight: '800', color: '#fff', zIndex: 1 },
  perfilName:  { fontFamily: SANS, fontSize: 22, fontWeight: '800', color: G.white, letterSpacing: 0.5 },
  perfilHandle:{ fontFamily: SANS, fontSize: 13, color: G.textSoft },

  section:     { ...glassCard, marginHorizontal: 20, marginTop: 14, padding: 18 },
  sectionTitle:{ fontFamily: SANS, fontSize: 11, color: G.textSoft, letterSpacing: 1.5, fontWeight: '700', marginBottom: 14, textTransform: 'uppercase' },
  label:       { fontFamily: SANS, fontSize: 12, color: G.textSoft, marginBottom: 6, fontWeight: '600' },
  input:       { height: 42, backgroundColor: 'rgba(255,255,255,0.10)', borderWidth: 1, borderColor: G.glassBord, borderRadius: 10, paddingHorizontal: 12, color: G.white, fontFamily: SANS, fontSize: 13 },

  chipGrid:    { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip:        { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.10)', borderWidth: 1, borderColor: G.glassBord },
  chipSel:     { backgroundColor: 'rgba(52,212,117,0.28)', borderColor: G.aqua },
  chipText:    { fontFamily: SANS, fontSize: 12, color: G.textSoft, fontWeight: '600' },
  chipTextSel: { color: G.white },

  colorRow:    { flexDirection: 'row', gap: 10 },
  colorDot:    { width: 36, height: 36, borderRadius: 18, borderWidth: 2, borderColor: 'transparent' },
  colorDotSel: { borderColor: '#fff', transform: [{ scale: 1.15 }] },

  toggleRow:   { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  toggleInfo:  { flex: 1, gap: 2 },
  toggleLabel: { fontFamily: SANS, fontSize: 14, color: G.textPrim, fontWeight: '600' },
  toggleSub:   { fontFamily: SANS, fontSize: 11, color: G.textMuted },

  saveArea:    { paddingHorizontal: 20, paddingTop: 8 },
  aquaBtn:     { ...aquaButton },
  aquaBtnRed:  { backgroundColor: G.redAqua, borderColor: 'rgba(255,255,255,0.3)', marginTop: 10 },
  aquaBtnSheen:{ position: 'absolute', top: 0, left: 0, right: 0, height: 26, backgroundColor: 'rgba(255,255,255,0.28)', borderTopLeftRadius: 25, borderTopRightRadius: 25 },
  aquaBtnText: { fontFamily: SANS, fontSize: 15, fontWeight: '700', color: '#fff', letterSpacing: 0.3, zIndex: 1 },

  toast:       { backgroundColor: 'rgba(52,212,117,0.22)', borderWidth: 1, borderColor: G.aqua, borderRadius: 12, padding: 12, alignItems: 'center', marginBottom: 10 },
  toastText:   { fontFamily: SANS, fontSize: 13, color: G.white, fontWeight: '600' },
});

export const as = StyleSheet.create({
  safe:          { flex: 1, backgroundColor: G.skyTop },
  flex:          { flex: 1 },

  bgOrbs:        { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  orb:           { position: 'absolute', borderRadius: 999 },
  orb1:          { width: 280, height: 280, backgroundColor: G.orb1, top: -40, left: -60 },
  orb2:          { width: 200, height: 200, backgroundColor: G.orb2, top: 260, right: -50 },

  header:        { paddingHorizontal: 22, paddingTop: 20, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerTitle:   { fontFamily: SANS, fontSize: 26, fontWeight: '800', color: G.white, letterSpacing: 1 },
  headerSub:     { fontFamily: SANS, fontSize: 11, color: G.textSoft, marginTop: 1 },
  headerBadge:   { width: 44, height: 44, borderRadius: 22, backgroundColor: G.aqua, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)', overflow: 'hidden' },
  headerBadgeT:  { fontFamily: SANS, fontSize: 13, fontWeight: '800', color: '#fff' },

  inputArea:     { marginHorizontal: 16, marginBottom: 12, ...glassCard, padding: 16, gap: 10, overflow: 'hidden' },
  inputSheen:    { position: 'absolute', top: 0, left: 0, right: 0, height: 36, backgroundColor: G.sheen, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  catRow:        { flexDirection: 'row', gap: 8 },
  catBtn:        { flex: 1, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.10)', borderWidth: 1, borderColor: G.glassBord, alignItems: 'center' },
  catBtnText:    { fontFamily: SANS, fontSize: 11, fontWeight: '700', color: G.textSoft },
  catBtnSel:     { borderColor: 'rgba(255,255,255,0.5)' },
  catBtnTextSel: { color: '#fff' },

  inputRow:      { flexDirection: 'row', gap: 10 },
  input:         { flex: 1, height: 44, backgroundColor: 'rgba(255,255,255,0.10)', borderWidth: 1, borderColor: G.glassBord, borderRadius: 12, paddingHorizontal: 14, color: G.white, fontFamily: SANS, fontSize: 14 },
  addBtn:        { width: 44, height: 44, borderRadius: 22, backgroundColor: G.aqua, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' },
  addBtnText:    { color: '#fff', fontSize: 24, fontWeight: '700', lineHeight: 28 },

  listContent:   { paddingHorizontal: 16, paddingTop: 4, gap: 10 },
  emptyContainer:{ flexGrow: 1 },
  emptyWrapper:  { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, padding: 32 },
  emptyIcon:     { fontSize: 52, marginBottom: 6 },
  emptyTitle:    { fontFamily: SANS, fontSize: 18, fontWeight: '800', color: G.white },
  emptySubtitle: { fontFamily: SANS, fontSize: 13, color: G.textSoft, textAlign: 'center' },

  card:          { ...glassCard, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12, overflow: 'hidden' },
  cardSheen:     { position: 'absolute', top: 0, left: 0, right: 0, height: 22, backgroundColor: 'rgba(255,255,255,0.10)', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  badge:         { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  badgeText:     { fontFamily: SANS, fontSize: 9, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },
  cardNome:      { flex: 1, color: G.white, fontFamily: SANS, fontSize: 14, fontWeight: '600' },
  rmBtn:         { width: 30, height: 30, borderRadius: 15, backgroundColor: 'rgba(239,68,68,0.25)', borderWidth: 1, borderColor: 'rgba(239,68,68,0.5)', alignItems: 'center', justifyContent: 'center' },
  rmBtnText:     { color: '#fca5a5', fontSize: 12, fontWeight: '700' },

  tabBar:        { flexDirection: 'row', borderTopWidth: 1, borderTopColor: G.glassBord, backgroundColor: 'rgba(13,79,42,0.88)' },
  tab:           { flex: 1, paddingVertical: 12, alignItems: 'center', gap: 2 },
  tabText:       { fontFamily: SANS, fontSize: 10, fontWeight: '700', color: G.textMuted, letterSpacing: 1 },
  tabTextActive: { color: G.white },
  tabDot:        { width: 4, height: 4, borderRadius: 2, backgroundColor: G.aqua },
});
