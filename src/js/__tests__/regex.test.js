import Validator from "../regex";


describe('Validator', () => {
    const validator = new Validator();

    // Проверка правильного имени пользователя
    test('Valid username', () => {
        expect(validator.validateUsername('user_name')).toBe(true);
    });

    // Проверка имени пользователя, начинающегося с цифры
    test('Invalid username starting with a digit', () => {
        expect(validator.validateUsername('1username')).toBe(false);
    });

    // Проверка имени пользователя с двумя подряд символами тире
    test('Invalid username with two consecutive dashes', () => {
        expect(validator.validateUsername('user--name')).toBe(false);
    });

    // Проверка имени пользователя, содержащего более трех цифр подряд
    test('Invalid username with more than three consecutive digits', () => {
        expect(validator.validateUsername('user1234')).toBe(false);
    });

    // Проверка имени пользователя, заканчивающегося символом тире
    test('Invalid username ending with a dash', () => {
        expect(validator.validateUsername('username-')).toBe(false);
    });
});
