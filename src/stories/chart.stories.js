import Serpantine from './Serpantine.vue'

export default {
    title: 'Serpantine',
    component: Serpantine
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Serpantine },
  template:
    '<Serpantine />',
});

export const Chart = Template.bind({});
