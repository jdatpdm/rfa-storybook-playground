<template>
  <div class="flex flex-col">
    <label
      class="text-sm text-gray-900"
      for=""
    >{{ label }} <span
        class="text-red-600"
        v-if="required"
      >*</span></label> - <span>{{name}}</span>
    <input
      type="text"
      class="h-10 pl-3 mt-2 border rounded hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-transparent"
    >
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    label: {
      type: String,
      required: true,
      default: "Label",
    },
    required: {
      type: Boolean,
    },
    name: {
      type: String,
      default: "Jordan",
    },
  },
};
</script>

<style>
</style>