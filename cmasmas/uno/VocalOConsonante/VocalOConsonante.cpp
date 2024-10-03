#include <iostream>

bool isVocal(char letter) {
    int vocalCodes[10] = { 65, 69, 73, 79, 85, 97, 101, 105, 111, 117};
    for (int i : vocalCodes) {
        if (letter == i)
            return true;
    }
    return false;
}

int main() {
    char letter;
    std::cout << "Digite uma letra: ";
    std::cin >> letter;
    // Letra mayuscula
    bool uppercase = (letter >= 65 && letter <= 90);
    bool lowercase = (letter >= 97 && letter <= 122);
    if (!(uppercase || lowercase))
    {
        return 0;
    }
    if (isVocal(letter)) {
        std::cout << "Vocal ";
    }
    else {
        std::cout << "Consonante ";
    }
    return 0;
}