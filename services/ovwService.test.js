const {ovwService, ovwHeroes} = require("./ovwService");

jest.mock("./ovwService")

describe("Overwatch Test", () => {
    test('As a user I should return all of the overwatch characters', async () => {
        const result = await ovwService();
        expect(result.data).toHaveLength(37)
    });
});

describe("Overwatch Heroes Test", () => {
    test('As a user I should return the requested hero', async () => {
        const result = await ovwHeroes('ana');
        expect(result.data.name).toEqual("Ana");
    });
});
