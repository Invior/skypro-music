import renderer from "react-test-renderer";
import { CurrentTimeBlock } from "./CurrentTimeBlock";

describe("Компонент Navigation", () => {
  it("Должен отрендерить логотип", () => {
    const testResult = renderer
      .create(<CurrentTimeBlock currentTime={2.377663} duration={135.444898} />)
      .toJSON();

    expect(testResult).toMatchSnapshot();
  });
});
