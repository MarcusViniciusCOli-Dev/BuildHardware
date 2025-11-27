# 🧑‍💻 CONECTADOS PELA COMUNIDADE - BITS E BYTES: DECODIFICANDO O AMANHÃ 

# 🛠️ PC Builder Simulator: Monte & Otimize!


O **PC Builder Simulator** é um projeto interativo desenvolvido em HTML, CSS e JavaScript que permite aos utilizadores montarem um computador virtual, selecionando diferentes componentes de hardware (CPU, GPU, RAM, etc.). O objetivo não é apenas calcular o preço, mas sim **simular o impacto que cada componente tem no desempenho geral** do sistema em áreas críticas como multitarefa, potência e refrigeração.

## ✨ Funcionalidades Principais

* **Montagem Interativa:** Selecione componentes como Processador, Placa de Vídeo, RAM e Armazenamento através de *dropdowns*.
* **Análise de Desempenho:** Após a seleção, o simulador calcula e exibe o desempenho do PC em **5 categorias-chave**.
* **Visualização Dinâmica:** A pré-visualização do PC (o "gabinete") muda de cor e brilho para refletir o nível de **Potência** e **Qualidade de Vídeo** da sua montagem.
* **Controlo Orçamental:** Visualização do preço total em tempo real com base nos componentes escolhidos.

---

## 📊 A Lógica do Desempenho (Pesos e Pontuações)

O coração deste simulador está no ficheiro `data.js`, onde definimos a relação entre a **Qualidade do Componente** e a **Característica do PC**. Cada componente afeta o PC de forma diferente.

| Característica | O que mede | Componentes-Chave |
| :--- | :--- | :--- |
| **Multitarefa** | Capacidade de executar múltiplos programas simultaneamente (CPU, RAM, Armazenamento Rápido). | **Processador (CPU)** e **Memória RAM**. |
| **Refrigeração** | Eficiência na gestão de calor (evitando *throttling*). | **Gabinete/Cooler**, **Placa-Mãe** e **Fonte (Eficiência)**. |
| **Potência** | Desempenho bruto (FPS em jogos, renderização) e fornecimento de energia. | **Processador (CPU)**, **Placa de Vídeo (GPU)** e **Fonte**. |
| **Qualidade de Vídeo** | Experiência visual (resolução, taxa de atualização e detalhes). | **Placa de Vídeo (GPU)** e **Monitor**. |
| **Armazenamento** | Velocidade de inicialização, carregamento de jogos/apps e capacidade. | **Armazenamento (SSD/HDD)**. |

Cada componente é classificado com uma pontuação de 1 a 5 para cada uma das 5 características. Essas pontuações são somadas e, em seguida, **normalizadas** em relação ao *máximo teórico possível* (calculado no `script.js`) para gerar as barras de desempenho finais, limitadas ao máximo de 5 pontos.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é uma aplicação *Front-End* pura, ideal para quem está a começar no desenvolvimento web:

* **HTML5:** Estrutura e *layout* da página (incluindo o formulário de seleção).
* **CSS3:** Estilização responsiva e efeitos visuais (com um tema **dark mode** e animações de barras).
* **JavaScript:** Lógica central para:
    * Popular as opções de seleção (`<select>`).
    * Realizar o cálculo de desempenho e preço (`script.js`).
    * Atualizar a interface e a visualização dinâmica do PC.
    * **Git e GitHub Pages:** Utilizado para versionamento e hospedagem gratuita.

---

## 🚀 Como Executar o Projeto

Podes visualizar este projeto diretamente no GitHub Pages (se já tiveres ativado a publicação) ou localmente:

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/MarcusViniciusCOli-Dev/BuildHardware.git
    ```
2.  **Navegue até a Pasta:**
    ```bash
    cd nome-do-seu-repositorio
    ```
3.  **Abra no Navegador:**
    * Basta dar um duplo clique no ficheiro **`index.html`** no seu explorador de arquivos, ou ainda, no VScode, pressionar f5 com o **`index.html`** selecionado.

---

## 💡 Próximos Passos e Contribuições

Gostaria de contribuir ou sugerir melhorias? O projeto está aberto a novas ideias!

* **Validação de Compatibilidade:** Implementar verificações para garantir que o Processador e a Placa-Mãe são compatíveis (por exemplo, *Socket* LGA/AM4).
* **Alertas de Gargalo (*Bottleneck*):** Adicionar um sistema que avisa se um componente muito fraco está a limitar o potencial de um componente muito forte.
* **Expansão de Dados:** Adicionar mais níveis, marcas e componentes (SSDs NVMe de 4ª Geração, etc.).
* **Melhorias Visuais:** Usar gráficos avançados (ex: gráficos radiais) para exibir o desempenho.

Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests**!

---
### Este material é parte do workshop: Computadores: Software e Hardware
---


## 🤝 Equipe

* Ana Luiza Ribeiro de Oliveira 

* Bento Gabriel Ferreira Marcondes 

* Guilherme dos Santos Luz

* Maiara Raquel Guedes Leite

* Marcus Vinicius Candido de Oliveira

* Maria Clara de Toledo

* Marina Laís Rosa

* Mônica Nunes Junquetti

* Orientador: Márcio José Santos Nagy
---
2º ADS, 2025 - SENAI FÉLIX GUISARD - TAUBATÉ
