/**
 * Objeto 'pesos' contendo todos os componentes e seus 3 níveis (eco, int, ava).
 * * Estrutura do array de valores:
 * [C1: MultiTasking, C2: Refrigeração, C3: Potência, C4: QualidadeVideo, C5: Armazenamento, Preço]
 */
const pesos = {
    // 🖥️ Processador (CPU): Foco em C1 (MultiTasking) e C3 (Potência).
    processador: { 
        eco: {nome: "Econômico (i3/Ryzen 3)", valores: [2, 2, 3, 1, 1, 650]}, 
        int: {nome: "Intermediário (i5/Ryzen 5)", valores: [4, 3, 4, 1, 1, 1100]}, 
        ava: {nome: "Avançado (i7/Ryzen 7)", valores: [5, 4, 5, 1, 1, 2000]} 
    },
    
    // 🔌 Placa-Mãe: Importante para C2 (Refrigeração) e C3 (Potência - gestão de energia).
    placaMae: { 
        eco: {nome: "Econômico", valores: [2, 2, 2, 1, 1, 500]}, 
        int: {nome: "Intermediário", valores: [3, 3, 3, 1, 2, 800]}, 
        ava: {nome: "Avançado", valores: [4, 5, 4, 1, 3, 1300]} 
    },
    
    // 🧠 Memória RAM: Foco em C1 (MultiTasking).
    ram: { 
        eco: {nome: "Econômico (8GB)", valores: [2, 1, 2, 1, 1, 180]}, 
        int: {nome: "Intermediário (16GB)", valores: [4, 2, 3, 1, 2, 400]}, 
        ava: {nome: "Avançado (32GB+)", valores: [5, 2, 3, 1, 3, 850]} 
    },
    
    // 💾 Armazenamento: Foco em C5 (Armazenamento). SSDs rápidos contribuem para C1.
    armazenamento: { 
        eco: {nome: "HDD 1TB", valores: [1, 1, 1, 1, 2, 250]}, 
        int: {nome: "SSD SATA 500GB", valores: [2, 1, 1, 1, 4, 350]}, 
        ava: {nome: "SSD NVMe 1TB", valores: [3, 1, 1, 1, 5, 550]} 
    },
    
    // 🚀 Placa de Vídeo (GPU): Foco em C3 (Potência) e C4 (Qualidade de Vídeo).
    gpu: { 
        eco: {nome: "Integrado", valores: [1, 1, 2, 1, 1, 0]}, 
        int: {nome: "Intermediário (RTX 4060)", valores: [2, 2, 3, 4, 1, 2500]}, 
        ava: {nome: "Avançado (RTX 4070)", valores: [3, 3, 5, 5, 1, 4500]} 
    },
    
    // ⚡ Fonte: Foco em C3 (Potência) e C2 (Refrigeração - eficiência).
    fonte: { 
        eco: {nome: "450W", valores: [1, 2, 2, 1, 1, 300]}, 
        int: {nome: "650W", valores: [1, 3, 3, 1, 1, 450]}, 
        ava: {nome: "850W", valores: [1, 4, 5, 1, 1, 700]} 
    },
    
    // 🌬️ Gabinete/Cooler: Foco em C2 (Refrigeração).
    gabinete: { 
        eco: {nome: "Simples + Air Cooler", valores: [1, 2, 1, 1, 1, 250]}, 
        int: {nome: "Mesh + Coolers", valores: [2, 4, 2, 1, 1, 400]}, 
        ava: {nome: "Ventilado + Water Cooler", valores: [3, 5, 3, 1, 1, 700]} 
    },
    
    // 📺 Monitor: Foco em C4 (Qualidade de Vídeo).
    monitor: { 
        eco: {nome: '21.5" 60Hz', valores: [1, 0, 0, 2, 0, 550]}, 
        int: {nome: '24" 100Hz', valores: [2, 0, 0, 4, 0, 700]}, 
        ava: {nome: '27" 144Hz', valores: [2, 0, 0, 5, 0, 900]} 
    },
    
    // 🖱️ Periférico: Contribuição mínima e focada em C4 (Qualidade de Vídeo - webcam, etc).
    periferico: { 
        eco: {nome: "Básico", valores: [0, 0, 0, 0, 0, 100]}, 
        int: {nome: "Sem fio", valores: [1, 0, 0, 1, 0, 200]}, 
        ava: {nome: "Gamer RGB", valores: [1, 0, 0, 2, 0, 300]} 
    }
};