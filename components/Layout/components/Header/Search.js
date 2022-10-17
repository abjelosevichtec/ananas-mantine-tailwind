import { TextInput } from "@mantine/core";

import SearchIcon from "components/assets/icons/Search";

function Search() {
  return (
    <TextInput
      classNames={{
        root: "absolute xl:relative xl:left-0 bottom-0 xl:m-0 xl:translate-y-0 translate-y-1/2 w-[calc(100%-48px)] mx-auto left-6 xl:w-[463px]",
        input:
          "rounded-lg px-6 py-4 h-auto placeholder:text-eerieBlue border-0 text-p3",
        rightSection: "right-2",
      }}
      placeholder="Unesi pojam za pretragu..."
      rightSection={<SearchIcon />}
    />
  );
}

export default Search;
