var ctx = document.getElementById('wine-chart');
var ctx2 = document.getElementById('wine-pre0');
var ctx3 = document.getElementById('wine-pre1');
var ctx4 = document.getElementById('wine-pre2');

var ctx5 = document.getElementById('wine-rec0');
var ctx6 = document.getElementById('wine-rec1');
var ctx7 = document.getElementById('wine-rec2');

var ctx8 = document.getElementById('wine-f0');
var ctx9 = document.getElementById('wine-f1');
var ctx10 = document.getElementById('wine-f2');

var data;
fetch('/static/data/wine/data.json')
    .then(res => res.json())
    .then(wine => {

        data = wine;

        var accuracy = {
            labels: ['ACCURACY'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.accuracy],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.accuracy],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.accuracy],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.accuracy],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.accuracy],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.accuracy],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };

        var precision0 = {
            labels: ['PRECISION CULTIVO 1'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.presicion[0]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.presicion[0]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.presicion[0]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.presicion[0]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.presicion[0]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.presicion[0]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };


        var precision1 = {
            labels: ['PRECISION CULTIVO 2'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.presicion[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.presicion[1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.presicion[1]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.presicion[1]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.presicion[1]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.presicion[1]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };

        var precision2 = {
            labels: ['PRECISION CULTIVO 3'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.presicion[2]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.presicion[2]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.presicion[2]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.presicion[2]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.presicion[2]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.presicion[2]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };


        var recall0 = {
            labels: ['RECALL CULTIVO 1'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.recall[0]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.recall[0]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.recall[0]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.recall[0]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.recall[0]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.recall[0]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };

        var recall1 = {
            labels: ['RECALL CULTIVO 2'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.recall[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.recall[1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.recall[1]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.recall[1]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.recall[1]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.recall[1]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };

        var recall2 = {
            labels: ['RECALL CULTIVO 3'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.recall[2]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.recall[2]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.recall[2]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.recall[2]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.recall[2]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.recall[2]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };


        var f0 = {
            labels: ['F-MEASURE CULTIVO 1'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.f1[0]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.f1[0]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.f1[0]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.f1[0]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.f1[0]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.f1[0]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };

        var f1 = {
            labels: ['F-MEASURE CULTIVO 2'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.f1[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.f1[1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.f1[1]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.f1[1]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.f1[1]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.f1[1]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };

        var f2 = {
            labels: ['F-MEASURE CULTIVO 3'],
            datasets: [{
                    label: 'KNN',
                    data: [wine.knn.f1[2]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [wine.random_forest.f1[2]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [wine.naive_bayes.f1[2]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [wine.regresion_logistica.f1[2]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [wine.red_neuronal.f1[2]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [wine.svm.f1[2]],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        };


        var opt = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 1
                    }
                }]
            }
        };





        var pre1 = new Chart(ctx3, {
            type: 'bar',
            data: precision1,
            options: opt
        })


        var pre2 = new Chart(ctx4, {
            type: 'bar',
            data: precision2,
            options: opt
        })

        var rec0 = new Chart(ctx5, {
            type: 'bar',
            data: recall0,
            options: opt
        })
        var rec1 = new Chart(ctx6, {
            type: 'bar',
            data: recall1,
            optkions: opt
        })

        var rec2 = new Chart(ctx7, {
            type: 'bar',
            data: recall2,
            options: opt
        })

        var fc0 = new Chart(ctx8, {
            type: 'bar',
            data: f0,
            options: opt
        })

        var fc1 = new Chart(ctx9, {
            type: 'bar',
            data: f1,
            options: opt
        })

        var fc2 = new Chart(ctx10, {
            type: 'bar',
            data: f2,
            options: opt
        })

        var AC = new Chart(ctx, {
            type: 'bar',
            data: accuracy,
            options: opt
        })

        var pre0 = new Chart(ctx2, {
            type: 'bar',
            data: precision0,
            options: opt
        })





    });