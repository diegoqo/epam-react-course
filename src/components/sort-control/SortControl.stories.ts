import { SortControl } from "./SortControl";

export default {
  title: "SortControl",
  component: SortControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const WithInitialValue = {
  args: {
    initialValue: "releaseDate",
    handleChangeSort: () => console.log("Storybook"),
  },
};
