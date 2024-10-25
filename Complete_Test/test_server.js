const express = require('express');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const app = express();
var request = require("request");
const crypto = require('crypto');
const port = 3000;
const { PDFDocument, rgb } = require('pdf-lib');
const cors = require('cors');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Link da planilha no SharePoint
var link = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=ERCGDW604NlGj6nFyQgAkjcBkAkGGTw8Jx8I-_WnGTwCrQ";
var link_2 = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=EYy1k2UYNZpDn1i5RNC_ZpUBRy0m9HOSG5_IzWFCPR7EOw";
var link_3 = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=EbOq-TW3ZehKkeiwnYr4V2cBzil9uV8UAbb7viuIMI43hQ"
var link_4 = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=EUlR93s37S5Nk6I8q46aRpsB4PoEIUuQFjO-fo1zUBbekQ"
var link_5 = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=Ec5LDuezyGZPi-Wx7kgmsLMBkmCpp7oGElaRp_PN7lVF3w"
var link_6 = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=ETxNajcooNBCiT-AQUlwisoBf7UFqXDqlDYwGSkwLWZx8w"
var link_7 = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=ETlXH54mCoFLhe_KNQNxwdYB4lF8CCD6qwJQyv-FC26QCw"

let lastDataHash = null;
 
// Função para determinar a cor baseada no valor
function determinarCor(valor) {
    if (valor === "Disponível" || valor == "Funcionan.") {
        return 'green';
    } else if (valor === "Falha") {
        return 'yellow';
    } else if (valor === "Indisponiv.") {
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
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(11, 25).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights");
    return lightsData;
}
function processarLinhaMaxId2(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(10, 30).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights2");
    return lightsData;
}
function processarLinhaMaxId3(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    //console.log(ids);
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    //console.log(maxId);
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    //console.log(linha);
    //console.log("NOVONOVONOVONOVONOVONOVONOVONOVONOVONOVONOVO")
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(11, 38).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights3");
    return lightsData;
}

function processarLinhaMaxId4(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    //console.log(ids);
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    //console.log(maxId);
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    //console.log(linha);
    //console.log("NOVONOVONOVONOVONOVONOVONOVONOVONOVONOVONOVO")
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(10, 16).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights4");
    return lightsData;
}

function processarLinhaMaxId5(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    //const teste = data.map(row => row[12]);
    //console.log(teste);
    //console.log(ids);
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    //console.log(maxId);
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    //console.log(linha);
    //console.log("NOVONOVONOVONOVONOVONOVONOVONOVONOVONOVONOVO")
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(12, 33).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights5");
    return lightsData;
}
function processarLinhaMaxId6(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    //const teste = data.map(row => row[12]);
    //console.log(teste);
    //console.log(ids);
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    //console.log(maxId);
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    //console.log(linha);
    //console.log("NOVONOVONOVONOVONOVONOVONOVONOVONOVONOVONOVO")
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(13, 56).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights6");
    return lightsData;
}
function processarLinhaMaxId7(data) {
    const ids = data.map(row => row[0]);  // Coluna de identificação (id)
    //const teste = data.map(row => row[12]);
    //console.log(teste);
    //console.log(ids);
    const maxId = Math.max(...ids.filter(ids => typeof ids === 'number'));  // Encontrar o maior valor de ID
    //console.log(maxId);
    const linha = data.find(row => row[0] === maxId);  // Encontrar a linha correspondente
    //console.log(linha);
    //console.log("NOVONOVONOVONOVONOVONOVONOVONOVONOVONOVONOVO")
    const ultimaData = linha[1];  // A data está na segunda coluna

    // Mapeie as cores e suas posições
    const lightsData = linha.slice(13, 47).map((valor, index) => {
        return {
            cor: determinarCor(valor),
            posicao: index // Posição baseada na ordem dos equipamentos
        };
    }).filter(luz => luz.cor !== null);

    //console.log(lightsData);
    //console.log(maxId);
    //console.log("Lights7");
    return lightsData;
}

function lerUltimaData(callback) {
    request({ url: link_2, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

            // Encontrar a data da linha com o maior ID
            const ids = data.map(row => row[0]);  // Coluna de identificação (ID)
            const maxId = Math.max(...ids.filter(id => typeof id === 'number'));  // Encontrar o maior valor de ID
            const linha = data.find(row => row[0] === maxId);  // Linha correspondente ao maior ID
            const excelDate = linha[1];  // Data no formato do Excel (segunda coluna)

            // Converter a data do Excel para um formato legível
            const dataLegivel = converterDataExcel(excelDate);

            callback(dataLegivel);  // Chamar o callback passando a data legível
        } catch (error) {
            console.error("Erro ao processar a planilha:", error);
        }
    });
}

