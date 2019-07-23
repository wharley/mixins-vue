const getAPI = () => ({
  pods: [
    { id: 'one'},
    { id: 'two' },
    { id: 'three' }
  ],
  manufacturers: [
    { id: 'ones'},
    { id: 'twos' },
    { id: 'threes' }
  ]
})

const withFetch = {
  data() {
    return {
      loading: false,
      items: []
    }
  },
  methods: {
    getData(type) {
      this.loading = true;
      this[type] = getAPI()[type];
      this.loading = false;
    }
  }
}

export default withFetch;