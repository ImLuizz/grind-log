# GRIND LOG

**Diário de Treino** · IFSP Campus Araraquara · Disciplina ARQAPMO  
Estilo visual: **Frutiger Aero** — glassmorfismo, gradientes verdes, orbs e aqua buttons.

---

## Credenciais de demonstração

| E-mail | Senha |
|---|---|
| joao@grindlog.com | 123456 |
| admin@grindlog.com | admin |

---

## Estrutura de pastas

```
grind-log/
├── App.js                  # Raiz: autenticação + tab bar + DiarioScreen
├── stylesAero.js           # Design system Frutiger Aero (ls, ps, as)
├── app.json                # Config Expo (nome, slug, bundle ID, tema escuro)
├── babel.config.js         # Config Babel padrão Expo
├── package.json            # Dependências
├── .gitignore
└── screens/
    ├── LoginScreen.js      # Login funcional com validação de credenciais
    └── PerfilScreen.js     # Customização de perfil, avatar, notificações
```

---

## Pré-requisitos

| Ferramenta | Versão mínima | Verificar |
|---|---|---|
| Node.js | 18+ | `node -v` |
| npm | 9+ | `npm -v` |
| Expo Go (celular) | qualquer | App Store / Play Store |

---

## Instalação e execução

```bash
# 1. Clone ou extraia o projeto
git clone <url-do-repositorio> grind-log
cd grind-log

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npx expo start
```

Abra o **Expo Go** no celular e escaneie o QR Code exibido no terminal.

### Emulador (opcional)

```bash
npx expo start --android   # requer Android Studio + AVD configurado
npx expo start --ios       # requer Xcode (somente macOS)
```

---

## Itens bônus implementados

- [x] Botão de remover item em cada card
- [x] Badge colorido por categoria (Força · Cardio · Mobilidade)
- [x] Mensagem amigável de lista vazia

---

## Fluxo de telas

```
LoginScreen ──(credenciais válidas)──▶ Tab Bar
                                         ├── TREINO  →  DiarioScreen
                                         └── PERFIL  →  PerfilScreen
                                                           └── Sair ──▶ LoginScreen
```