function converterDataExcel(excelDate) {
    const epochDate = new Date(1899, 12, 30);  // Data de referência (Excel usa 30/12/1899)
    const daysSinceEpoch = Math.floor(excelDate);
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const date = new Date(epochDate.getTime() + daysSinceEpoch * millisecondsInDay);

    // Extrair horas e minutos da parte decimal da data
    const fractionalDay = excelDate - daysSinceEpoch;
    const totalSeconds = Math.round(fractionalDay * 24 * 60 * 60);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Acrescentar 1 ao dia e formatar a data no formato dd/mm/yyyy às xx:xx
    const dataFormatada = `${("0" + (date.getDate() + 1)).slice(-2)}/${("0" + (date.getMonth())).slice(-2)}/${date.getFullYear()} às ${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}`;

    return dataFormatada;
}

// Função para carregar e processar a planilha online
function carregarPlanilhaOnline(callback) {
    request({ url: link, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha:", err);
            return;
        }

        try {
            // Ler a planilha a partir do conteúdo baixado
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

            // Processar a linha com o maior ID sem notificação
            const lightsData = processarLinhaMaxId(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
            //console.log(ultimaData);
        } catch (error) {
            console.error("Erro ao processar a planilha_01:", error);
        }});
}
// Função para carregar a planilha da fábrica 02
function carregarPlanilhaOnline_2(callback) {
    request({ url: link_2, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha_02:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
            const lightsData = processarLinhaMaxId2(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
        } catch (error) {
            console.error("Erro ao processar a planilha_02:", error);
        }
    });
}

function carregarPlanilhaOnline_3(callback) {
    request({ url: link_3, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha_03:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
            const lightsData = processarLinhaMaxId3(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
        } catch (error) {
            console.error("Erro ao processar a planilha_03:", error);
        }
    });
}
function carregarPlanilhaOnline_4(callback) {
    request({ url: link_4, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha_04:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
            const lightsData = processarLinhaMaxId4(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
        } catch (error) {
            console.error("Erro ao processar a planilha_Fab_04:", error);
        }
    });
}

function carregarPlanilhaOnline_5(callback) {
    request({ url: link_5, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha_05:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
            const lightsData = processarLinhaMaxId5(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
        } catch (error) {
            console.error("Erro ao processar a planilha_Fab_05:", error);
        }
    });
}

function carregarPlanilhaOnline_6(callback) {
    request({ url: link_6, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha_06:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
            const lightsData = processarLinhaMaxId6(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
        } catch (error) {
            console.error("Erro ao processar a planilha_Fab_06:", error);
        }
    });
}

function carregarPlanilhaOnline_7(callback) {
    request({ url: link_7, encoding: null }, function (err, resp, body) {
        if (err) {
            console.error("Erro ao baixar a planilha_07:", err);
            return;
        }
        try {
            var workbook = xlsx.read(body, { type: "buffer" });
            var sheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[sheetName];
            var data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
            const lightsData = processarLinhaMaxId7(data);
            //const ultimaData = lerUltimaData(data);
            callback(lightsData);
        } catch (error) {
            console.error("Erro ao processar a planilha_Fab_07:", error);
        }
    });
}

function contarCoresDasLuzes(lightsData) {
    const contagem = {
        green: 0,
        yellow: 0,
        red: 0
    };
    //console.log(lightsData);
    lightsData.forEach(luz => {
        if (luz.cor === 'green') {
            contagem.green++;
        } else if (luz.cor === 'yellow') {
            contagem.yellow++;
        } else if (luz.cor === 'red') {
            contagem.red++;
        }
    });
    console.log(contagem);
    return contagem;
}
// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());


