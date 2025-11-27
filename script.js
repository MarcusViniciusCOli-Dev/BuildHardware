// A nova variável 'pesos' deve ser importada do data.js

// calcular o máximo teórico de cada característica
const maximos = [0,0,0,0,0];
for (const categoria in pesos) {
    // Usamos 'valores' para calcular os máximos
    const valores = Object.values(pesos[categoria]).map(item => item.valores);
    
    for (let i=0; i<5; i++) {
        // Encontra o máximo peso para a característica 'i' em todas as opções da categoria
        maximos[i] += Math.max(...valores.map(v => v[i])); 
    }
}

// Funções para preencher as opções dos selects (para refletir os nomes no data.js)
document.addEventListener('DOMContentLoaded', () => {
    for (const categoria in pesos) {
        const selectElement = document.getElementById(categoria);
        if (selectElement) {
            // Limpa as opções existentes (exceto o 'Selecione')
            selectElement.innerHTML = '<option value="" disabled selected>Selecione</option>';
            
            for (const nivel in pesos[categoria]) {
                const componente = pesos[categoria][nivel];
                const option = document.createElement('option');
                option.value = nivel;
                option.textContent = `${componente.nome} - R$ ${componente.valores[5].toLocaleString('pt-BR')}`;
                selectElement.appendChild(option);
            }
        }
    }
});


document.getElementById('calcular').addEventListener('click', () => {
    const campos = ['processador','placaMae','ram','armazenamento','gpu','fonte','gabinete','monitor','periferico'];
    let soma = [0,0,0,0,0];
    let total = 0;

    campos.forEach(id => {
        const val = document.getElementById(id).value;
        if(val && pesos[id][val]) {
            // 🛑 AJUSTE CRÍTICO AQUI:
            // Agora pegamos o array de pesos dentro da propriedade 'valores'
            const arr = pesos[id][val].valores; 
            
            soma = soma.map((n,i)=> n+arr[i]);
            total += arr[5]; // Preço está na posição 5
        }
    });

    // normaliza cada característica proporcional ao máximo possível
    const norm = soma.map((v,i) => Math.min(5, (v / maximos[i]) * 5));

    const bars = ['barMulti','barRefri','barPower','barVideo','barStorage'];
    bars.forEach((b,i)=>{
        document.getElementById(b).style.width = (norm[i] * 20)+'%';
    });

    document.getElementById('precoTotal').innerText = 'Preço Total: R$ '+ total.toLocaleString('pt-BR');

    // atualiza o visual do PC (como antes)
    const pc = document.querySelector('.pc-shape');
    const brilho = Math.min(1, norm[2] / 5); // potência
    const cor = norm[3] > 4 ? '#00ff88' : norm[3] > 3 ? '#00f2ff' : norm[3] > 2 ? '#ffaa00' : '#ff0044';
    pc.style.boxShadow = `0 0 ${20 + brilho*30}px ${cor}`;
    pc.style.borderColor = cor;
    pc.style.transform = `scale(${1 + brilho*0.05})`;
    pc.style.transition = 'all 0.6s ease';

    const vapor = document.getElementById('vapor') || (() => {
        const v = document.createElement('div');
        v.id = 'vapor';
        v.style.position = 'absolute';
        v.style.bottom = '5px';
        v.style.left = '50%';
        v.style.transform = 'translateX(-50%)';
        v.style.width = '20px';
        v.style.height = '30px';
        v.style.borderRadius = '50%';
        v.style.background = 'radial-gradient(circle, rgba(0,255,255,0.6), transparent)';
        v.style.opacity = '0';
        v.style.transition = 'opacity 0.6s';
        pc.appendChild(v);
        return v;
    })();
    vapor.style.opacity = norm[1] > 3 ? '1' : '0';
});

document.getElementById('resetar').addEventListener('click', ()=>{
    document.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
    document.querySelectorAll('.fill').forEach(f => f.style.width = '0');
    document.getElementById('precoTotal').innerText = 'Preço Total: R$ 0';

    const pc = document.querySelector('.pc-shape');
    pc.style.boxShadow = 'none';
    pc.style.borderColor = '#39d3ff';
    pc.style.transform = 'scale(1)';
});