/*
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights')
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer = document.querySelector('.image-container');
                //const imageContainer_2 = document.querySelector('.image-container-Fab02');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;
                let lightGreenPos = { top: 0, left: 0 };
                let lightYellowPos = { top: 0, left: 0 };
                let lightRedPos = { top: 0, left: 0 };

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);
                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    console.log("Tamanho da tela: ", width + "x" + height);
                    //186,467,350,619
                    const outerWidth = window.outerWidth;   // Inclui as barras do navegador
                    const outerHeight = window.outerHeight; // Inclui as barras do navegador

                    const innerWidth = window.innerWidth;   // Exclui as barras do navegador
                    const innerHeight = window.innerHeight; // Exclui as barras do navegador

                    const widthDiff = outerWidth - innerWidth;
                    const heightDiff = outerHeight - innerHeight;

                    console.log(`Diferença na largura (barras verticais): ${widthDiff}px`);
                    console.log(`Diferença na altura (barras horizontais): ${heightDiff}px`);

                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '74.0vh', left: '20.6vw' }, //S1-COMP-001
                                { top: '73.7vh', left: '30.0vw' }, //S1-COMP-002
                                { top: '74vh', left: '37.7vw' }, //S1-COMP-003
                                { top: '74vh', left: '46.5vw' }, //S1-COMP-004
                                { top: '65.5vh', left: '61.3vw' }, //S1-SECA-001
                                { top: '74.0vh', left: '73vw' }, //S1-SECA-002
                                { top: '41.2vh', left: '54.6vw' }, //S1-GERN-001
                                { top: '41.2vh', left: '60.6vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                            lightGreenPos = { top: '150vh', left: '80vw' }; // Exemplo de posição da luz verde
                            lightYellowPos = { top: '55vh', left: '30vw' }; // Exemplo de posição da luz amarela
                            lightRedPos = { top: '60vh', left: '35vw' }; // Exemplo de posição da luz vermelha
                        }
                        else {
                            positions = [

                                { top: '76.5vh', left: '21vw' }, //S1-COMP-001
                                { top: '76.5vh', left: '30.5vw' }, //S1-COMP-002
                                { top: '76.5vh', left: '38vw' }, //S1-COMP-003
                                { top: '76.5vh', left: '46.5vw' }, //S1-COMP-004
                                { top: '68vh', left: '61.3vw' }, //S1-SECA-001
                                { top: '77vh', left: '72.8vw' }, //S1-SECA-002
                                { top: '43vh', left: '54.6vw' }, //S1-GERN-001
                                { top: '43vh', left: '60.7vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                    };
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '75.5vh', left: '16.3vw' }, //S1-COMP-001
                                { top: '75.1vh', left: '28vw' }, //S1-COMP-002
                                { top: '75.5vh', left: '36.5vw' }, //S1-COMP-003
                                { top: '75.5vh', left: '46.5vw' }, //S1-COMP-004
                                { top: '67.9vh', left: '63vw' }, //S1-SECA-001
                                { top: '76.5vh', left: '76.3vw' }, //S1-SECA-002
                                { top: '43vh', left: '55.2vw' }, //S1-GERN-001
                                { top: '43vh', left: '62.2vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                        else {
                            positions = [

                                { top: '73.8vh', left: '16.6vw' }, //S1-COMP-001
                                { top: '73.5vh', left: '28vw' }, //S1-COMP-002
                                { top: '73.8vh', left: '36.3vw' }, //S1-COMP-003
                                { top: '73.8vh', left: '46.2vw' }, //S1-COMP-004
                                { top: '65.0vh', left: '63vw' }, //S1-SECA-001
                                { top: '74vh', left: '76.2vw' }, //S1-SECA-002
                                { top: '38.7vh', left: '55.3vw' }, //S1-GERN-001
                                { top: '38.7vh', left: '62.1vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                    };
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '77.5vh', left: '18.0vw' }, //S1-COMP-001
                                { top: '77.5vh', left: '28vw' }, //S1-COMP-002
                                { top: '77.5vh', left: '36.5vw' }, //S1-COMP-003
                                { top: '77.5vh', left: '46.5vw' }, //S1-COMP-004
                                { top: '69vh', left: '62vw' }, //S1-SECA-001
                                { top: '77.5vh', left: '74.5vw' }, //S1-SECA-002
                                { top: '41vh', left: '54.8vw' }, //S1-GERN-001
                                { top: '41vh', left: '61.3vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                        else {
                            positions = [

                                { top: '78.5vh', left: '19.6vw' }, //S1-COMP-001
                                { top: '78.5vh', left: '30vw' }, //S1-COMP-002
                                { top: '78.5vh', left: '37.3vw' }, //S1-COMP-003
                                { top: '78.5vh', left: '46.5vw' }, //S1-COMP-004
                                { top: '69vh', left: '61.5vw' }, //S1-SECA-001
                                { top: '79vh', left: '73.3vw' }, //S1-SECA-002
                                { top: '41.5vh', left: '54.5vw' }, //S1-GERN-001
                                { top: '41.5vh', left: '60.8vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                    };
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '77vh', left: '15vw' }, //S1-COMP-001
                                { top: '77vh', left: '26.5vw' }, //S1-COMP-002
                                { top: '77vh', left: '36vw' }, //S1-COMP-003
                                { top: '77vh', left: '46.0vw' }, //S1-COMP-004
                                { top: '68vh', left: '63.3vw' }, //S1-SECA-001
                                { top: '78vh', left: '77.2vw' }, //S1-SECA-002
                                { top: '41vh', left: '55.3vw' }, //S1-GERN-001
                                { top: '41vh', left: '62.6vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                        else {
                            positions = [

                                { top: '77.9vh', left: '16.6vw' }, //S1-COMP-001
                                { top: '77.9vh', left: '27.4vw' }, //S1-COMP-002
                                { top: '77.9vh', left: '36.1vw' }, //S1-COMP-003
                                { top: '77.9vh', left: '46vw' }, //S1-COMP-004
                                { top: '69.2vh', left: '62.7vw' }, //S1-SECA-001
                                { top: '78vh', left: '75.8vw' }, //S1-SECA-002
                                { top: '41.5vh', left: '55vw' }, //S1-GERN-001
                                { top: '41.5vh', left: '61.9vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                    };
                    //1400x1050
                    if ((width > 1390 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '77.5vh', left: '10.0vw' }, //S1-COMP-001
                                { top: '77.5vh', left: '23.6vw' }, //S1-COMP-002
                                { top: '77.5vh', left: '33.5vw' }, //S1-COMP-003
                                { top: '77.5vh', left: '46.0vw' }, //S1-COMP-004
                                { top: '70vh', left: '65.5vw' }, //S1-SECA-001
                                { top: '77.5vh', left: '81.6vw' }, //S1-SECA-002
                                { top: '44.5vh', left: '56.5vw' }, //S1-GERN-001
                                { top: '44.5vh', left: '64.7vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                        else {
                            positions = [

                                { top: '74.0vh', left: '10.2vw' }, //S1-COMP-001
                                { top: '73.8vh', left: '23.6vw' }, //S1-COMP-002
                                { top: '74vh', left: '34vw' }, //S1-COMP-003
                                { top: '74vh', left: '46vw' }, //S1-COMP-004
                                { top: '65vh', left: '65.5vw' }, //S1-SECA-001
                                { top: '74vh', left: '81.5vw' }, //S1-SECA-002
                                { top: '38.6vh', left: '56.5vw' }, //S1-GERN-001
                                { top: '38.6vh', left: '64.7vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                    };
                    //1366x768
                    if ((width > 1270 && width <= 1390)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '80vh', left: '18.5vw' }, //S1-COMP-001
                                { top: '80vh', left: '28.6vw' }, //S1-COMP-002
                                { top: '80vh', left: '36.5vw' }, //S1-COMP-003
                                { top: '80vh', left: '46.0vw' }, //S1-COMP-004
                                { top: '71vh', left: '61.2vw' }, //S1-SECA-001
                                { top: '81vh', left: '73.3vw' }, //S1-SECA-002
                                { top: '44vh', left: '54.1vw' }, //S1-GERN-001
                                { top: '44vh', left: '60.4vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                        else {
                            positions = [

                                { top: '80.5vh', left: '21vw' }, //S1-COMP-001
                                { top: '80.5vh', left: '30vw' }, //S1-COMP-002
                                { top: '80.5vh', left: '38vw' }, //S1-COMP-003
                                { top: '80.5vh', left: '47vw' }, //S1-COMP-004
                                { top: '72vh', left: '61vw' }, //S1-SECA-001
                                { top: '81.2vh', left: '72.4vw' }, //S1-SECA-002
                                { top: '45vh', left: '54.4vw' }, //S1-GERN-001
                                { top: '45vh', left: '60.3vw' }, //S1-GERN-002
                                //O RESTO A PLANILHA NÃO ALIMENTA
                            ]
                        }
                    };
                    //1360x768
                    lightDiv.style.top = positions[luz.posicao].top;
                    lightDiv.style.left = positions[luz.posicao].left;
                    imageContainer.appendChild(lightDiv);
                    //imageContainer_2.appendChild(lightDiv);
                });
            });
    }
    catch (error) {
        console.error('Erro ao manipular a navbar:', error);
    }
});
*/
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights2')  // Novo endpoint para a fábrica 02
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer_2 = document.querySelector('.image-container-Fab02');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);

                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;

                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '60.5vh', left: '84.8vw' }, //S2-COMP-004
                                { top: '55vh', left: '14.8vw' }, //S2-TORR-001
                                { top: '55vh', left: '26vw' },   //S2-TORR-002
                                { top: '72.6vh', left: '23vw' },   //S2-BACC-001
                                { top: '72.7vh', left: '26.8vw' }, //S2-BACC-002
                                { top: '72.4vh', left: '13vw' },   //S2-BACI-001
                                { top: '72.4vh', left: '17.1vw' }, //S2-BACI-002
                                { top: '55.6vh', left: '52.5vw' }, //S2-CHIL-001
                                { top: '46vh', left: '33.3vw' }, //S2-BAGC-001
                                { top: '54vh', left: '33.3vw' }, //S2-BAGC-002
                                { top: '63vh', left: '44.7vw' }, //S2-BAGI-001
                                { top: '56.5vh', left: '44.7vw' }, //S2-BAGI-002
                                { top: '50vh', left: '44.7vw' }, //S2-BAGF-002
                                { top: '44vh', left: '44.7vw' }, //S2-BAGF-001
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '60.5vh', left: '84.8vw' }, //S2-COMP-004
                                { top: '55vh', left: '14.8vw' }, //S2-TORR-001
                                { top: '55vh', left: '26vw' },   //S2-TORR-002
                                { top: '72.6vh', left: '23vw' },   //S2-BACC-001
                                { top: '72.7vh', left: '26.8vw' }, //S2-BACC-002
                                { top: '72.4vh', left: '13vw' },   //S2-BACI-001
                                { top: '72.4vh', left: '17.1vw' }, //S2-BACI-002
                                { top: '55.6vh', left: '52.5vw' }, //S2-CHIL-001
                                { top: '46vh', left: '33.3vw' }, //S2-BAGC-001
                                { top: '54vh', left: '33.3vw' }, //S2-BAGC-002
                                { top: '63vh', left: '44.7vw' }, //S2-BAGI-001
                                { top: '56.5vh', left: '44.7vw' }, //S2-BAGI-002
                                { top: '50vh', left: '44.7vw' }, //S2-BAGF-002
                                { top: '44vh', left: '44.7vw' }, //S2-BAGF-001
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '60.5vh', left: '90vw' }, //S2-COMP-004
                                { top: '55vh', left: '10vw' }, //S2-TORR-001
                                { top: '55vh', left: '22.5vw' },   //S2-TORR-002
                                { top: '72.6vh', left: '19vw' },   //S2-BACC-001
                                { top: '72.7vh', left: '23.4vw' }, //S2-BACC-002
                                { top: '72.4vh', left: '7.6vw' },   //S2-BACI-001
                                { top: '72.4vh', left: '12.4vw' }, //S2-BACI-002
                                { top: '55.6vh', left: '53vw' }, //S2-CHIL-001
                                { top: '46vh', left: '31.2vw' }, //S2-BAGC-001
                                { top: '54vh', left: '31.2vw' }, //S2-BAGC-002
                                { top: '63vh', left: '44vw' }, //S2-BAGI-001
                                { top: '56.5vh', left: '44vw' }, //S2-BAGI-002
                                { top: '50vh', left: '44vw' }, //S2-BAGF-002
                                { top: '44vh', left: '44vw' }, //S2-BAGF-001
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '60.5vh', left: '89vw' }, //S2-COMP-004
                                { top: '55vh', left: '10vw' }, //S2-TORR-001
                                { top: '55vh', left: '22.5vw' },   //S2-TORR-002
                                { top: '73vh', left: '19.5vw' },   //S2-BACC-001
                                { top: '73vh', left: '23.9vw' }, //S2-BACC-002
                                { top: '73vh', left: '7.8vw' },   //S2-BACI-001
                                { top: '73vh', left: '12.8vw' }, //S2-BACI-002
                                { top: '55.6vh', left: '53vw' }, //S2-CHIL-001
                                { top: '46vh', left: '31.2vw' }, //S2-BAGC-001
                                { top: '54vh', left: '31.2vw' }, //S2-BAGC-002
                                { top: '63vh', left: '44vw' }, //S2-BAGI-001
                                { top: '56.5vh', left: '44vw' }, //S2-BAGI-002
                                { top: '50vh', left: '44vw' }, //S2-BAGF-002
                                { top: '44vh', left: '44vw' }, //S2-BAGF-001
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '62.5vh', left: '91.5vw' }, //S2-COMP-004
                                { top: '56vh', left: '7.8vw' }, //S2-TORR-001
                                { top: '56vh', left: '21vw' },   //S2-TORR-002
                                { top: '77vh', left: '17.8vw' },   //S2-BACC-001
                                { top: '77vh', left: '22.1vw' }, //S2-BACC-002
                                { top: '77vh', left: '5.5vw' },   //S2-BACI-001
                                { top: '77vh', left: '10.5vw' }, //S2-BACI-002
                                { top: '56.2vh', left: '53.2vw' }, //S2-CHIL-001
                                { top: '45.6vh', left: '30vw' }, //S2-BAGC-001
                                { top: '55vh', left: '30vw' }, //S2-BAGC-002
                                { top: '66vh', left: '44vw' }, //S2-BAGI-001
                                { top: '58vh', left: '44vw' }, //S2-BAGI-002
                                { top: '50vh', left: '44vw' }, //S2-BAGF-002
                                { top: '43vh', left: '44vw' }, //S2-BAGF-001
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '63vh', left: '91.6vw' }, //S2-COMP-004
                                { top: '56vh', left: '7.8vw' }, //S2-TORR-001
                                { top: '56vh', left: '21vw' },   //S2-TORR-002
                                { top: '77vh', left: '17.8vw' },   //S2-BACC-001
                                { top: '77vh', left: '22.1vw' }, //S2-BACC-002
                                { top: '77vh', left: '5.5vw' },   //S2-BACI-001
                                { top: '77vh', left: '10.5vw' }, //S2-BACI-002
                                { top: '56.2vh', left: '53.2vw' }, //S2-CHIL-001
                                { top: '45.2vh', left: '30vw' }, //S2-BAGC-001
                                { top: '54.7vh', left: '30vw' }, //S2-BAGC-002
                                { top: '66vh', left: '44vw' }, //S2-BAGI-001
                                { top: '58vh', left: '44vw' }, //S2-BAGI-002
                                { top: '50vh', left: '44vw' }, //S2-BAGF-002
                                { top: '42.6vh', left: '44vw' }, //S2-BAGF-001
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '60.5vh', left: '85vw' }, //S2-COMP-004
                                { top: '55vh', left: '14.5vw' }, //S2-TORR-001
                                { top: '55vh', left: '25.5vw' },   //S2-TORR-002
                                { top: '71vh', left: '26.5vw' },   //S2-BACC-001
                                { top: '71vh', left: '23vw' }, //S2-BACC-002
                                { top: '71vh', left: '16.5vw' },   //S2-BACI-002
                                { top: '71vh', left: '12.4vw' }, //S2-BACI-001
                                { top: '55.6vh', left: '53vw' }, //S2-CHIL-001
                                { top: '47.6vh', left: '33.2vw' }, //S2-BAGC-001
                                { top: '54.6vh', left: '33.2vw' }, //S2-BAGC-002
                                { top: '62.8vh', left: '44.5vw' }, //S2-BAGI-001
                                { top: '56.7vh', left: '44.5vw' }, //S2-BAGI-002
                                { top: '51vh', left: '44.5vw' }, //S2-BAGF-002
                                { top: '45vh', left: '44.5vw' }, //S2-BAGF-001
                            ]
                        }
                        else {
                            positions = [

                                { top: '60.5vh', left: '85vw' }, //S2-COMP-004
                                { top: '55vh', left: '14.5vw' }, //S2-TORR-001
                                { top: '55vh', left: '25.5vw' },   //S2-TORR-002
                                { top: '71vh', left: '26.5vw' },   //S2-BACC-001
                                { top: '71vh', left: '23vw' }, //S2-BACC-002
                                { top: '71vh', left: '16.5vw' },   //S2-BACI-002
                                { top: '71vh', left: '12.4vw' }, //S2-BACI-001
                                { top: '55.6vh', left: '53vw' }, //S2-CHIL-001
                                { top: '47.6vh', left: '33.2vw' }, //S2-BAGC-001
                                { top: '54.6vh', left: '33.2vw' }, //S2-BAGC-002
                                { top: '62.8vh', left: '44.5vw' }, //S2-BAGI-001
                                { top: '56.7vh', left: '44.5vw' }, //S2-BAGI-002
                                { top: '51vh', left: '44.5vw' }, //S2-BAGF-002
                                { top: '45vh', left: '44.5vw' }, //S2-BAGF-001
                            ]
                        }
                    };
                     //1400x1050
                     if ((width > 1380 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '60vh', left: '83.8vw' }, //S2-COMP-004
                                { top: '56.5vh', left: '14vw' }, //S2-TORR-001
                                { top: '56.5vh', left: '25vw' },   //S2-TORR-002
                                { top: '69.6vh', left: '26.2vw' },   //S2-BACC-002
                                { top: '69.6vh', left: '23vw' }, //S2-BACC-001
                                { top: '68vh', left: '16.5vw' },   //S2-BACI-002
                                { top: '68vh', left: '12.4vw' }, //S2-BACI-001
                                { top: '55.8vh', left: '52vw' }, //S2-CHIL-001
                                { top: '49vh', left: '33vw' }, //S2-BAGC-001
                                { top: '56vh', left: '33vw' }, //S2-BAGC-002
                                { top: '63vh', left: '44vw' }, //S2-BAGI-001
                                { top: '56.5vh', left: '44vw' }, //S2-BAGI-002
                                { top: '52vh', left: '44vw' }, //S2-BAGF-002
                                { top: '48vh', left: '44vw' }, //S2-BAGF-001
                            ]
                        }
                        else {
                            positions = [

                                { top: '58.5vh', left: '84.5vw' }, //S2-COMP-004
                                { top: '55vh', left: '14.5vw' }, //S2-TORR-001
                                { top: '55vh', left: '25.5vw' },   //S2-TORR-002
                                { top: '68vh', left: '26.5vw' },   //S2-BACC-001
                                { top: '68vh', left: '23vw' }, //S2-BACC-002
                                { top: '68vh', left: '16.5vw' },   //S2-BACI-002
                                { top: '68vh', left: '12.4vw' }, //S2-BACI-001
                                { top: '55.6vh', left: '53vw' }, //S2-CHIL-001
                                { top: '47vh', left: '33vw' }, //S2-BAGC-001
                                { top: '53.5vh', left: '33vw' }, //S2-BAGC-002
                                { top: '60.5vh', left: '44vw' }, //S2-BAGI-001
                                { top: '55.5vh', left: '44vw' }, //S2-BAGI-002
                                { top: '51vh', left: '44vw' }, //S2-BAGF-002
                                { top: '45.5vh', left: '44vw' }, //S2-BAGF-001
                            ]
                        }
                    };
                     //1366x768
                     if ((width > 1270 && width <= 1379)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '62vh', left: '84.6vw' }, //S2-COMP-004
                                { top: '57vh', left: '14.5vw' }, //S2-TORR-001
                                { top: '57vh', left: '25.5vw' },   //S2-TORR-002
                                { top: '75.5vh', left: '26.6vw' },   //S2-BACC-002
                                { top: '75.5vh', left: '23vw' }, //S2-BACC-001
                                { top: '75.5vh', left: '16.5vw' },   //S2-BACI-002
                                { top: '75.5vh', left: '12.4vw' }, //S2-BACI-001
                                { top: '58vh', left: '52.5vw' }, //S2-CHIL-001
                                { top: '47vh', left: '33vw' }, //S2-BAGC-001
                                { top: '56vh', left: '33vw' }, //S2-BAGC-002
                                { top: '65vh', left: '44.6vw' }, //S2-BAGI-001
                                { top: '58vh', left: '44.6vw' }, //S2-BAGI-002
                                { top: '52vh', left: '44.6vw' }, //S2-BAGF-002
                                { top: '45vh', left: '44.6vw' }, //S2-BAGF-001
                            ]
                        }
                        else {
                            positions = [

                                { top: '62vh', left: '84.6vw' }, //S2-COMP-004
                                { top: '57vh', left: '14.5vw' }, //S2-TORR-001
                                { top: '57vh', left: '25.5vw' },   //S2-TORR-002
                                { top: '75.5vh', left: '26.6vw' },   //S2-BACC-002
                                { top: '75.5vh', left: '23vw' }, //S2-BACC-001
                                { top: '75.5vh', left: '16.5vw' },   //S2-BACI-002
                                { top: '75.5vh', left: '12.4vw' }, //S2-BACI-001
                                { top: '58vh', left: '52.5vw' }, //S2-CHIL-001
                                { top: '47vh', left: '33vw' }, //S2-BAGC-001
                                { top: '56vh', left: '33vw' }, //S2-BAGC-002
                                { top: '65vh', left: '44.6vw' }, //S2-BAGI-001
                                { top: '58vh', left: '44.6vw' }, //S2-BAGI-002
                                { top: '52vh', left: '44.6vw' }, //S2-BAGF-002
                                { top: '45vh', left: '44.6vw' }, //S2-BAGF-001
                            ]
                        }
                    };
                    lightDiv.style.top = positions[luz.posicao].top;
                    lightDiv.style.left = positions[luz.posicao].left;
                    imageContainer_2.appendChild(lightDiv);
                });
            });
    } catch (error) {
        console.error("Erro ao carregar os dados de luzes:", error);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights3')  // Novo endpoint para a fábrica 03
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer_2 = document.querySelector('.image-container-fab03a ');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);

                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;

                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '24vh', left: '92.5vw' }, //S3-COMP-001
                                { top: '58vh', left: '82.8vw' },  //S3-COMP-002
                                { top: '58vh', left: '91.8vw' },  //S3-COMP-003
                                { top: '39vh', left: '83vw' },   //S3-COMP-005
                                { top: '42vh', left: '91.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '11vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '7.3vw' }, //S3-TORR-001
                                { top: '82vh', left: '16.2vw' }, //S3-TORR-002
                                { top: '82vh', left: '25.3vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.5vw' }, //S3-TORR-004
                                { top: '82vh', left: '60.2vw' }, //S3-TORR-005
                                { top: '82vh', left: '69.6vw' }, //S3-TORR-006
                                { top: '82vh', left: '80.5vw' }, //S3-TORR-007
                                { top: '82vh', left: '90vw' }, //S3-TORR-008
                                { top: '60vh', left: '28vw' }, //S3-BACC-011
                                { top: '60vh', left: '34vw' }, //S3-BACC-012
                                { top: '60vh', left: '55.8vw' }, //S3-BACI-003
                                { top: '60vh', left: '60.4vw' }, //S3-BACI-004
                                { top: '31vh', left: '30.4vw' }, //S3-CHIL-006
                                { top: '20.6vh', left: '58vw' }, //S3-BAGC-001
                                { top: '29vh', left: '58vw' }, //S3-BAGC-002
                                { top: '46.7vh', left: '73.5vw' }, //S3-BAGI-001
                                { top: '52.5vh', left: '73.5vw' }, //S3-BAGI-002
                                { top: '40.3vh', left: '73.5vw' }, //S3-BAGP-001
                                { top: '34vh', left: '73.5vw' }, //S3-BAGP-002
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        ]} else {
                            positions = [

                                { top: '24vh', left: '92.5vw' }, //S3-COMP-001
                                { top: '58vh', left: '82.8vw' },  //S3-COMP-002
                                { top: '58vh', left: '91.8vw' },  //S3-COMP-003
                                { top: '39vh', left: '83vw' },   //S3-COMP-005
                                { top: '42vh', left: '91.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '11vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '7.3vw' }, //S3-TORR-001
                                { top: '82vh', left: '16.2vw' }, //S3-TORR-002
                                { top: '82vh', left: '25.3vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.5vw' }, //S3-TORR-004
                                { top: '82vh', left: '60.2vw' }, //S3-TORR-005
                                { top: '82vh', left: '69.6vw' }, //S3-TORR-006
                                { top: '82vh', left: '80.5vw' }, //S3-TORR-007
                                { top: '82vh', left: '90vw' }, //S3-TORR-008
                                { top: '60vh', left: '28vw' }, //S3-BACC-011
                                { top: '60vh', left: '34vw' }, //S3-BACC-012
                                { top: '60vh', left: '55.8vw' }, //S3-BACI-003
                                { top: '60vh', left: '60.4vw' }, //S3-BACI-004
                                { top: '31vh', left: '30.4vw' }, //S3-CHIL-006
                                { top: '20.6vh', left: '58vw' }, //S3-BAGC-001
                                { top: '29vh', left: '58vw' }, //S3-BAGC-002
                                { top: '46.7vh', left: '73.5vw' }, //S3-BAGI-001
                                { top: '52.5vh', left: '73.5vw' }, //S3-BAGI-002
                                { top: '40.3vh', left: '73.5vw' }, //S3-BAGP-001
                                { top: '34vh', left: '73.5vw' }, //S3-BAGP-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '26vh', left: '93.4vw' }, //S3-COMP-001
                                { top: '58vh', left: '83.6vw' },  //S3-COMP-002
                                { top: '58vh', left: '92.8vw' },  //S3-COMP-003
                                { top: '41vh', left: '84vw' },   //S3-COMP-005
                                { top: '42.5vh', left: '92.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '10vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '80vh', left: '6vw' }, //S3-TORR-001
                                { top: '80vh', left: '15vw' }, //S3-TORR-002
                                { top: '80vh', left: '24.5vw' }, //S3-TORR-003
                                { top: '80vh', left: '50.4vw' }, //S3-TORR-004
                                { top: '80vh', left: '60.2vw' }, //S3-TORR-005
                                { top: '80vh', left: '70vw' }, //S3-TORR-006
                                { top: '80vh', left: '81vw' }, //S3-TORR-007
                                { top: '80vh', left: '91vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '27.4vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '34vw' }, //S3-BACC-012
                                { top: '60vh', left: '55.8vw' }, //S3-BACI-003
                                { top: '60vh', left: '60.4vw' }, //S3-BACI-004
                                { top: '32.3vh', left: '29.8vw' }, //S3-CHIL-006
                                { top: '22.3vh', left: '58vw' }, //S3-BAGC-001
                                { top: '30vh', left: '58vw' }, //S3-BAGC-002
                                { top: '46.7vh', left: '73.5vw' }, //S3-BAGI-001
                                { top: '52.5vh', left: '73.5vw' }, //S3-BAGI-002
                                { top: '41vh', left: '73.5vw' }, //S3-BAGP-001
                                { top: '35vh', left: '73.5vw' }, //S3-BAGP-002
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [
                                { top: '26vh', left: '93.4vw' }, //S3-COMP-001
                                { top: '58vh', left: '83.6vw' },  //S3-COMP-002
                                { top: '58vh', left: '92.8vw' },  //S3-COMP-003
                                { top: '41vh', left: '84vw' },   //S3-COMP-005
                                { top: '42.5vh', left: '92.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '10vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '6vw' }, //S3-TORR-001
                                { top: '82vh', left: '15vw' }, //S3-TORR-002
                                { top: '82vh', left: '24.5vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.4vw' }, //S3-TORR-004
                                { top: '82vh', left: '60.2vw' }, //S3-TORR-005
                                { top: '82vh', left: '70vw' }, //S3-TORR-006
                                { top: '82vh', left: '81vw' }, //S3-TORR-007
                                { top: '82vh', left: '91vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '27.4vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '34vw' }, //S3-BACC-012
                                { top: '60vh', left: '55.8vw' }, //S3-BACI-003
                                { top: '60vh', left: '60.4vw' }, //S3-BACI-004
                                { top: '32.3vh', left: '29.8vw' }, //S3-CHIL-006
                                { top: '22.3vh', left: '58vw' }, //S3-BAGC-001
                                { top: '30vh', left: '58vw' }, //S3-BAGC-002
                                { top: '46.7vh', left: '73.5vw' }, //S3-BAGI-001
                                { top: '52.5vh', left: '73.5vw' }, //S3-BAGI-002
                                { top: '41vh', left: '73.5vw' }, //S3-BAGP-001
                                { top: '35vh', left: '73.5vw' }, //S3-BAGP-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '25.8vh', left: '90.2vw' }, //S3-COMP-001
                                { top: '58vh', left: '81vw' },  //S3-COMP-002
                                { top: '58vh', left: '89.7vw' },  //S3-COMP-003
                                { top: '41vh', left: '81.6vw' },   //S3-COMP-005
                                { top: '42.5vh', left: '89.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '12.7vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '9vw' }, //S3-TORR-001
                                { top: '82vh', left: '17.3vw' }, //S3-TORR-002
                                { top: '82vh', left: '26vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '82vh', left: '59.8vw' }, //S3-TORR-005
                                { top: '82vh', left: '68.7vw' }, //S3-TORR-006
                                { top: '82vh', left: '79vw' }, //S3-TORR-007
                                { top: '82vh', left: '88vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '28.6vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '34.5vw' }, //S3-BACC-012
                                { top: '60vh', left: '55vw' }, //S3-BACI-003
                                { top: '60vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '32.3vh', left: '31vw' }, //S3-CHIL-006
                                { top: '22.3vh', left: '58vw' }, //S3-BAGC-001
                                { top: '30vh', left: '58vw' }, //S3-BAGC-002
                                { top: '46.7vh', left: '72vw' }, //S3-BAGI-001
                                { top: '52.5vh', left: '72vw' }, //S3-BAGI-002
                                { top: '41vh', left: '72vw' }, //S3-BAGP-001
                                { top: '35vh', left: '72vw' }, //S3-BAGP-002
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [
                                { top: '25.8vh', left: '88.2vw' }, //S3-COMP-001
                                { top: '58vh', left: '79.5vw' },  //S3-COMP-002
                                { top: '58vh', left: '87.7vw' },  //S3-COMP-003
                                { top: '41vh', left: '79.6vw' },   //S3-COMP-005
                                { top: '42.5vh', left: '87.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '14.7vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '11vw' }, //S3-TORR-001
                                { top: '82vh', left: '19.3vw' }, //S3-TORR-002
                                { top: '82vh', left: '27.5vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '82vh', left: '59vw' }, //S3-TORR-005
                                { top: '82vh', left: '68vw' }, //S3-TORR-006
                                { top: '82vh', left: '77vw' }, //S3-TORR-007
                                { top: '82vh', left: '86vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '29.6vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '35.5vw' }, //S3-BACC-012
                                { top: '60vh', left: '55vw' }, //S3-BACI-003
                                { top: '60vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '32.3vh', left: '32vw' }, //S3-CHIL-006
                                { top: '22.3vh', left: '57vw' }, //S3-BAGC-001
                                { top: '30vh', left: '57vw' }, //S3-BAGC-002
                                { top: '46.7vh', left: '71vw' }, //S3-BAGI-001
                                { top: '52.5vh', left: '71vw' }, //S3-BAGI-002
                                { top: '41vh', left: '71vw' }, //S3-BAGP-001
                                { top: '35vh', left: '71vw' }, //S3-BAGP-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '25.8vh', left: '93.2vw' }, //S3-COMP-001
                                { top: '58vh', left: '83.6vw' },  //S3-COMP-002
                                { top: '58vh', left: '92.7vw' },  //S3-COMP-003
                                { top: '41vh', left: '84vw' },   //S3-COMP-005
                                { top: '42.5vh', left: '92.8vw'},  //S3-COMP-006
                                { top: '54vh', left: '10vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '6vw' }, //S3-TORR-001
                                { top: '82vh', left: '15vw' }, //S3-TORR-002
                                { top: '82vh', left: '24.4vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '82vh', left: '59.8vw' }, //S3-TORR-005
                                { top: '82vh', left: '70vw' }, //S3-TORR-006
                                { top: '82vh', left: '81vw' }, //S3-TORR-007
                                { top: '82vh', left: '90.5vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '27.7vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '33.7vw' }, //S3-BACC-012
                                { top: '60vh', left: '55vw' }, //S3-BACI-003
                                { top: '60vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '32.5vh', left: '30vw' }, //S3-CHIL-006
                                { top: '22.3vh', left: '58vw' }, //S3-BAGC-001
                                { top: '30vh', left: '58vw' }, //S3-BAGC-002
                                { top: '47.5vh', left: '74vw' }, //S3-BAGI-001
                                { top: '52.9vh', left: '74vw' }, //S3-BAGI-002
                                { top: '41.4vh', left: '74vw' }, //S3-BAGP-001
                                { top: '35.4vh', left: '74vw' }, //S3-BAGP-002
                            ]
                        }
                        else {
                            positions = [
                                { top: '25.4vh', left: '92.4vw' }, //S3-COMP-001
                                { top: '58vh', left: '82.8vw' },  //S3-COMP-002
                                { top: '58vh', left: '92vw' },  //S3-COMP-003
                                { top: '41vh', left: '82.7vw' },   //S3-COMP-005
                                { top: '42.5vh', left: '92vw'},  //S3-COMP-006
                                { top: '54vh', left: '10vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '82vh', left: '6vw' }, //S3-TORR-001
                                { top: '82vh', left: '15vw' }, //S3-TORR-002
                                { top: '82vh', left: '24.4vw' }, //S3-TORR-003
                                { top: '82vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '82vh', left: '59.8vw' }, //S3-TORR-005
                                { top: '82vh', left: '70vw' }, //S3-TORR-006
                                { top: '82vh', left: '81vw' }, //S3-TORR-007
                                { top: '82vh', left: '90.5vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '27.7vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '33.7vw' }, //S3-BACC-012
                                { top: '60vh', left: '55vw' }, //S3-BACI-003
                                { top: '60vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '32.5vh', left: '30vw' }, //S3-CHIL-006
                                { top: '22.3vh', left: '58vw' }, //S3-BAGC-001
                                { top: '30vh', left: '58vw' }, //S3-BAGC-002
                                { top: '47.5vh', left: '74vw' }, //S3-BAGI-001
                                { top: '52.9vh', left: '74vw' }, //S3-BAGI-002
                                { top: '41.4vh', left: '74vw' }, //S3-BAGP-001
                                { top: '35.4vh', left: '74vw' }, //S3-BAGP-002
                            ]
                        }
                    };
                     //1400x1050
                     if ((width > 1380 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '33vh', left: '92vw' }, //S3-COMP-001
                                { top: '58.3vh', left: '82.5vw' },  //S3-COMP-002
                                { top: '58.3vh', left: '91.6vw' },  //S3-COMP-003
                                { top: '44vh', left: '82.5vw' },   //S3-COMP-005
                                { top: '46vh', left: '91.6vw'},  //S3-COMP-006
                                { top: '55vh', left: '9.5vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '77vh', left: '6vw' }, //S3-TORR-001
                                { top: '77vh', left: '15vw' }, //S3-TORR-002
                                { top: '77vh', left: '24.4vw' }, //S3-TORR-003
                                { top: '77vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '77vh', left: '59.8vw' }, //S3-TORR-005
                                { top: '77vh', left: '70vw' }, //S3-TORR-006
                                { top: '77vh', left: '80vw' }, //S3-TORR-007
                                { top: '77vh', left: '90vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '27.7vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '33.7vw' }, //S3-BACC-012
                                { top: '60vh', left: '55vw' }, //S3-BACI-003
                                { top: '60vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '38vh', left: '29.3vw' }, //S3-CHIL-006
                                { top: '30vh', left: '57.5vw' }, //S3-BAGC-001
                                { top: '36vh', left: '57.5vw' }, //S3-BAGC-002
                                { top: '50vh', left: '73vw' }, //S3-BAGI-001
                                { top: '55vh', left: '73vw' }, //S3-BAGI-002
                                { top: '45vh', left: '73vw' }, //S3-BAGP-001
                                { top: '40vh', left: '73vw' }, //S3-BAGP-002
                            ]
                        }
                        else {
                            positions = [

                                { top: '30vh', left: '93vw' }, //S3-COMP-001
                                { top: '56.8vh', left: '83.5vw' },  //S3-COMP-002
                                { top: '56.8vh', left: '92.6vw' },  //S3-COMP-003
                                { top: '42vh', left: '83.5vw' },   //S3-COMP-005
                                { top: '44vh', left: '92.6vw'},  //S3-COMP-006
                                { top: '55vh', left: '9.5vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '77vh', left: '6vw' }, //S3-TORR-001
                                { top: '77vh', left: '15vw' }, //S3-TORR-002
                                { top: '77vh', left: '24.4vw' }, //S3-TORR-003
                                { top: '77vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '77vh', left: '59.8vw' }, //S3-TORR-005
                                { top: '77vh', left: '70vw' }, //S3-TORR-006
                                { top: '77vh', left: '80vw' }, //S3-TORR-007
                                { top: '77vh', left: '90vw' }, //S3-TORR-008
                                { top: '59.8vh', left: '27.7vw' }, //S3-BACC-011
                                { top: '59.8vh', left: '33.7vw' }, //S3-BACC-012
                                { top: '60vh', left: '55vw' }, //S3-BACI-003
                                { top: '60vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '36vh', left: '30vw' }, //S3-CHIL-006
                                { top: '26.5vh', left: '58.1vw' }, //S3-BAGC-001
                                { top: '33vh', left: '58.1vw' }, //S3-BAGC-002
                                { top: '48vh', left: '73.5vw' }, //S3-BAGI-001
                                { top: '53vh', left: '73.5vw' }, //S3-BAGI-002
                                { top: '43vh', left: '73.5vw' }, //S3-BAGP-001
                                { top: '37vh', left: '73.5vw' }, //S3-BAGP-002
                            ]
                        }
                    };
                     //1366x768
                     if ((width > 1270 && width <= 1379)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '26vh', left: '89vw' }, //S3-COMP-001
                                { top: '59vh', left: '80.4vw' },  //S3-COMP-002
                                { top: '59vh', left: '88.6vw' },  //S3-COMP-003
                                { top: '42vh', left: '80.5vw' },   //S3-COMP-005
                                { top: '44vh', left: '88.6vw'},  //S3-COMP-006
                                { top: '56vh', left: '13.5vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '83vh', left: '10vw' }, //S3-TORR-001
                                { top: '83vh', left: '18vw' }, //S3-TORR-002
                                { top: '83vh', left: '27vw' }, //S3-TORR-003
                                { top: '83vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '83vh', left: '59vw' }, //S3-TORR-005
                                { top: '83vh', left: '68vw' }, //S3-TORR-006
                                { top: '83vh', left: '78vw' }, //S3-TORR-007
                                { top: '83vh', left: '87vw' }, //S3-TORR-008
                                { top: '61vh', left: '29vw' }, //S3-BACC-011
                                { top: '61vh', left: '35vw' }, //S3-BACC-012
                                { top: '61vh', left: '55vw' }, //S3-BACI-003
                                { top: '61vh', left: '59.8vw' }, //S3-BACI-004
                                { top: '33vh', left: '31.6vw' }, //S3-CHIL-006
                                { top: '23vh', left: '57.5vw' }, //S3-BAGC-001
                                { top: '31vh', left: '57.5vw' }, //S3-BAGC-002
                                { top: '48vh', left: '71.5vw' }, //S3-BAGI-001
                                { top: '54vh', left: '71.5vw' }, //S3-BAGI-002
                                { top: '42vh', left: '71.5vw' }, //S3-BAGP-001
                                { top: '36vh', left: '71.5vw' }, //S3-BAGP-002
                            ]
                        }
                        else {
                            positions = [

                                { top: '26vh', left: '87vw' }, //S3-COMP-001
                                { top: '59vh', left: '78.4vw' },  //S3-COMP-002
                                { top: '59.5vh', left: '86.3vw' },  //S3-COMP-003
                                { top: '42vh', left: '78.5vw' },   //S3-COMP-005
                                { top: '44vh', left: '86.3vw'},  //S3-COMP-006
                                { top: '56vh', left: '15.5vw'},   //S3-SECA-002 
                                { top: null, left: null }, //ATIVO NÃO EXISTE S3-COMP-004 
                                { top: '83vh', left: '12.5vw' }, //S3-TORR-001
                                { top: '83vh', left: '20.2vw' }, //S3-TORR-002
                                { top: '83vh', left: '28vw' }, //S3-TORR-003
                                { top: '83vh', left: '50.1vw' }, //S3-TORR-004
                                { top: '83vh', left: '58.6vw' }, //S3-TORR-005
                                { top: '83vh', left: '67vw' }, //S3-TORR-006
                                { top: '83vh', left: '76.5vw' }, //S3-TORR-007
                                { top: '83vh', left: '84.8vw' }, //S3-TORR-008
                                { top: '61vh', left: '30.5vw' }, //S3-BACC-011
                                { top: '61vh', left: '35.8vw' }, //S3-BACC-012
                                { top: '61.3vh', left: '54.5vw' }, //S3-BACI-003
                                { top: '61.3vh', left: '59vw' }, //S3-BACI-004
                                { top: '33.5vh', left: '32.6vw' }, //S3-CHIL-006
                                { top: '22.5vh', left: '57vw' }, //S3-BAGC-001
                                { top: '30.5vh', left: '57vw' }, //S3-BAGC-002
                                { top: '48.3vh', left: '70vw' }, //S3-BAGI-001
                                { top: '54.3vh', left: '70vw' }, //S3-BAGI-002
                                { top: '42.3vh', left: '70vw' }, //S3-BAGP-001
                                { top: '36.3vh', left: '70vw' }, //S3-BAGP-002
                            ]
                        }
                    };
                    if (positions[luz.posicao].top && positions[luz.posicao].left) {
                        lightDiv.style.top = positions[luz.posicao].top;
                        lightDiv.style.left = positions[luz.posicao].left;
                        imageContainer_2.appendChild(lightDiv);
                    }
                });
            });
    } catch (error) {
        console.error("Erro ao carregar os dados de luzes:", error);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights4')  // Novo endpoint para a fábrica 04
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer_2 = document.querySelector('.image-container-fab04');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);

                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;

                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '74vh', left: '40vw' }, //S4-TORR-001
                                { top: '74vh', left: '54vw' },  //S4-TORR-002
                                { top: '74vh', left: '66vw' },  //S4-TORR-003
                                { top: '50vh', left: '63vw' },   //S4-BACI-001
                                { top: '50vh', left: '69vw'},  //S4-BACI-002
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        ]} else {
                            positions = [

                                { top: '74vh', left: '40vw' }, //S4-TORR-001
                                { top: '74vh', left: '54vw' },  //S4-TORR-002
                                { top: '74vh', left: '66vw' },  //S4-TORR-003
                                { top: '50vh', left: '63vw' },   //S4-BACI-001
                                { top: '50vh', left: '69vw'},  //S4-BACI-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '74vh', left: '38.4vw' }, //S4-TORR-001
                                { top: '74vh', left: '54.2vw' },  //S4-TORR-002
                                { top: '74vh', left: '68.2vw' },  //S4-TORR-003
                                { top: '50vh', left: '65vw' },   //S4-BACI-001
                                { top: '50vh', left: '71.5vw'},  //S4-BACI-002
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '74vh', left: '39.2vw' }, //S4-TORR-001
                                { top: '74vh', left: '54vw' },  //S4-TORR-002
                                { top: '74vh', left: '67vw' },  //S4-TORR-003
                                { top: '50vh', left: '64vw' },   //S4-BACI-001
                                { top: '50vh', left: '70.5vw'},  //S4-BACI-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '74vh', left: '40.1vw' }, //S4-TORR-001
                                { top: '74vh', left: '54vw' },  //S4-TORR-002
                                { top: '74vh', left: '66vw' },  //S4-TORR-003
                                { top: '50vh', left: '63vw' },   //S4-BACI-001
                                { top: '50vh', left: '69vw'},  //S4-BACI-002
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '74vh', left: '40.7vw' }, //S4-TORR-001
                                { top: '74vh', left: '53.8vw' },  //S4-TORR-002
                                { top: '74vh', left: '65.4vw' },  //S4-TORR-003
                                { top: '50vh', left: '62.5vw' },   //S4-BACI-001
                                { top: '50vh', left: '68vw'},  //S4-BACI-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '74vh', left: '39vw' }, //S4-TORR-001
                                { top: '74vh', left: '54.3vw' },  //S4-TORR-002
                                { top: '74vh', left: '67.8vw' },  //S4-TORR-003
                                { top: '50vh', left: '64.7vw' },   //S4-BACI-001
                                { top: '50vh', left: '71vw'},  //S4-BACI-002
                            ]
                        }
                        else {
                            positions = [

                                { top: '74vh', left: '39.7vw' }, //S4-TORR-001
                                { top: '74vh', left: '54.3vw' },  //S4-TORR-002
                                { top: '74vh', left: '67vw' },  //S4-TORR-003
                                { top: '50vh', left: '64vw' },   //S4-BACI-001
                                { top: '50vh', left: '70vw'},  //S4-BACI-002
                            ]
                        }
                    };
                     //1400x1050
                     if ((width > 1380 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '76vh', left: '35.6vw' }, //S4-TORR-001
                                { top: '76vh', left: '54.7vw' },  //S4-TORR-002
                                { top: '76vh', left: '71.3vw' },  //S4-TORR-003
                                { top: '51.5vh', left: '67.5vw' },   //S4-BACI-001
                                { top: '51.5vh', left: '75.5vw'},  //S4-BACI-002
                            ]
                        }
                        else {
                            positions = [

                                { top: '74vh', left: '37vw' }, //S4-TORR-001
                                { top: '74vh', left: '55vw' },  //S4-TORR-002
                                { top: '74vh', left: '71vw' },  //S4-TORR-003
                                { top: '50vh', left: '67vw' },   //S4-BACI-001
                                { top: '50vh', left: '74.5vw'},  //S4-BACI-002
                            ]
                        }
                    };
                     //1366x768
                     if ((width > 1270 && width <= 1379)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '75vh', left: '41vw' }, //S4-TORR-001
                                { top: '75vh', left: '54.3vw' },  //S4-TORR-002
                                { top: '75vh', left: '66vw' },  //S4-TORR-003
                                { top: '51.3vh', left: '63.3vw' },   //S4-BACI-001
                                { top: '51.3vh', left: '68.7vw'},  //S4-BACI-002
                            ]
                        }
                        else {
                            positions = [

                                { top: '75vh', left: '41.4vw' }, //S4-TORR-001
                                { top: '75vh', left: '54vw' },  //S4-TORR-002
                                { top: '75vh', left: '65vw' },  //S4-TORR-003
                                { top: '51.3vh', left: '62.5vw' },   //S4-BACI-001
                                { top: '51.3vh', left: '67.7vw'},  //S4-BACI-002
                            ]
                        }
                    };
                    lightDiv.style.top = positions[luz.posicao].top;
                    lightDiv.style.left = positions[luz.posicao].left;
                    imageContainer_2.appendChild(lightDiv);
                });
            });
    } catch (error) {
        console.error("Erro ao carregar os dados de luzes:", error);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights5')  // Novo endpoint para a fábrica 05
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer_2 = document.querySelector('.image-container-fab05');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);

                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;

                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '37vh', left: '27vw' }, //S5-COMP-001
                                { top: '37vh', left: '36vw' },  //S5-COMP-002
                                { top: '37vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '37vh', left: '44vw' },  //S5-COMP-008
                                { top: '55vh', left: '56.5vw'}, //S5-SECA-001
                                { top: '37vh', left: '60.6vw' }, //S5-COMP-006
                                { top: '61vh', left: '28vw'}, //S5-SECA-002
                                { top: '26vh', left: '72vw'}, //S5-GERN-001
                                { top: '26vh', left: '78.5vw'}, //S5-GERN-002
                                { top: '85vh', left: '35vw'}, //S5-SECA-003
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        ]} else {
                            positions = [

                                { top: '37vh', left: '27vw' }, //S5-COMP-001
                                { top: '37vh', left: '36vw' },  //S5-COMP-002
                                { top: '37vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '37vh', left: '44vw' },  //S5-COMP-008
                                { top: '55vh', left: '56.5vw'}, //S5-SECA-001
                                { top: '37vh', left: '60.6vw' }, //S5-COMP-006
                                { top: '61vh', left: '28vw'}, //S5-SECA-002
                                { top: '26vh', left: '72vw'}, //S5-GERN-001
                                { top: '26vh', left: '78.5vw'}, //S5-GERN-002
                                { top: '86.3vh', left: '35vw'}, //S5-SECA-003
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '37vh', left: '23.5vw' }, //S5-COMP-001
                                { top: '37vh', left: '34vw' },  //S5-COMP-002
                                { top: '37vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '37vh', left: '43vw' },  //S5-COMP-008
                                { top: '55vh', left: '57.5vw'}, //S5-SECA-001
                                { top: '37vh', left: '62vw' }, //S5-COMP-006
                                { top: '61vh', left: '24.7vw'}, //S5-SECA-002
                                { top: '26vh', left: '75vw'}, //S5-GERN-001
                                { top: '26vh', left: '82vw'}, //S5-GERN-002
                                { top: '86vh', left: '33vw'}, //S5-SECA-003
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [
                                { top: '38vh', left: '27.5vw' }, //S5-COMP-001
                                { top: '38vh', left: '36.5vw' },  //S5-COMP-002
                                { top: '38vh', left: '51.5vw' }, //S5-COMP-007
                                { top: '38vh', left: '44.2vw' },  //S5-COMP-008
                                { top: '55vh', left: '56.4vw'}, //S5-SECA-001
                                { top: '38vh', left: '60.5vw' }, //S5-COMP-006
                                { top: '60.5vh', left: '28.5vw'}, //S5-SECA-002
                                { top: '28vh', left: '71.5vw'}, //S5-GERN-001
                                { top: '28vh', left: '78vw'}, //S5-GERN-002
                                { top: '82.7vh', left: '35.5vw'}, //S5-SECA-003
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '38vh', left: '29.5vw' }, //S5-COMP-001
                                { top: '38.2vh', left: '37.5vw' },  //S5-COMP-002
                                { top: '38.2vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '38.2vh', left: '45vw' },  //S5-COMP-008
                                { top: '55.5vh', left: '56.1vw'}, //S5-SECA-001
                                { top: '38.2vh', left: '60vw' }, //S5-COMP-006
                                { top: '61vh', left: '30.5vw'}, //S5-SECA-002
                                { top: '28.5vh', left: '70vw'}, //S5-GERN-001
                                { top: '28.5vh', left: '76vw'}, //S5-GERN-002
                                { top: '83.5vh', left: '36.5vw'}, //S5-SECA-003
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '39vh', left: '30.5vw' }, //S5-COMP-001
                                { top: '39vh', left: '38.4vw' },  //S5-COMP-002
                                { top: '39vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '39vh', left: '45vw' },  //S5-COMP-008
                                { top: '55.5vh', left: '56.1vw'}, //S5-SECA-001
                                { top: '39vh', left: '59vw' }, //S5-COMP-006
                                { top: '61vh', left: '31.5vw'}, //S5-SECA-002
                                { top: '28.5vh', left: '69vw'}, //S5-GERN-001
                                { top: '28.5vh', left: '74.5vw'}, //S5-GERN-002
                                { top: '83.5vh', left: '37.5vw'}, //S5-SECA-003
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '39vh', left: '27.4vw' }, //S5-COMP-001
                                { top: '39vh', left: '36vw' },  //S5-COMP-002
                                { top: '39vh', left: '52vw' }, //S5-COMP-007
                                { top: '39vh', left: '44vw' },  //S5-COMP-008
                                { top: '55.5vh', left: '56.8vw'}, //S5-SECA-001
                                { top: '39vh', left: '61vw' }, //S5-COMP-006
                                { top: '61vh', left: '28.2vw'}, //S5-SECA-002
                                { top: '28.5vh', left: '72vw'}, //S5-GERN-001
                                { top: '28.5vh', left: '78.5vw'}, //S5-GERN-002
                                { top: '83.5vh', left: '35.2vw'}, //S5-SECA-003
                            ]
                        }
                        else {
                            positions = [

                                { top: '39vh', left: '28.5vw' }, //S5-COMP-001
                                { top: '39vh', left: '37vw' },  //S5-COMP-002
                                { top: '39vh', left: '51.7vw' }, //S5-COMP-007
                                { top: '39vh', left: '44.5vw' },  //S5-COMP-008
                                { top: '55.5vh', left: '56.6vw'}, //S5-SECA-001
                                { top: '39vh', left: '60vw' }, //S5-COMP-006
                                { top: '61vh', left: '29.5vw'}, //S5-SECA-002
                                { top: '29.5vh', left: '71vw'}, //S5-GERN-001
                                { top: '29.5vh', left: '77vw'}, //S5-GERN-002
                                { top: '83.5vh', left: '36vw'}, //S5-SECA-003
                            ]
                        }
                    };
                     //1400x1050
                     if ((width > 1380 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '39vh', left: '18vw' }, //S5-COMP-001
                                { top: '39vh', left: '30vw' },  //S5-COMP-002
                                { top: '39vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '39vh', left: '41vw' },  //S5-COMP-008
                                { top: '57vh', left: '58.4vw'}, //S5-SECA-001
                                { top: '39vh', left: '64vw' }, //S5-COMP-006
                                { top: '63vh', left: '19.2vw'}, //S5-SECA-002
                                { top: '28.5vh', left: '79vw'}, //S5-GERN-001
                                { top: '28.5vh', left: '88vw'}, //S5-GERN-002
                                { top: '88vh', left: '29vw'}, //S5-SECA-003
                            ]
                        }
                        else {
                            positions = [

                                { top: '39vh', left: '23vw' }, //S5-COMP-001
                                { top: '39vh', left: '33.5vw' },  //S5-COMP-002
                                { top: '39vh', left: '51.4vw' }, //S5-COMP-007
                                { top: '39vh', left: '43vw' },  //S5-COMP-008
                                { top: '55.4vh', left: '57.8vw'}, //S5-SECA-001
                                { top: '39vh', left: '62.5vw' }, //S5-COMP-006
                                { top: '60.8vh', left: '24.2vw'}, //S5-SECA-002
                                { top: '28.5vh', left: '76vw'}, //S5-GERN-001
                                { top: '28.5vh', left: '83.5vw'}, //S5-GERN-002
                                { top: '83.1vh', left: '32.5vw'}, //S5-SECA-003
                            ]
                        }
                    };
                     //1366x768
                     if ((width > 1270 && width <= 1379)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '40vh', left: '30.5vw' }, //S5-COMP-001
                                { top: '40vh', left: '38.5vw' },  //S5-COMP-002
                                { top: '40vh', left: '52vw' }, //S5-COMP-007
                                { top: '40vh', left: '45.5vw' },  //S5-COMP-008
                                { top: '56.7vh', left: '56.5vw'}, //S5-SECA-001
                                { top: '40vh', left: '60vw' }, //S5-COMP-006
                                { top: '62vh', left: '31.3vw'}, //S5-SECA-002
                                { top: '30vh', left: '70vw'}, //S5-GERN-001
                                { top: '30vh', left: '75.6vw'}, //S5-GERN-002
                                { top: '84.6vh', left: '37.5vw'}, //S5-SECA-003
                            ]
                        }
                        else {
                            positions = [

                                { top: '40vh', left: '32vw' }, //S5-COMP-001
                                { top: '40vh', left: '38.5vw' },  //S5-COMP-002
                                { top: '40vh', left: '52vw' }, //S5-COMP-007
                                { top: '40vh', left: '45.5vw' },  //S5-COMP-008
                                { top: '56.7vh', left: '56vw'}, //S5-SECA-001
                                { top: '40vh', left: '59vw' }, //S5-COMP-006
                                { top: '62vh', left: '32.6vw'}, //S5-SECA-002
                                { top: '30vh', left: '68.6vw'}, //S5-GERN-001
                                { top: '30vh', left: '74vw'}, //S5-GERN-002
                                { top: '84.6vh', left: '38.5vw'}, //S5-SECA-003
                            ]
                        }
                    };
                    lightDiv.style.top = positions[luz.posicao].top;
                    lightDiv.style.left = positions[luz.posicao].left;
                    imageContainer_2.appendChild(lightDiv);
                });
            });
    } catch (error) {
        console.error("Erro ao carregar os dados de luzes:", error);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights6')  // Novo endpoint para a fábrica 06
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer_2 = document.querySelector('.image-container-fab06');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);

                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;

                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '22vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64.5vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '64.5vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '64.8vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64.8vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64.8vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64.8vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '64.8vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '50.7vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGI-001
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        ]} else {
                            positions = [

                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '22vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64.5vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '64.5vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '64.8vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64.8vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64.8vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64.8vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '64.8vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '50.7vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGI-001
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '30.5vh', left: '5vw' }, //S6-COMP-007
                                { top: '30.5vh', left: '22vw' }, //S6-COMP-008
                                { top: '30.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '21.5vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '11.5vw'}, //S6-COMP-013
                                { top: '68vh', left: '10.2vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.4vw'  }, //S6-COMP-001
                                { top: '34vh', left: '89.6vw'}, //S6-COMP-002
                                { top: '34vh', left: '95.7vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.7vw'}, //S6-COMP-004
                                { top: '45vh', left: '51vw'}, //S6-COMP-011
                                { top: '31vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '79vh', left: '90vw'}, //S6-TORR-001
                                { top: '79vh', left: '77.5vw'}, //S6-TORR-002
                                { top: '79vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '79vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64vh', left: '80.6vw'}, //S6-BACC-001
                                { top: '64vh', left: '75.8vw'}, //S6-BACC-002
                                { top: '64vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64vh', left: '90.6vw'}, //S6-BACI-002
                                { top: '64vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '37.8vh', left: '43.3vw'}, //S6-BAGC-005
                                { top: '43.3vh', left: '43.3vw'}, //S6-BAGC-006
                                { top: '40.1vh', left: '30vw'}, //S6-BAGI-001
                                { top: '35vh', left: '30vw'}, //S6-BAGI-002
                                { top: '30vh', left: '30vw'}, //S6-BAGI-003
                                { top: '51vh', left: '30vw'}, //S6-BAGP-001
                                { top: '45.5vh', left: '30vw'}, //S6-BAGP-002
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '30.5vh', left: '5vw' }, //S6-COMP-007
                                { top: '30.5vh', left: '22vw' }, //S6-COMP-008
                                { top: '30.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '21.5vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '11.5vw'}, //S6-COMP-013
                                { top: '68vh', left: '10.2vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.4vw'  }, //S6-COMP-001
                                { top: '34vh', left: '89.6vw'}, //S6-COMP-002
                                { top: '34vh', left: '95.7vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.7vw'}, //S6-COMP-004
                                { top: '45vh', left: '51vw'}, //S6-COMP-011
                                { top: '31vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '80.5vh', left: '90vw'}, //S6-TORR-001
                                { top: '80.5vh', left: '77.5vw'}, //S6-TORR-002
                                { top: '80.5vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '80.5vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64vh', left: '80.6vw'}, //S6-BACC-001
                                { top: '64vh', left: '75.8vw'}, //S6-BACC-002
                                { top: '64vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64vh', left: '90.6vw'}, //S6-BACI-002
                                { top: '64vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '37.8vh', left: '43.3vw'}, //S6-BAGC-005
                                { top: '43.3vh', left: '43.3vw'}, //S6-BAGC-006
                                { top: '40.1vh', left: '30vw'}, //S6-BAGI-001
                                { top: '35vh', left: '30vw'}, //S6-BAGI-002
                                { top: '30vh', left: '30vw'}, //S6-BAGI-003
                                { top: '51vh', left: '30vw'}, //S6-BAGp-001
                                { top: '45.5vh', left: '30vw'}, //S6-BAGI-001
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '21.6vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '82.8vh', left: '89.7vw'}, //S6-TORR-001
                                { top: '82.8vh', left: '77vw'}, //S6-TORR-002
                                { top: '82.8vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '82.8vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '65.7vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '65.7vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '65.7vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '65.7vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '65.7vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '65.7vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '65.7vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.4vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.4vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '51.2vh', left: '30.4vw'}, //S6-BAGP-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGP-002
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '28.5vh', left: '7.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '23.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '15.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '23vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '13.5vw'}, //S6-COMP-013
                                { top: '70vh', left: '12.5vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '87.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '87.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '92.7vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '92.7vw'}, //S6-COMP-004
                                { top: '44.2vh', left: '50.7vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.4vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '82.8vh', left: '87.7vw'}, //S6-TORR-001
                                { top: '82.8vh', left: '75.6vw'}, //S6-TORR-002
                                { top: '82.8vh', left: '66.5vw'}, //S6-TORR-003
                                { top: '82.8vh', left: '57vw'}, //S6-TORR-004
                                { top: '65.7vh', left: '78.6vw'}, //S6-BACC-001
                                { top: '65.7vh', left: '74.2vw'}, //S6-BACC-002
                                { top: '66vh', left: '59.3vw'}, //S6-BACC-005
                                { top: '66vh', left: '55.4vw'}, //S6-BACC-006
                                { top: '65.7vh', left: '92.3vw'}, //S6-BACI-001
                                { top: '65.7vh', left: '88.2vw'}, //S6-BACI-002
                                { top: '65.7vh', left: '84.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '79vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '63.8vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.4vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.4vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '51.2vh', left: '30.4vw'}, //S6-BAGP-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGP-002
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '30.5vh', left: '5vw' }, //S6-COMP-007
                                { top: '30.5vh', left: '22vw' }, //S6-COMP-008
                                { top: '30.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '21.6vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '11.6vw'}, //S6-COMP-013
                                { top: '69.5vh', left: '10.5vw'}, //S6-SECA-001
                                { top: '47.7vh', left: '89.4vw'  }, //S6-COMP-001
                                { top: '34vh', left: '89.4vw'}, //S6-COMP-002
                                { top: '34vh', left: '95.4vw'}, //S6-COMP-003
                                { top: '47.7vh', left: '95.4vw'}, //S6-COMP-004
                                { top: '45vh', left: '51vw'}, //S6-COMP-011
                                { top: '30.2vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '80.6vh', left: '89.7vw'}, //S6-TORR-001
                                { top: '80.6vh', left: '77vw'}, //S6-TORR-002
                                { top: '80.2vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '80.2vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '65.7vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '65.7vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '65.7vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '65.7vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '65.7vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '65.7vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '65.7vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '37.8vh', left: '43.4vw'}, //S6-BAGC-005
                                { top: '43.4vh', left: '43.4vw'}, //S6-BAGC-006
                                { top: '40.5vh', left: '30vw'}, //S6-BAGI-001
                                { top: '34.9vh', left: '30vw'}, //S6-BAGI-002
                                { top: '29vh', left: '30vw'}, //S6-BAGI-003
                                { top: '51.2vh', left: '30vw'}, //S6-BAGP-001
                                { top: '46vh', left: '30vw'}, //S6-BAGP-002
                            ]
                        }
                        else {
                            positions = [
                                { top: '29.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '29.5vh', left: '21.5vw' }, //S6-COMP-008
                                { top: '29.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '21.4vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '10.2vw'}, //S6-SECA-001
                                { top: '47.5vh', left: '89.4vw'  }, //S6-COMP-001
                                { top: '33.2vh', left: '89.4vw'}, //S6-COMP-002
                                { top: '33.2vh', left: '95.4vw'}, //S6-COMP-003
                                { top: '47.5vh', left: '95.4vw'}, //S6-COMP-004
                                { top: '45vh', left: '50.8vw'}, //S6-COMP-011
                                { top: '30vh', left: '53.6vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '65.4vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '65.4vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '65.4vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '65.4vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '65.4vh', left: '95vw'}, //S6-BACI-001
                                { top: '65.4vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '65.4vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '37.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '43.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '40vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '34.5vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '28.8vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '51.8vh', left: '30.4vw'}, //S6-BAGP-001
                                { top: '46vh', left: '30.4vw'}, //S6-BAGP-002
                            ]
                        }
                    };
                     //1400x1050
                     if ((width > 1380 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '22vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64.5vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '64.5vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '64.8vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64.8vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64.8vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64.8vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '64.8vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '50.7vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGI-001
                            ]
                        }
                        else {
                            positions = [

                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '22vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64.5vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '64.5vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '64.8vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64.8vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64.8vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64.8vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '64.8vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '50.7vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGI-001
                            ]
                        }
                    };
                     //1366x768
                     if ((width > 1270 && width <= 1379)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '22vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64.5vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '64.5vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '64.8vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64.8vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64.8vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64.8vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '64.8vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '50.7vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGI-001
                            ]
                        }
                        else {
                            positions = [

                                { top: '28.5vh', left: '5.5vw' }, //S6-COMP-007
                                { top: '28.5vh', left: '22.5vw' }, //S6-COMP-008
                                { top: '28.5vh', left: '13.5vw' }, //S6-COMP-009
                                { top: '48vh', left: '22vw' }, //S6-COMP-012
                                { top: '47.8vh', left: '12vw'}, //S6-COMP-013
                                { top: '70vh', left: '11vw'}, //S6-SECA-001
                                { top: '47.2vh', left: '89.2vw'  }, //S6-COMP-001
                                { top: '32.7vh', left: '89.2vw'}, //S6-COMP-002
                                { top: '32.7vh', left: '95.2vw'}, //S6-COMP-003
                                { top: '47.2vh', left: '95.2vw'}, //S6-COMP-004
                                { top: '44vh', left: '51vw'}, //S6-COMP-011
                                { top: '28.8vh', left: '53.7vw'}, //S6-SECA-002
                                { top: null, left: null}, //S6-GERN-001 //NÃO EXISTE NO QUADRO
                                { top: null , left: null }, //S6-GERN-002 //NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-SECA-003 //NÃO EXISTE NO QUADRO
                                { top: '81.7vh', left: '89.8vw'}, //S6-TORR-001
                                { top: '81.7vh', left: '77vw'}, //S6-TORR-002
                                { top: '81.4vh', left: '67.5vw'}, //S6-TORR-003
                                { top: '81.4vh', left: '57.5vw'}, //S6-TORR-004
                                { top: '64.5vh', left: '80.2vw'}, //S6-BACC-001
                                { top: '64.5vh', left: '75.5vw'}, //S6-BACC-002
                                { top: '64.8vh', left: '59.9vw'}, //S6-BACC-005
                                { top: '64.8vh', left: '55.8vw'}, //S6-BACC-006
                                { top: '64.8vh', left: '94.6vw'}, //S6-BACI-001
                                { top: '64.8vh', left: '90.3vw'}, //S6-BACI-002
                                { top: '64.8vh', left: '86.2vw'}, //S6-BACI-003
                                { top: '42.6vh', left: '80.7vw'}, //S6-CHIL-001
                                { top: '42.6vh', left: '64.7vw'}, //S6-CHIL-003
                                { top: null, left: null}, //S6-BAGC-001 NÃO EXISTE NO QUADRO
                                { top: null, left: null}, //S6-BAGC-002 NÃO EXISTE NO QUADRO
                                { top: '36.6vh', left: '43.7vw'}, //S6-BAGC-005
                                { top: '42.7vh', left: '43.7vw'}, //S6-BAGC-006
                                { top: '39vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '33.4vh', left: '30.4vw'}, //S6-BAGI-002
                                { top: '27vh', left: '30.4vw'}, //S6-BAGI-003
                                { top: '50.7vh', left: '30.4vw'}, //S6-BAGI-001
                                { top: '45.2vh', left: '30.4vw'}, //S6-BAGI-001
                            ]
                        }
                    };
                    if (positions[luz.posicao].top && positions[luz.posicao].left) {
                        lightDiv.style.top = positions[luz.posicao].top;
                        lightDiv.style.left = positions[luz.posicao].left;
                        imageContainer_2.appendChild(lightDiv);
                    }
                });
            });
    } catch (error) {
        console.error("Erro ao carregar os dados de luzes:", error);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('/lights7')  // Novo endpoint para a fábrica 07
            .then(response => response.json())
            .then(lightsData => {
                const imageContainer_2 = document.querySelector('.image-container-Fab07');

                // Limpe as luzes existentes

                const userAgent = navigator.userAgent;
                let browserName;

                if (userAgent.indexOf("Chrome") > -1) {
                    browserName = "Google Chrome";
                } else if (userAgent.indexOf("Firefox") > -1) {
                    browserName = "Mozilla Firefox";
                } else if (userAgent.indexOf("Safari") > -1) {
                    browserName = "Apple Safari";
                } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
                    browserName = "Microsoft Internet Explorer";
                } else {
                    browserName = "Unknown";
                }
                console.log(browserName);

                // Distribua as luzes pelo mapa
                lightsData.forEach((luz, index) => {
                    const lightDiv = document.createElement('div');
                    lightDiv.className = `light ${luz.cor}`;

                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    let positions;
                    //1920x1080
                    if ((width > 1900 && width <= 1920)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer


                            //O RESTO A PLANILHA NÃO ALIMENTA
                        ]} else {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1680x1050
                    if ((width > 1671 && width <= 1899)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1600x900
                    if ((width > 1590 && width <= 1671)) {
                        if (browserName === 'Google Chrome') {
                            positions = [
                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ];
                            //O RESTO A PLANILHA NÃO ALIMENTA
                        } else {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                            //O RESTO A PLANILHA NÃO ALIMENTA

                        }
                    }
                    //1440x900
                    if ((width > 1430 && width <= 1590)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                        }
                        else {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                        }
                    };
                     //1400x1050
                     if ((width > 1380 && width <= 1430)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                        }
                        else {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                        }
                    };
                     //1366x768
                     if ((width > 1270 && width <= 1379)) {
                        if (browserName == 'Google Chrome') {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                        }
                        else {
                            positions = [

                                { top: '83.5vh', left: '80.6vw' }, //S7-COMP-006
                                { top: '83.5vh', left: '87.6vw' }, //S7-COMP-007
                                { top: '83.5vh', left: '94.5vw' }, //S7-COMP-008
                                { top: '67vh', left: '93.2vw' }, //S7-COMP-009
                                { top: '52vh', left: '83.9vw'}, //S7-COMP-010
                                { top: '67vh', left: '81.5vw'}, //S7-COMP-011
                                { top: '39vh', left: '79.4vw'}, //S7-SECA-001
                                { top: '69vh', left: '37.4vw'}, //S7-COMP-001
                                { top: '69vh', left: '42.4vw'}, //S7-COMP-002
                                { top: null, left: null}, //S7-COMP-003 || NÃO ESTÁ NO QUADRO
                                { top: '84.5vh', left: '37.2vw'}, //S7-COMP-004
                                { top: '84.5vh', left: '42.4vw'}, //S7-COMP-005
                                { top: '84.5vh', left: '53.8vw'}, //S7-COMP-013 
                                { top: '68vh', left: '51.3vw'}, //S7-COMP-017
                                { top: null, left: null}, //S7-GERN-001 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-GERN-002 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-003 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-SECA-004 || NÃO ESTÁ NO QUADRO
                                { top: null, left: null}, //S7-FILC-022  || NÃO ESTÁ NO QUADRO
                                { top: '25vh', left: '6vw'}, //S7-TORR-001
                                { top: '28.3vh', left: '17.2vw'}, //S7-TORR-002
                                { top: '25vh', left: '28.7vw'}, //S7-TORR-003
                                { top: '25vh', left: '40.5vw'}, //S7-TORR-004
                                { top: '26.6vh', left: '53.7vw'}, //S7-TORR-005
                                { top: '25vh', left: '65.4vw'}, //S7-TORR-006
                                { top: null, left: null }, //S7-BACC-001 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-002 || Não vai aparecer
                                { top: null, left: null }, //S7-BACC-005 || Não vai aparecer
                                { top: '42vh', left: '42.5vw' }, //S7-BACC-006 
                                { top: null, left: null }, //S7-BACC-007 || Não vai aparecer
                                { top: '42vh', left: '65vw' }, //S7-BACC-008 
                                { top: '44vh', left: '4.3vw' }, //S7-BACI-001 
                                { top: '44vh', left: '7.4vw' }, //S7-BACI-002 
                                { top: null, left: null }, //S7-BACI-003 || Não vai aparecer
                            ]
                        }
                    };
                    if (positions[luz.posicao].top && positions[luz.posicao].left) {
                        lightDiv.style.top = positions[luz.posicao].top;
                        lightDiv.style.left = positions[luz.posicao].left;
                        imageContainer_2.appendChild(lightDiv);
                    }
                });
            });
    } catch (error) {
        console.error("Erro ao carregar os dados de luzes:", error);
    }
});
// Função para carregar um arquivo HTML em um elemento específico
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo:', error);
        });
}

