new Vue({
    el: '#app',
    data () {
        return {
          modalHidden: true
        }
    },
    methods: {
    	showFeedback () {
    		this.modalHidden = false;
    	},
        closeFeedback () {
          this.modalHidden = true;
        }
    }
})
