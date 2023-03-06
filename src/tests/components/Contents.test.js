import { Client } from "../../api/contentful";

describe("Contentful CMS integration", () => {
  const Entry = '5cSVru9JZ5bFyBNbLvvjfI'
  it("fetches content from Contentful", async () => {
    const entry = await Client.getEntry(Entry);
    expect(entry.fields).toBeDefined();
  });

  it("handle all values Contents", async () => {
    const entry = await Client.getEntry(Entry);
    expect(entry.fields.headerSection).toBeDefined();
    expect(entry.fields.section2).toBeDefined();
    expect(entry.fields.section3).toBeDefined();
    expect(entry.fields.section4).toBeDefined();
    expect(entry.fields.footer).toBeDefined();
    expect(entry.fields.public).toBeDefined();
  });

  it("handles errors from Contentful", async () => {
    await expect(Client.getEntry("UnExistEntry")).rejects.toThrow();
  });
});
