import { Google } from 'grafana-ui';

describe("test", () => {

  it("should work", () => {
    expect(new Google().hello()).toBe("hello");
  });

});
