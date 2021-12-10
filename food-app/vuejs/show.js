// vuejs/show.js
const Show={
    props:["hash"],
    data(){return {windowHash: window.location.hash}},
        mounted(){
            this.listener= e=> {
            this.windowHash=window.location.hash;

            }
            window.addEventListener("hashchange", this.listener);
        },
        destroyed(){
            window.removeEventListener("hashchange", this.listener);
        },
        render(h){
           this.windowHash;  // mention to force re-render!
           return this.hash === window.location.hash?h("div", {}, this.$slots.default) : false;
        }
    };
