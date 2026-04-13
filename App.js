import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginScreen  from './screens/LoginScreen';
import PerfilScreen from './screens/PerfilScreen';
import { as as a } from './stylesAero';

const CATS   = ['Força', 'Cardio', 'Mobilidade'];
const COLORS = { Força: 'rgba(239,68,68,0.75)', Cardio: 'rgba(52,212,117,0.75)', Mobilidade: 'rgba(96,165,250,0.75)' };
let nextId = 1;

function DiarioScreen({ usuario }) {
  const [texto,  setTexto]  = useState('');
  const [catIdx, setCatIdx] = useState(0);
  const [itens,  setItens]  = useState([]);
  const cat = CATS[catIdx];

  const adicionar = () => {
    const nome = texto.trim();
    if (!nome) return;
    setItens(prev => [{ id: String(nextId++), nome, cat }, ...prev]);
    setTexto('');
  };

  const remover = id => setItens(prev => prev.filter(i => i.id !== id));

  const initials = nome => {
    const p = nome.trim().split(' ').filter(Boolean);
    return ((p[0]?.[0] ?? '') + (p[1]?.[0] ?? '')).toUpperCase() || '?';
  };

  const renderItem = ({ item }) => (
    <View style={a.card}>
      <View style={a.cardSheen} />
      <View style={[a.badge, { backgroundColor: COLORS[item.cat] }]}>
        <Text style={a.badgeText}>{item.cat.toUpperCase()}</Text>
      </View>
      <Text style={a.cardNome}>{item.nome}</Text>
      <TouchableOpacity style={a.rmBtn} onPress={() => remover(item.id)}>
        <Text style={a.rmBtnText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={a.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0d4f2a" />

      <View style={a.bgOrbs}>
        <View style={[a.orb, a.orb1]} />
        <View style={[a.orb, a.orb2]} />
      </View>

      <View style={a.header}>
        <View>
          <Text style={a.headerTitle}>Grind Log</Text>
          <Text style={a.headerSub}>Olá, {usuario?.nome?.split(' ')[0] ?? 'atleta'} 👋</Text>
        </View>
        <View style={a.headerBadge}>
          <Text style={a.headerBadgeT}>{initials(usuario?.nome ?? '?')}</Text>
        </View>
      </View>

      <KeyboardAvoidingView style={a.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={20}>
        <View style={a.inputArea}>
          <View style={a.inputSheen} />
          <View style={a.catRow}>
            {CATS.map((c, i) => (
              <TouchableOpacity
                key={c}
                style={[a.catBtn, i === catIdx && a.catBtnSel, i === catIdx && { backgroundColor: COLORS[c] }]}
                onPress={() => setCatIdx(i)}
              >
                <Text style={[a.catBtnText, i === catIdx && a.catBtnTextSel]}>{c}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={a.inputRow}>
            <TextInput
              style={a.input}
              value={texto}
              onChangeText={setTexto}
              placeholder="Nome do exercício..."
              placeholderTextColor="rgba(255,255,255,0.35)"
              onSubmitEditing={adicionar}
              returnKeyType="done"
            />
            <TouchableOpacity style={a.addBtn} onPress={adicionar}>
              <Text style={a.addBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={itens}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={itens.length === 0 ? a.emptyContainer : a.listContent}
          ListEmptyComponent={
            <View style={a.emptyWrapper}>
              <Text style={a.emptyIcon}>🏋️</Text>
              <Text style={a.emptyTitle}>Nenhum treino</Text>
              <Text style={a.emptySubtitle}>Adicione seu primeiro exercício acima.</Text>
            </View>
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const TABS = [
  { key: 'treino', label: 'TREINO' },
  { key: 'perfil', label: 'PERFIL' },
];

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [tab,     setTab]     = useState(0);

  if (!usuario) return <LoginScreen onLogin={u => setUsuario(u)} />;

  return (
    <View style={{ flex: 1, backgroundColor: '#0d4f2a' }}>
      <View style={{ flex: 1 }}>
        {tab === 0
          ? <DiarioScreen usuario={usuario} />
          : <PerfilScreen usuario={usuario} onLogout={() => { setUsuario(null); setTab(0); }} />}
      </View>

      <View style={a.tabBar}>
        {TABS.map((t, i) => (
          <TouchableOpacity key={t.key} style={a.tab} onPress={() => setTab(i)}>
            <Text style={[a.tabText, i === tab && a.tabTextActive]}>{t.label}</Text>
            {i === tab && <View style={a.tabDot} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
