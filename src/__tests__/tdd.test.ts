describe("palindromeChecker", () => {
    it("should return true for a palindrome", () => {
        expect(palindromeChecker("tacocat")).toBeTruthy()
        expect(palindromeChecker("racecar")).toBeTruthy()
        expect(palindromeChecker("   Level ")).toBeTruthy()
    });
    it("should return false for non-palindromes", () => {
        expect(palindromeChecker("killua")).toBeFalsy()
        expect(palindromeChecker("realize")).toBeFalsy()
    })
})

function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
  }


