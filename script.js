new Vue({
    el: '#app',
    data: function() {
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
