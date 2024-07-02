import { describe, expect, test } from "vitest";

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
type StringOrNumber = string | number;
const add = (a: StringOrNumber, b: StringOrNumber): StringOrNumber => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Parameters must be both numbers or both strings");
  }
};

describe("Tests de la fonction fibonacci", () => {
  test("fibonacci de 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  test("fibonacci de 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  test("fibonacci de 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  test("fibonacci de 3", () => {
    expect(fibonacci(3)).toBe(2);
  });

  test("fibonacci de 4", () => {
    expect(fibonacci(4)).toBe(3);
  });

  test("fibonacci de 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  test("fibonacci de 6", () => {
    expect(fibonacci(6)).toBe(8);
  });
});

describe("Tests de la fonction add", () => {
  test("add de deux nombres", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("add de deux chaînes", () => {
    expect(add("hello", " world")).toBe("hello world");
  });

  test("add lève une erreur si les paramètres sont de type différent", () => {
    expect(() => add(1, "2")).toThrow(
      "Parameters must be both numbers or both strings"
    );
  });

  test("add lève une erreur si les paramètres sont de type différent", () => {
    expect(() => add("2", 2)).toThrow(
      "Parameters must be both numbers or both strings"
    );
  });
});
