import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ps } from '../stylesAero';

const CORES_AVATAR = ['#4fc3f7','#81c784','#ffb74d','#f48fb1','#ce93d8'];
const OBJETIVOS    = ['Hipertrofia','Emagrecimento','Resistência','Mobilidade'];

function initials(nome) {
  const p = nome.trim().split(' ').filter(Boolean);
  return ((p[0]?.[0] ?? '') + (p[1]?.[0] ?? '')).toUpperCase() || '??';
}

export default function PerfilScreen({ usuario, onLogout }) {
  const [nome,       setNome]       = useState(usuario?.nome   ?? 'João Silva');
  const [handle,     setHandle]     = useState(usuario?.handle ?? 'joaosilva');
  const [email,      setEmail]      = useState(usuario?.email  ?? '');
  const [objetivo,   setObjetivo]   = useState(OBJETIVOS[0]);
  const [cor,        setCor]        = useState(CORES_AVATAR[0]);
  const [lembretes,  setLembretes]  = useState(true);
  const [resumo,     setResumo]     = useState(false);
  const [salvo,      setSalvo]      = useState(false);

  const salvar = () => { setSalvo(true); setTimeout(() => setSalvo(false), 2400); };

  return (
    <SafeAreaView style={ps.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1a6b3a" />
      <ScrollView style={ps.scroll} contentContainerStyle={ps.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={ps.bgOrbs}>
          <View style={[ps.orb, ps.orb1]} />
          <View style={[ps.orb, ps.orb2]} />
        </View>

        <View style={ps.header}>
          <View style={[ps.avatar, { backgroundColor: cor }]}>
            <View style={ps.avatarSheen} />
            <Text style={ps.avatarText}>{initials(nome)}</Text>
          </View>
          <Text style={ps.perfilName}>{nome || 'Seu Nome'}</Text>
          <Text style={ps.perfilHandle}>@{handle.replace(/\s/g,'').toLowerCase()}</Text>
        </View>

        <View style={ps.section}>
          <Text style={ps.sectionTitle}>Dados pessoais</Text>
          <Text style={ps.label}>Nome completo</Text>
          <TextInput style={ps.input} value={nome}   onChangeText={setNome}   placeholderTextColor="rgba(255,255,255,0.35)" />
          <Text style={[ps.label,{marginTop:12}]}>Usuário</Text>
          <TextInput style={ps.input} value={handle} onChangeText={setHandle} autoCapitalize="none" placeholderTextColor="rgba(255,255,255,0.35)" />
          <Text style={[ps.label,{marginTop:12}]}>E-mail</Text>
          <TextInput style={ps.input} value={email}  onChangeText={setEmail}  keyboardType="email-address" autoCapitalize="none" placeholderTextColor="rgba(255,255,255,0.35)" />
        </View>

        <View style={ps.section}>
          <Text style={ps.sectionTitle}>Objetivo de treino</Text>
          <View style={ps.chipGrid}>
            {OBJETIVOS.map(obj => (
              <TouchableOpacity
                key={obj}
                style={[ps.chip, objetivo === obj && ps.chipSel]}
                onPress={() => setObjetivo(obj)}
                activeOpacity={0.75}
              >
                <Text style={[ps.chipText, objetivo === obj && ps.chipTextSel]}>{obj}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={ps.section}>
          <Text style={ps.sectionTitle}>Cor do avatar</Text>
          <View style={ps.colorRow}>
            {CORES_AVATAR.map(c => (
              <TouchableOpacity
                key={c}
                style={[ps.colorDot, { backgroundColor: c }, cor === c && ps.colorDotSel]}
                onPress={() => setCor(c)}
                activeOpacity={0.8}
              />
            ))}
          </View>
        </View>

        <View style={ps.section}>
          <Text style={ps.sectionTitle}>Notificações</Text>
          <View style={ps.toggleRow}>
            <View style={ps.toggleInfo}>
              <Text style={ps.toggleLabel}>Lembrete de treino</Text>
              <Text style={ps.toggleSub}>Diário às 07h00</Text>
            </View>
            <Switch value={lembretes} onValueChange={setLembretes} trackColor={{ false:'rgba(255,255,255,0.2)', true:'#4ade80' }} thumbColor="#fff" />
          </View>
          <View style={ps.toggleRow}>
            <View style={ps.toggleInfo}>
              <Text style={ps.toggleLabel}>Resumo semanal</Text>
              <Text style={ps.toggleSub}>Todo domingo</Text>
            </View>
            <Switch value={resumo} onValueChange={setResumo} trackColor={{ false:'rgba(255,255,255,0.2)', true:'#4ade80' }} thumbColor="#fff" />
          </View>
        </View>

        <View style={ps.saveArea}>
          {salvo && (
            <View style={ps.toast}>
              <Text style={ps.toastText}>✓  Perfil salvo com sucesso!</Text>
            </View>
          )}
          <TouchableOpacity style={ps.aquaBtn} onPress={salvar} activeOpacity={0.82}>
            <View style={ps.aquaBtnSheen} />
            <Text style={ps.aquaBtnText}>Salvar alterações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ps.aquaBtn, ps.aquaBtnRed]}
            activeOpacity={0.82}
            onPress={() => Alert.alert('Sair', 'Deseja sair da conta?', [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Sair', style: 'destructive', onPress: onLogout },
            ])}
          >
            <View style={ps.aquaBtnSheen} />
            <Text style={ps.aquaBtnText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
