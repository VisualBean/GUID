Vue.use(Buefy.default)

var GuidGenerator = new Vue({
  el: '#GUIDGenerator',
  mounted() {
   this.GUID = this.generateUUID();
    const vm = this;
    window.addEventListener('keyup', function(event) {  
      // If down arrow was pressed...
      if (event.keyCode == 71) { 
        vm.GUID = vm.generateUUID();
      }
    });
  },
  data: {
    isUpper: false,
    withHyphen: true,
    GUID: this.generateUUID,
  },
  methods: {
    copyToClipboard(){
      this.$refs.generator.focus();
      document.execCommand("copy");
      this.$toast.open('Copied!')
    },
    createNewUUID() {
      this.GUID = this.generateUUID();
    },
    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        
        return newGuid;
    }
  },
  computed: {
   shownUUID() {
     var newGuid = this.GUID;
     if(this.isUpper === true) {
          newGuid = newGuid.toUpperCase();
        }
     if(this.withHyphen === false) {
       newGuid = newGuid.replace(/[-]/g,"");
     }
     return newGuid;
   },
  }
});