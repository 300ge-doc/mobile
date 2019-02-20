---
asdfasdf
---



<script>
export default {
methods:{
dianji(){
    console.log("点了")
    console.log(this.$site.themeConfig.categories,
this.$site.themeConfig.favorites)
console.log(this.$site)

}
},
  mounted () {
    console.log("Asdfasd")
  },
  computed:{
    pages(){
    return this.$site.pages
    }
  }
}
</script>

<template>
    <div class="demo-button">
        <div v-for="item in pages">
        <router-link :to="item.path">{{item.title}}</router-link>
        </div>
    </div>
</template>
