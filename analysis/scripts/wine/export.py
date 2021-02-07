from analysis.scripts.wine.knn import get_data as kn
from analysis.scripts.wine.naive_bayes import get_data as bayes
from analysis.scripts.wine.random_forest import get_data as rf
from analysis.scripts.wine.red_neuronal import get_data as rn
from analysis.scripts.wine.regresion_logistica import get_data as rl
from analysis.scripts.wine.svm import get_data as svm
from sklearn.datasets import load_wine

import json

names = load_wine().target_names
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
