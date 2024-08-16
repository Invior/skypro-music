import { timeFormat } from "./helpers"

describe ('Функция форматирования времени', () => {
    it ('Правильно форматирует число в строку', () => {
        const result = timeFormat(0);
        expect(result).toBe('0:00');
    });
});