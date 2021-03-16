import Serpantine from './Serpantine.vue'
import amber from '../../public/img/ratings/amber.png'

let images = []
images.push(amber)

console.log(images)
export default {
    title: 'Serpantine',
    component: Serpantine,
    argTypes: {
      images: [...images],
    },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Serpantine },
  template:
    '<Serpantine v-bind="$props" />',
});

export const Chart = Template.bind({});
