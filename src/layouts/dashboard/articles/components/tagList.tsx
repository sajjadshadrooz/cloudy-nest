import { useEffect, useState } from "react";

import { Checkbox } from "@/components/checkbox/checkbox";
import { Field } from "@/components/field/field";
import { Input } from "@/components/input/input";
import { useTagAPI } from "@/services/hooks/articles/tag";
import { postTagsAPI } from "@/services/api/tag";

export const TagsList = ({
  values,
  setFieldValue,
}: {
  values: any;
  setFieldValue: any;
}) => {
  const { getTags, postTags } = useTagAPI();

  const [load, setLoad] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;

    setTags((prev) => [...prev, inputValue].sort());
    setFieldValue("tags", [...values.tags, inputValue]);
    setInputValue("");
  };

  const getDataFromServer = async () => {
    const data = await getTags();
    setTags(data.sort());
  };

  useEffect(() => {
    if (load) getDataFromServer();
    setLoad(false);
  }, [load]);

  return (
    <div className="col-span-1 p-6 bg-white rounded-lg flex flex-col gap-6 h-fit">
      <Field label="Tags">
        <Input
          placeholder="New tag"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
      </Field>
      <div className="p-4 flex flex-col gap-2 border border-neutral-default-3 rounded-xl">
        {tags.map((item, index) => {
          return (
            <Checkbox
              checked={values.tags.includes(item)}
              onChange={() => {
                if (values.tags.includes(item)) {
                  setFieldValue(
                    "tags",
                    values.tags.filter((itm: string) => itm !== item)
                  );
                } else {
                  setFieldValue("tags", [...values.tags, item]);
                }
              }}
              key={index}
              label={item}
            />
          );
        })}
      </div>
    </div>
  );
};
