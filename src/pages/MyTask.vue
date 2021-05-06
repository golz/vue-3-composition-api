<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mb-10">
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to manage your task
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p>
      </div>

      <TaskList
        :tasks="filteredSubscriptionTasks"/>

      <CreateTaskForm
        @create-task="createTask" />
    </div>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue'
import CreateTaskForm from '@/components/CreateTaskForm.vue'

export default {
  components: {
    TaskList,
    CreateTaskForm
  },
  data () {
    return {
      tasks: []
    }
  },
  computed: {
    filteredSubscriptionTasks () {
      return this.tasks.filter(t => t.name.includes("BM-"))
    }
  },
  methods: {
    createTask ({ name, description }) {
      const task = {
        date: new Date().toLocaleDateString(),
        name: name,
        description: description
      }
      this.tasks.push(task)
      console.log(this.tasks)
    }
  }
}
</script>
