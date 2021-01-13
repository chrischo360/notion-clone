import { createTestContext } from "./__helpers";

const ctx = createTestContext();

it("ensures that a page can be created and published", async () => {
    const pageResult = await ctx.client.request(`            # 1
    mutation {
        createPage(title: "Nexus", cover: "...", emoji: "...") {
            id
            title
            cover
            emoji
        }
    }
  `);

    expect(pageResult).toMatchInlineSnapshot(`
    Object {
      "createPage": Object {
        "cover": "...",
        "emoji": "...",
        "id": 1,
        "title": "Nexus",
      },
    }
  `);

    const persistedData = await ctx.db.page.findMany();
    expect(persistedData).toMatchInlineSnapshot();
});
