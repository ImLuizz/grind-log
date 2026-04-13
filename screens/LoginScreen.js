import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ls } from '../stylesAero';

const USUARIOS = [
  { email: 'joao@grindlog.com', senha: '123456', nome: 'João Silva', handle: 'joaosilva' },
  { email: 'admin@grindlog.com', senha: 'admin',  nome: 'Admin',      handle: 'admin' },
];

export default function LoginScreen({ onLogin }) {
  const [email, setEmail]   = useState('');
  const [senha, setSenha]   = useState('');
  const [erro, setErro]     = useState('');
  const [focusE, setFocusE] = useState(false);
  const [focusS, setFocusS] = useState(false);

  const entrar = () => {
    const usuario = USUARIOS.find(
      u => u.email === email.trim().toLowerCase() && u.senha === senha
    );
    if (!email.trim() || !senha) { setErro('Preencha todos os campos.'); return; }
    if (!usuario)                { setErro('E-mail ou senha incorretos.'); return; }
    setErro('');
    onLogin(usuario);
  };

  return (
    <SafeAreaView style={ls.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1a6b3a" />
      <KeyboardAvoidingView style={ls.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <View style={ls.bgOrbs}>
          <View style={[ls.orb, ls.orb1]} />
          <View style={[ls.orb, ls.orb2]} />
          <View style={[ls.orb, ls.orb3]} />
        </View>

        <View style={ls.body}>
          <View style={ls.logoArea}>
            <View style={ls.logoIcon}>
              <View style={ls.logoInner}>
                <Text style={ls.logoGlyph}>GL</Text>
              </View>
            </View>
            <Text style={ls.appName}>GRIND LOG</Text>
            <Text style={ls.appTagline}>Seu diário de treino</Text>
          </View>

          <View style={ls.card}>
            <View style={ls.cardSheen} />

            <Text style={ls.inputLabel}>E-mail</Text>
            <TextInput
              style={[ls.input, focusE && ls.inputFocus]}
              value={email}
              onChangeText={v => { setEmail(v); setErro(''); }}
              placeholder="seu@email.com"
              placeholderTextColor="rgba(255,255,255,0.4)"
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setFocusE(true)}
              onBlur={() => setFocusE(false)}
            />

            <Text style={[ls.inputLabel, { marginTop: 14 }]}>Senha</Text>
            <TextInput
              style={[ls.input, focusS && ls.inputFocus]}
              value={senha}
              onChangeText={v => { setSenha(v); setErro(''); }}
              placeholder="••••••••"
              placeholderTextColor="rgba(255,255,255,0.4)"
              secureTextEntry
              onFocus={() => setFocusS(true)}
              onBlur={() => setFocusS(false)}
              onSubmitEditing={entrar}
            />

            {!!erro && <Text style={ls.erro}>{erro}</Text>}

            <TouchableOpacity style={ls.aquaBtn} onPress={entrar} activeOpacity={0.82}>
              <View style={ls.aquaBtnSheen} />
              <Text style={ls.aquaBtnText}>Entrar</Text>
            </TouchableOpacity>

            <View style={ls.hintBox}>
              <Text style={ls.hintText}>Demo: joao@grindlog.com / 123456</Text>
            </View>
          </View>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
