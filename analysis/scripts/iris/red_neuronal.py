from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn import metrics


def get_data():
    x, y = load_iris(return_X_y=True)
    names = load_iris().target_names

    X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.3)

    modelo = MLPClassifier(solver='lbfgs', alpha=1e-5, hidden_layer_sizes=(3, 3), random_state=1)
    modelo.fit(X_train, y_train)
    clase = modelo.predict(X_test)

    accuracy = metrics.accuracy_score(y_test, clase)

    presicion = metrics.precision_score(y_test, clase, average=None)

    recall = metrics.recall_score(y_test, clase, average=None)

    f1 = metrics.f1_score(y_test, clase, average=None)

    data = {
        "accuracy": accuracy,
        "presicion": presicion.tolist(),
        "recall": recall.tolist(),
        "f1": f1.tolist()
    }

    return data
