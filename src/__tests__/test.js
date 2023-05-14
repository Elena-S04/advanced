import orderByProps from "../app";

test("test sort function", () => {
  const received = orderByProps(
    {
      name: "name",
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ["name", "level"]
  );

  const expected = [
    { key: "name", value: "name" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];

  expect(received).toEqual(expected);
});