// Rotas para capturar os dados das luzes
app.get('/lights', (req, res) => {
    carregarPlanilhaOnline(function(lightsData) {
        res.json(lightsData);  // Enviar os dados das luzes como resposta JSON
    });
});
app.get('/chart-data', (req, res) => {
    carregarPlanilhaOnline(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});

app.get('/lights2', (req, res) => {
    carregarPlanilhaOnline_2(function (lightsData) {
        res.json(lightsData); // Enviar os dados das luzes da fábrica 02 como resposta JSON
    });
});
app.get('/chart-data_2', (req, res) => {
    carregarPlanilhaOnline_2(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});

app.get('/lights3', (req, res) => {
    carregarPlanilhaOnline_3(function (lightsData) {
        res.json(lightsData); // Enviar os dados das luzes da fábrica 03 como resposta JSON
    });
});
app.get('/chart-data_3', (req, res) => {
    carregarPlanilhaOnline_3(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});

app.get('/lights4', (req, res) => {
    carregarPlanilhaOnline_4(function (lightsData) {
        res.json(lightsData); // Enviar os dados das luzes da fábrica 04 como resposta JSON
    });
});
app.get('/chart-data_4', (req, res) => {
    carregarPlanilhaOnline_4(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});
app.get('/lights5', (req, res) => {
    carregarPlanilhaOnline_5(function (lightsData) {
        res.json(lightsData); // Enviar os dados das luzes da fábrica 05 como resposta JSON
    });
});
app.get('/chart-data_5', (req, res) => {
    carregarPlanilhaOnline_5(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});
app.get('/lights6', (req, res) => {
    carregarPlanilhaOnline_6(function (lightsData) {
        res.json(lightsData); // Enviar os dados das luzes da fábrica 06 como resposta JSON
    });
});
app.get('/chart-data_6', (req, res) => {
    carregarPlanilhaOnline_6(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});

app.get('/lights7', (req, res) => {
    carregarPlanilhaOnline_7(function (lightsData) {
        res.json(lightsData); // Enviar os dados das luzes da fábrica 07 como resposta JSON
    });
});
app.get('/chart-data_7', (req, res) => {
    carregarPlanilhaOnline_7(function(lightsData) {
        const contagemCores = contarCoresDasLuzes(lightsData);
        res.json(contagemCores);  // Enviar a contagem das cores como resposta JSON
    });
});
// Servir a página principal na rota '/'
/*
app.get('/carregarData', (req, res) => {
    carregarData(function (data) {
        res.json({ ultimaData: data });  // Envia a data como resposta em JSON
    });
});
*/
app.get('/ultima-data', (req, res) => {
    lerUltimaData((dataFormatada) => {
        res.json({ ultimaData: dataFormatada });
    });
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Grendene.html'));
}); 

// Iniciar o servidor
const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//const io = require('socket.io')(server);
// Rota para salvar os defeitos
app.post('/saveDefect', (req, res) => {
    const { name, defect } = req.body;

    if (!name || !defect) {
        return res.status(400).send('Nome do equipamento ou defeito não fornecido.');
    }

    // Pegar a data e hora atual
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');  // Janeiro é 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Formatar data e hora
    const dateTime = `${day}/${month}/${year} às ${hours}:${minutes}`;

    // Formatar a linha a ser adicionada
    const line = `Equipamento: ${name}, Comentário: ${defect} (Data: ${dateTime})\n`;

    // Definir o caminho do arquivo .txt
    const filePath = path.join(__dirname, 'defeitos.txt');

    // Adicionar a linha ao arquivo .txt
    fs.appendFile(filePath, line, (err) => {
        if (err) {
            console.error('Erro ao salvar o defeito:', err);
            return res.status(500).send('Erro ao salvar o defeito.');
        }

        res.send('Defeito salvo com sucesso!');
    });
});
const fileDirectory = __dirname;
app.use(express.static(fileDirectory));
app.get('/Complete_Test/defeitos.txt', (req, res) => {
    const filePath = path.join(fileDirectory, 'defeitos.txt');
    res.sendFile(filePath);
});
console.log('__dirname:', __dirname);
console.log(path.join(fileDirectory, 'defeitos.txt'));