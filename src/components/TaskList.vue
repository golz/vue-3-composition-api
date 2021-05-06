<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md max-w-lg mx-auto p-6 mb-6">
    <div class="flow-root">
      <ul class="-mb-8" v-if="tasks.length > 0">
      <li v-for="(task, key) in tasks" :key="task.id">
        <div class="relative pb-8">
          <span v-if="(key !== tasks.length - 1)" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span class="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
                <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-sm text-gray-900 font-medium">
                  {{ task.name }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ task.description }}
                </p>
              </div>
              <div class="text-right text-sm whitespace-nowrap text-gray-500">
                <time :datetime="task.date">{{ task.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
      <div v-else class="text-gray-500 justify-center items-center flex">
        Belum ada task nih, enjoy your day 🤣
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'

export default {
  props: ['tasks'],
  components: { CheckIcon }
}
</script>
