import { shallowMount } from '@vue/test-utils';
import TodoInput from '@/components/TodoInput'

it.only("toggeleChecked", () => {
  const wrapper = shallowMount(TodoInput, {
    data() {
      return {
        todos: [{ id: 1, item: "text", state: 0 }]
      }
    }
  })
  console.log(wrapper.html())
})