// Carregar a navbar
loadHTML('navbar-container', 'navbar.html');

$(document).ready(function () {
    var equipmentName = ''; // Variável para armazenar o data-name

    // Função 1: Captura e exibição do data-name ao clicar na área mapeada
    $('area').on('click', function (event) {
        event.preventDefault();  // Evita o comportamento padrão do link

        // Remove qualquer thoughtBubble existente ao clicar em um equipamento
        $('#thoughtBubble').remove();

        // Recupere os dados armazenados nos atributos data- do elemento clicado
        equipmentName = $(this).data('name');
        var equipmentTag = $(this).data('tag');
        var emergencyClass = $(this).data('class');

        // Atualize o conteúdo do pop-up com os dados recuperados
        $('#popupModal .card-header span').text(equipmentName);
        $('#popupModal .card-body .d-flex:nth-child(1) span:nth-child(2)').text(emergencyClass);
        $('#popupModal .card-body .d-flex:nth-child(2) span:nth-child(2)').text(equipmentTag);

        // Atualize o pop-up com a data obtida
        $.get('/ultima-data', function (data) {
            $('#popupModal .card-body .d-flex:nth-child(3) span:nth-child(2)').text(data.ultimaData);
        });

    });

    // Função 2: Exibe e anima o thought bubble com o data-name ao clicar no botão
    $('#statusButton').on('click', function () {
        // Verifica se o thoughtBubble já existe, para evitar múltiplos elementos
        if (!$('#thoughtBubble').length) {
            var thoughtBubble = $('<div id="thoughtBubble"></div>'); // Cria a thought bubble
            $('.modal-body').append(thoughtBubble);  // Adiciona a thought bubble ao modal
        }

        var thoughtBubble = $('#thoughtBubble');
        thoughtBubble.text(''); // Limpa o texto atual

        // Faz o thought bubble aparecer
        thoughtBubble.show();

        // Faz a requisição para buscar o defeito mais recente
        fetchDefect(equipmentName, thoughtBubble);
    });

    // Função para buscar o defeito mais recente do equipamento
    function fetchDefect(equipmentName, thoughtBubble) {
        $.get('http://10.2.22.19:3000/Complete_Test/defeitos.txt', function (data) {
            // Separar as linhas do arquivo
            var lines = data.split('\n');
            var latestDefect = '';

            // Percorrer as linhas para encontrar o defeito mais recente do equipamento correspondente
            for (var i = lines.length - 1; i >= 0; i--) {
                if (lines[i].includes(equipmentName)) {
                    // Encontrar o defeito mais recente
                    latestDefect = lines[i].split('Comentário: ')[1].split(' (Data: ')[0];
                    break; // Parar após encontrar o mais recente
                }
            }

            // Exibir o defeito na thought bubble no formato solicitado
            if (latestDefect) {
                thoughtBubble.text('Att: ' + latestDefect);
            } else {
                thoughtBubble.text('Nenhum defeito encontrado.');
            }

            // Chama a função para animar o texto do defect
            animateText(thoughtBubble.text(), thoughtBubble);
        });
    }

    // Função para fechar o modal e esconder a thought bubble
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('navbar-container');

    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;

            // Seleciona todos os itens de navegação após carregar a navbar
            const factoryLinks = document.querySelectorAll('.navbar-nav .nav-item');

            // Função para remover a classe 'active' de todos os links
            function clearActiveState() {
                factoryLinks.forEach(link => {
                    link.classList.remove('active');
                });
            }

            // Função para adicionar a classe 'active' ao link atual
            function setActiveLink() {
                const currentUrl = window.location.href;
                factoryLinks.forEach(link => {
                    const linkUrl = link.querySelector('.nav-link').href;
                    if (currentUrl === linkUrl) {
                        link.classList.add('active');
                    }
                });
            }

            // Adiciona eventos de clique para atualizar a classe 'active'
            factoryLinks.forEach(link => {
                link.addEventListener('click', function () {
                    clearActiveState();
                    this.classList.add('active');
                });
            });

            function highlightFactory03IfOnSubpage() {
                const currentUrl = window.location.href;

                // Verifica se a URL atual é Factory_03A ou Factory_03B
                if (currentUrl.includes("Factory_03A.html") || currentUrl.includes("Factory_03B.html")) {
                    const factoryDropdown = document.querySelector('.nav-link.dropdown-toggle');

                    // Aplica o estilo desejado ao item Fábrica 03
                    factoryDropdown.style.backgroundColor = 'rgb(44, 43, 6)';
                    factoryDropdown.style.borderRadius = '5px';
                }
            }

            // Chama a função para verificar a URL e aplicar o estilo
            highlightFactory03IfOnSubpage();

            // Define o link ativo ao carregar a página
            setActiveLink();

            // Agora que a navbar foi carregada, podemos adicionar o evento ao botão narrativa
            const narrativaButton = document.getElementById('narrativa');

            // Verifica se o botão existe antes de adicionar o evento
            if (narrativaButton) {
                narrativaButton.addEventListener('click', function () {
                    const today = new Date().toISOString().split('T')[0]; // Data atual no formato YYYY-MM-DD

                    // Defina a URL correta para acessar o defeitos.txt do servidor
                    const url = `http://10.2.22.19:3000/Complete_Test/defeitos.txt`;

                    fetch(url)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Erro ao acessar o defeitos.txt no servidor.');
                            }
                            return response.text();
                        })
                        .then(data => {
                            // Dividir o arquivo de defeitos em linhas
                            const lines = data.split('\n');

                            // Criar objeto para armazenar os equipamentos organizados por fábrica
                            const factories = {};

                            lines.forEach(line => {
                                const match = line.match(/Equipamento: (S\d-\w+-\w+), Comentário: (.*) \(Data: (.*)\)/);
                                if (match) {
                                    const equipmentName = match[1]; // Nome do equipamento
                                    const comment = match[2]; // Comentário
                                    const date = match[3]; // Data

                                    const factoryNumber = equipmentName.substring(1, 2); // Captura o número da fábrica (ex: '1', '2', etc.)

                                    // Adiciona o equipamento à fábrica correspondente no objeto
                                    if (!factories[factoryNumber]) {
                                        factories[factoryNumber] = [];
                                    }
                                    factories[factoryNumber].push({
                                        equipmentName,
                                        comment,
                                        date,
                                    });
                                }
                            });

                            // Formatar o conteúdo para exibição e download
                            let fileContent = '';
                            for (const factory in factories) {
                                fileContent += `--------------------------Fábrica ${factory}----------------------\n`;
                                factories[factory].forEach(equipment => {
                                    fileContent += `Equipamento: ${equipment.equipmentName}\n`;
                                    fileContent += `Comentário: ${equipment.comment}\n`;
                                    fileContent += `Data: ${equipment.date}\n\n`;
                                });
                            }

                            // Adicionar mensagem padrão caso não haja defeitos
                            if (!fileContent.trim()) {
                                fileContent = 'Nenhum defeito encontrado para este equipamento.';
                            }

                            // Gerar o arquivo para download
                            const blob = new Blob([fileContent], { type: 'text/plain' });
                            const downloadUrl = window.URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = downloadUrl;
                            a.download = `Descritiva_${today}.txt`; // Nome do arquivo com data
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                        })
                        .catch(error => console.error('Erro ao ler o arquivo defeitos.txt:', error));
                });
            } else {
                console.error('Botão narrativa não encontrado!');
            }
        })
        .catch(error => console.error('Erro ao carregar a navbar:', error));
});

