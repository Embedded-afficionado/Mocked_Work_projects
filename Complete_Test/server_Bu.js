const express = require('express');
const xlsx = require('xlsx');
const path = require('path');
const app = express();
const port = 3000;

// Carregar a planilha (agora chamada "Pasta 3.xlsx")
const workbook = xlsx.readFile(path.join(__dirname, 'Planilha_teste_fab_01.xlsx'));
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Converter os dados da planilha para JSON
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

// Função para determinar a cor da luz com base nas condições
function determinarCor(valor) {
    if (valor === "Disponível" || valor == "Funcionan.") {
        return 'green';
    } else if (valor === "Indisponiv.") {
        return 'yellow';
    } else if (valor === "Falha") {
        return 'red';
    } else {
        return null;  // Para valores não reconhecidos
    }
}

// Função para processar a linha com o maior ID
function processarLinhaMaxId(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    // Processar todas as colunas da linha correspondente
    const lightsData = linha.slice(1).map(determinarCor).filter(cor => cor !== null);
    return lightsData;
}

// Endpoint para enviar os dados processados ao frontend
app.get('/lights', (req, res) => {
    const lightsData = processarLinhaMaxId(data);

    res.json(lightsData);
});

// Servir os arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '/Synaptical_Bu/Synaptical_Bu')));

// Servir o index.html na rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Synaptical_Bu/Factories', 'Factory_01.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
