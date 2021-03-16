import TextInput from './TextInput.vue';

export default {
    title:'Example / Inputs / Text Input',
    component: TextInput
}

// Tempate to use

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: { TextInput },
    template: '<div class="w-1/3"><TextInput v-bind="$props" /></div>'
})

export const primary = Template.bind({});
primary.args = {
    label: 'Company Name',
    name: 'Jordan'
}