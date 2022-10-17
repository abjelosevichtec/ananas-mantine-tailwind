import { Text, NavLink } from "@mantine/core";

import ArrowRight from "components/assets/icons/ArrowRight";

import data from "./data.json";

function Categories() {
  return (
    <div className="px-4">
      <NavLink
        classNames={{
          root: "rounded-lg hover:!bg-redOrange",
          rightSection: "mr-2",
        }}
        active
        variant="filled"
        label={
          <Text className="px-2 py-1 text-white text-b6 ">Sve kategorije</Text>
        }
        childrenOffset={8}
        rightSection={<ArrowRight color="white" />}
      >
        {data.categories.map((cat, index) => (
          <NavLink
            key={index}
            classNames={{
              root: "is-expanded:text-redOrange text-eerieBlack",
              rightSection: "stroke-1 stroke-current text-eerieBlack",
              children: "bg-white",
            }}
            label={<Text className="text-b6">{cat.title}</Text>}
          >
            {cat.children.map((child) => (
              <>
                <NavLink label={<Text className="text-b6">{child}</Text>} />
              </>
            ))}
          </NavLink>
        ))}
      </NavLink>
    </div>
  );
}

export default Categories;
