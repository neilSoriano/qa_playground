/** gets a number between 1 and 10 for the callback
 * @callback numberHandler is passed the number generated
 */
 function getNumber(numberHandler) {
    numberHandler(Math.ceil(Math.random() * 10));
  }

  function numberHandler(num : number) {
    expect(num >= 1).toBeTruthy();
    expect(num <= 10).toBeTruthy();
    expect(num == 0).toBeFalsy();
  }

  describe("getNumber", () => {
    it("should be true with a named callback", () => {
      getNumber(numberHandler);
    });
  });
