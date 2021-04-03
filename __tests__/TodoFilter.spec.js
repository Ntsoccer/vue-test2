import { shallowMount } from '@vue/test-utils';
import TodoFilter from '@/components/TodoFilter';

describe('TodoFilter.vue', () => {
  it.only('TodoDisplayにpropsの値', () => {
    const wrapper = shallowMount(TodoFilter, {
      data() {
        return {
          current: -1
        }
      }
    })
    console.log(wrapper.html())
  })
})