<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md max-w-lg mx-auto p-6">
    <h2 class="text-center text-2xl font-extrabold text-gray-900">
      Task form
    </h2>
    <form class="mt-8 space-y-6" @submit.prevent="createTask">
      <div>
        <label for="task-name" class="block text-sm font-medium text-gray-700">Task name</label>
        <input type="text"
               name="task-name"
               id="task-name"
               v-model="name"
               class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
               placeholder="Bugfix/BM-1945" />
      </div>
      <div>
        <label for="task-description" class="block text-sm font-medium text-gray-700">Task description</label>
        <textarea class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  id="task-description"
                  name="task-description"
                  v-model="description"
                  placeholder="Fix pyeongyang subscription..."></textarea>
      </div>
      <div v-if="error" class="block text-sm font-medium text-red-700">
        {{ error }}
      </div>
      <div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup (props, { emit }) {
    const name = ref('')
    const description = ref('')
    const valid = ref(true)
    const error = ref('')

    watch(valid, (value) => {
      if (!value) error.value = 'Ada error gan'
      else error.value = ''
    })

    function createTask () {
      valid.value = true
      if (name.value === '' || description.value === '') {
        valid.value = false
        return
      }
      // this.$emit('create-task', { name: this.name, description: this.description })
      emit('create-task', { name: name.value, description: description.value })
      this.reset()
    }
    function reset () {
      name.value = ''
      description.value = ''
    }

    return {
      name,
      description,
      valid,
      error,
      // method
      createTask,
      reset
    }
  }
  // data () {
  //   return {
  //     name: '',
  //     description: '',
  //     valid: true,
  //     error: ''
  //   }
  // },
  // methods: {
  //   createTask () {
  //     this.valid = true
  //     if (this.name === '' || this.description === '') {
  //       this.valid = false
  //       return
  //     }
  //     this.$emit('create-task', { name: this.name, description: this.description })
  //     this.reset()
  //   },
  //   reset () {
  //     this.name = ''
  //     this.description = ''
  //   }
  // },
  // watch: {
  //   valid (valid) {
  //     if (!valid) this.error = 'Ada error gan'
  //     else this.error = ''
  //   }
  // }
}
</script>
