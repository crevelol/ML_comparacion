from sklearn.datasets import load_iris
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score, recall_score, precision_score


def get_data():
    x, y = load_iris(return_X_y=True)
    names = load_iris().target_names

    X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.3)
    modelo = KNeighborsClassifier(n_neighbors=3)
    modelo.fit(X_train, y_train)

    clase = modelo.predict(X_test)

    accuracy = modelo.score(X_test, y_test)

    # Para cada clase
    presicion = precision_score(y_test, clase, average=None)

    # Para cada clase
    recall = recall_score(y_test, clase, average=None)

    # Para cada clase
    f1 = f1_score(y_test, clase, average=None)

    data = {
        "accuracy": accuracy,
        "presicion": presicion.tolist(),
        "recall": recall.tolist(),
        "f1": f1.tolist()
    }
    return data

