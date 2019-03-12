let app = new Vue({
  el : '#app',
  data: {
    title: new Date().toLocaleString(),
    message: 'color: red',
    items: [
      { text: 'JavaScript' },
      { text: 'Python' },
      { text: 'Java' },
      { text: 'Ruby' },
      { text: 'HTML/CSS' }
    ],
    info: 'sample text'
  },
  methods: {
    doAction: function () {
      this.info = this.title.split('').reverse().join('')
    }
  }
})