var ctx = document.getElementById('iris-chart');
var ctx2 = document.getElementById('iris-pre0');
var ctx3 = document.getElementById('iris-pre1');
var ctx4 = document.getElementById('iris-pre2');

var ctx5 = document.getElementById('iris-rec0');
var ctx6 = document.getElementById('iris-rec1');
var ctx7 = document.getElementById('iris-rec2');

var ctx8 = document.getElementById('iris-f0');
var ctx9 = document.getElementById('iris-f1');
var ctx10 = document.getElementById('iris-f2');

var data;
fetch('/static/data/iris/data.json')
    .then(res => res.json())
    .then(iris => {
        data = iris;
        var accuracy = {
            labels: ['ACCURACY'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.accuracy],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.accuracy],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.accuracy],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.accuracy],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.accuracy],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.accuracy],
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
            labels: ['PRECISION SETOSA'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.presicion[0]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.presicion[0]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.presicion[0]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.presicion[0]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.presicion[0]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.presicion[0]],
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
            labels: ['PRECISION VERSICOLOR'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.presicion[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.presicion[1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.presicion[1]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.presicion[1]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.presicion[1]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.presicion[1]],
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
            labels: ['PRECISION VIRGINICA'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.presicion[2]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.presicion[2]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.presicion[2]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.presicion[2]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.presicion[2]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.presicion[2]],
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
            labels: ['RECALL SETOSA'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.recall[0]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.recall[0]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.recall[0]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.recall[0]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.recall[0]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.recall[0]],
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
            labels: ['RECALL VERSICOLOR'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.recall[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.recall[1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.recall[1]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.recall[1]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.recall[1]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.recall[1]],
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
            labels: ['RECALL VIRGINICA'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.recall[2]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.recall[2]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.recall[2]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.recall[2]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.recall[2]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.recall[2]],
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
            labels: ['F-MEASURE SETOSA'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.f1[0]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.f1[0]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.f1[0]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.f1[0]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.f1[0]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.f1[0]],
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
            labels: ['F-MEASURE VERSICOLOR'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.f1[1]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.f1[1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.f1[1]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.f1[1]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.f1[1]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.f1[1]],
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
            labels: ['F-MEASURE VIRGINICA'],
            datasets: [{
                    label: 'KNN',
                    data: [iris.knn.f1[2]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RANDOM FOREST',
                    data: [iris.random_forest.f1[2]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'NAIVE BAYES',
                    data: [iris.naive_bayes.f1[2]],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'REGRESIÓN LOGISTICA',
                    data: [iris.regresion_logistica.f1[2]],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'RED NEURONAL',
                    data: [iris.red_neuronal.f1[2]],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }, {
                    label: 'MÁQUINA DE SOPORTE VECTORIAL',
                    data: [iris.svm.f1[2]],
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