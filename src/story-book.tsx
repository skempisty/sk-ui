import {TextInput} from "./components/text-input";
import {useState} from "react";

export const StoryBook = () => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <TextInput
        label='Test'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  )
}