from sklearn.datasets import load_iris
from analysis.scripts.iris.knn import get_data as kn
from analysis.scripts.iris.naive_bayes import get_data as bayes
from analysis.scripts.iris.random_forest import get_data as rf
from analysis.scripts.iris.red_neuronal import get_data as rn
from analysis.scripts.iris.regresion_logistica import get_data as rl
from analysis.scripts.iris.svm import get_data as svm

import json

names = load_iris().target_names
knn = kn()
naive_bayes = bayes()
random_forest = rf()
red_neuronal = rn()
regresion_logistica = rl()
svm = svm()

data = {
    "classes": names.tolist(),
    "knn": knn,
    "naive_bayes": naive_bayes,
    "random_forest": random_forest,
    "red_neuronal": red_neuronal,
    "regresion_logistica": regresion_logistica,
    "svm": svm
}

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
