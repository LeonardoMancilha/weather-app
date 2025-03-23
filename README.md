# 🌤️ Weather App
Um projeto moderno e interativo para consulta de previsão do tempo, utilizando React, Vite e a OpenWeather API.

## 📸 Demonstração

![Captura de tela 2025-02-07 203213](https://github.com/user-attachments/assets/ec3054bd-a596-4a46-8856-252c29df75f8)

![Captura de tela 2025-02-15 170340](https://github.com/user-attachments/assets/6ba12400-8ec6-4617-b011-a505fe04535f)

## 📌 Funcionalidades
- ✅ Busca por cidade: Digite o nome da cidade para visualizar o clima.
- ✅ Busca automática pela localização: Utiliza a Geolocation API para buscar a cidade do usuário.
- ✅ Alternância entre °C e °F: Converta rapidamente a temperatura com um botão de toggle.
- ✅ Previsão para 3 dias: Exibe a previsão detalhada dos próximos dias.
- ✅ Histórico de pesquisas: Armazena as últimas cidades pesquisadas no LocalStorage.
- ✅ Exibição detalhada do clima: Sensação térmica, umidade, velocidade do vento, nascer e pôr do sol.
- ✅ Aprimoramentos visuais: Ícones dinâmicos de clima e animações em CSS puro.

## 🌍 SEO & Performance
O projeto segue boas práticas para garantir melhor indexação e carregamento otimizado:

### SEO
- 🔹 Uso de meta tags (title, description, viewport, og:image, etc.).
- 🔹 Semântica HTML para melhor acessibilidade e rastreamento por motores de busca.
- 🔹 Uso de atributos ALT em imagens para melhorar acessibilidade e indexação.

### Performance
- ⚡ Minificação e otimização de código para reduzir o tempo de carregamento da página.
- ⚡ Armazenamento de dados no LocalStorage para evitar requisições desnecessárias e melhorar a experiência do usuário.
- ⚡ Uso do Vite para builds mais rápidos e leves, garantindo tempos de carregamento mais rápidos.

### Acessibilidade
- 🔑 Implementação de foco visível nos elementos interativos para facilitar a navegação com teclado.
- 🧑‍🦯 Ajustes para leitores de tela, como o uso de aria-labels e estrutura semântica.
- 💡 Contrast ratio adequado para garantir boa visibilidade para todos os usuários.

### Pontuações no Lighthouse
As pontuações do projeto no Lighthouse são as seguintes:

- Performance: 100/100 🚀
- Acessibilidade: 10/100 🌟
- SEO: 100/100 🏅
- Boas Práticas: 100/100 ✅

Essas pontuações indicam que o projeto foi otimizado para fornecer uma excelente experiência de usuário, com foco em performance, acessibilidade e SEO.

## 🚀 Tecnologias Utilizadas
- React + Vite
- CSS puro 
- Pequenas Animações (Keyframes)
- Jest (testes implementados para a conversão de temperatura)
- OpenWeather API (para os dados climáticos)
- Boas práticas de SEO e Perfomance

# 📦 Como Rodar o Projeto
1. Clone o repositório:

```bash
git clone https://github.com/LeonardoMancilha/weather-app
```

2. Instale as dependências:

```bash
cd weather-app
npm install
```

3. Rodando o aplicativo:

```bash
npm run dev
```

4. Abra o navegador e acesse http://localhost:3000 para ver o projeto em ação.