let selectedDataName = '';  // Variável para armazenar o `data-name` capturado

// Selecionar todos os elementos <area> e adicionar um event listener para capturar o clique
document.querySelectorAll('area').forEach(function (area) {
    area.addEventListener('click', function (event) {
        // Capturar o valor do atributo `data-name`
        selectedDataName = event.target.getAttribute('data-name');
        console.log('Data Name capturado:', selectedDataName);
        
        // Mostrar a caixa de texto quando um equipamento for selecionado
        var textBox = document.getElementById('text-box');

        // Verifica se o elemento textBox existe antes de tentar manipulá-lo
        if (textBox) {
            textBox.style.display = 'block';
        } else {
            console.log('O elemento textBox não foi encontrado.');
        }
    });
});

/*
document.getElementById('downloadIcon').addEventListener('click', function () {
    if (selectedDataName) {
        fetch('/Complete_Test/defeitos.txt')
            .then(response => response.text())
            .then(data => {
                // Filtrar os defeitos para o equipamento selecionado
                const today = new Date().toISOString().split('T')[0]; // Obter a data atual no formato YYYY-MM-DD
                const regex = new RegExp(`Equipamento: ${selectedDataName}`, 'gi');
                const filteredDefects = data.split('\n')
                    .filter(line => regex.test(line))
                    .join('\n');

                // Criar o conteúdo do arquivo
                const fileContent = filteredDefects.length > 0 ? filteredDefects : 'Nenhum defeito encontrado para este equipamento.';
                
                // Gerar o arquivo para download
                const blob = new Blob([fileContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${selectedDataName}_${today}.txt`; // Nome do arquivo com data-name e data
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => console.error('Erro ao ler o arquivo defeitos.txt:', error));
    } else {
        alert('Selecione um equipamento primeiro.');
    }
});
*/
document.getElementById('downloadIcon').addEventListener('click', function () {
    if (selectedDataName) {
        const today = new Date().toISOString().split('T')[0]; // Data atual no formato YYYY-MM-DD

        //URL correta para acessar o defeitos.txt do servidor
        const url = `http://10.2.22.19:3000/Complete_Test/defeitos.txt`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao acessar o defeitos.txt no servidor.');
                }
                return response.text();
            })
            .then(data => {
                // Filtrar os defeitos para o equipamento selecionado
                const regex = new RegExp(`Equipamento: ${selectedDataName}`, 'gi');
                const filteredDefects = data.split('\n')
                    .filter(line => regex.test(line))
                    .join('\n');

                // Criar o conteúdo do arquivo
                const fileContent = filteredDefects.length > 0 ? filteredDefects : 'Nenhum defeito encontrado para este equipamento.';

                // Gerar o arquivo para download
                const blob = new Blob([fileContent], { type: 'text/plain' });
                const downloadUrl = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = `${selectedDataName}_${today}.txt`; // Nome do arquivo com data-name e data
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => console.error('Erro ao ler o arquivo defeitos.txt:', error));
    } else {
        alert('Selecione um equipamento primeiro.');
    }
});

// Adicionar o event listener ao ícone de edição para abrir/fechar a caixa de texto
document.getElementById('editIcon').addEventListener('click', function () {
    var textBox = document.getElementById('text-box');
    textBox.style.display = textBox.style.display === 'none' ? 'block' : 'none';
});

// Manter a funcionalidade de salvar o defeito
document.getElementById('saveDefect').addEventListener('click', function () {
    const defectText = document.getElementById('defectInput').value;

    // Verifica se o `data-name` foi capturado
    if (!selectedDataName) {
        alert('Nenhum equipamento foi selecionado.');
        return;
    }

    // Enviar os dados para o backend para serem salvos em um arquivo .txt
    fetch('/saveDefect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: selectedDataName,  // Nome do equipamento capturado
            defect: defectText,      // Descrição do defeito
        }),
    }).then(response => {
        if (response.ok) {
            alert('Defeito salvo com sucesso!');
            document.getElementById('text-box').style.display = 'none';
            document.getElementById('defectInput').value = '';
        } else {
            alert('Erro ao salvar o defeito');
        }
    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip_download"]').tooltip();
});

