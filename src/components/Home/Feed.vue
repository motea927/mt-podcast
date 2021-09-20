<template>
  <section
    class="
      container
      mx-auto
      flex
      p-5
      md:flex-row md:items-start
      flex-col
      items-center
      bg-[#294C60]
      text-white
      rounded
      shadow-lg
    "
  >
    <div class="w-48 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" :src="image" />
    </div>
    <div
      class="
        lg:flex-grow
        md:w-1/2
        lg:pl-24
        md:pl-16
        flex flex-col
        md:items-start md:text-left
        items-center
        text-center
      "
    >
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
        {{ title }}
      </h1>
      <h2 class="mb-5 flex justify-start items-center">
        <svg
          class="w-5 h-5 text-white mr-2"
          t="1631894931945"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3143"
          width="128"
          height="128"
        >
          <path
            d="M998.4 972.8a51.2 51.2 0 1 1-102.4 0c0-197.568-160.832-358.4-358.4-358.4a358.848 358.848 0 0 0-358.4 358.4 51.2 51.2 0 1 1-102.4 0c0-187.776 113.024-349.312 274.368-421.12-74.24-56-123.072-144.256-123.072-244.48a307.2 307.2 0 0 1 614.4 0c0 99.456-48 187.008-121.408 243.2 163.008 71.04 277.312 233.536 277.312 422.4zM535.296 102.4a205.056 205.056 0 0 0-204.8 204.8c0 112.96 91.904 204.8 204.8 204.8 112.96 0 204.8-91.84 204.8-204.8 0-112.96-91.84-204.8-204.8-204.8z"
            fill="currentcolor"
            p-id="3144"
          ></path>
        </svg>
        {{ author }}
      </h2>
      <p class="mb-8 leading-relaxed whitespace-pre-wrap">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
