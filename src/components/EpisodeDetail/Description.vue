<template>
  <div class="w-full p-5 mb-5 bg-white rounded shadow-lg">
    <h2
      class="mb-5 text-2xl font-medium text-center text-gray-500 sm:text-left"
    >
      本集概述
    </h2>
    <div
      class="flex flex-col items-center justify-center h-full text-center  sm:flex-row sm:justify-start sm:text-left"
    >
      <p class="break-all whitespace-pre-line">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  setup() {},
}
</script>

<style></style>
