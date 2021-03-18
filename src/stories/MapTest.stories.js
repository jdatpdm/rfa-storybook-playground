import Map from './Map.vue'
export default {
    title: 'Map',
    component: Map
}

const Template = (args, { argTypes }) => ({
  //props: Object.keys(argTypes),
  components: { Map },
  template:
    '<Map />',
});

export const MapArea = Template.bind({});
