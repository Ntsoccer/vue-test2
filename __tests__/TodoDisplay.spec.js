import { shallowMount } from '@vue/test-utils';
import TodoDisplay from '@/components/TodoDisplay';

describe('TodoDisplay.vue', () => {
  it('TodoDisplayにpropsの値', () => {
    const wrapper = shallowMount(TodoDisplay, {
      propsData: {
        todos: [{
          id: 1, item: "text", state: 0
        }],
        current: -1
      }
    })
    console.log(wrapper.html())
  })
})