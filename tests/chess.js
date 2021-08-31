"use strict";

QUnit.module("Тестируем функцию chess", function () {
    QUnit.test("Шахматной доски 1 на 1 не бывает", function (assert) {
        assert.strictEqual(chess(1), null);
        assert.strictEqual(chess("1"), null);
    });

    QUnit.test("Шахматная доска 2 на 2", function (assert) {
        const expected = "* \n" + " *\n";
        assert.strictEqual(chess(2), expected);
        assert.strictEqual(chess("2"), expected);
    });

    QUnit.test("Шахматная доска 3 на 3", function (assert) {
        const expected = "* *\n" + " * \n" + "* *\n";
        assert.strictEqual(chess(3), expected);
        assert.strictEqual(chess("3"), expected);
    });

    QUnit.test("Шахматная доска 4 на 4", function (assert) {
        const expected = "* * \n" + " * *\n" + "* * \n" + " * *\n";
        assert.strictEqual(chess(4), expected);
        assert.strictEqual(chess("4"), expected);
    });

    QUnit.test("Шахматная доска 5 на 5", function (assert) {
        const expected = "* * *\n" + " * * \n" + "* * *\n" + " * * \n" + "* * *\n";
        assert.strictEqual(chess(5), expected);
        assert.strictEqual(chess("5"), expected);
    });

    QUnit.test("Шахматная доска 8 на 8", function (assert) {
        const expected =
            "* * * * \n" +
            " * * * *\n" +
            "* * * * \n" +
            " * * * *\n" +
            "* * * * \n" +
            " * * * *\n" +
            "* * * * \n" +
            " * * * *\n";
        assert.strictEqual(chess(8), expected);
        assert.strictEqual(chess("8"), expected);
    });

    QUnit.test("Неверные входные параметры", function (assert) {
        const expected = null;
        assert.strictEqual(chess("i am not valid :C"), expected);
        assert.strictEqual(chess(null), expected);
        assert.strictEqual(chess(Object), expected);
    });
});
