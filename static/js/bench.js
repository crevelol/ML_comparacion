var marksCanvas = document.getElementById("bench-chart");

fetch('/static/data/wine/data.json')
    .then(res => res.json())
    .then(wine => {
        fetch('/static/data/iris/data.json')
            .then(res => res.json())
            .then(iris => {
                var marksData = {
                    labels: ["KNN", "RANDOM FOREST", "NAIVE BAYES", "REGRESIÓN LOGISTICA", "RED NEURONAL", "MÁQUINA DE SOPORTE VECTORIAL"],
                    datasets: [{
                        label: "IRIS DATASET",
                        backgroundColor: "rgba(200,0,0,0.2)",
                        borderColor: "RED",
                        radius: 6,
                        pointRadius: 6,
                        pointBorderWidth: 3,
                        pointBackgroundColor: "orange",
                        pointBorderColor: "rgba(200,0,0,0.6)",
                        pointHoverRadius: 10,
                        data: [iris.knn.accuracy, iris.random_forest.accuracy, iris.naive_bayes.accuracy, iris.regresion_logistica.accuracy, iris.red_neuronal.accuracy, iris.svm.accuracy]
                    }, {
                        label: "WINE DATASET",
                        backgroundColor: "rgba(0,0,200,0.2)",
                        borderColor: "rgba(0,0,200,0.6)",
                        radius: 6,
                        pointRadius: 6,
                        pointBorderWidth: 3,
                        pointBackgroundColor: "cornflowerblue",
                        pointBorderColor: "rgba(0,0,200,0.6)",
                        pointHoverRadius: 10,
                        data: [wine.knn.accuracy, wine.random_forest.accuracy, wine.naive_bayes.accuracy, wine.regresion_logistica.accuracy, wine.red_neuronal.accuracy, wine.svm.accuracy]
                    }]
                };
                var chartOptions = {
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 1,
                            stepSize: 0.2,
                        },
                        pointLabels: {
                            fontSize: 14
                        }
                    }
                };

                var radarChart = new Chart(marksCanvas, {
                    type: 'radar',
                    data: marksData,
                    options: chartOptions,
                });
            });

    });