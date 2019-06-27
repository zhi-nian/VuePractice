<template>
  <div>
    <nav-bar title="图文分享"></nav-bar>
    <div class="photo-head">
      <ul>
        <li v-for="(item,index) in categories" :key="index">
          <a href="javascript:;" @click="navigateToById(index)">{{item.data.title}}</a>
          <!--<a href="javascript:;" @click="loadImgsById(index)">{{item.data.title}}</a>-->
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for="(img,index) in imgs" :key="index">
          <a href="#">
            <img :src="img.header" :alt="img.text">
            <p>
              <span>{{img.text}}</span>
              <br>
              <span>{{img.top_commentsContent}}</span>
            </p>
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
      methods:{
        navigateToById (id) {
            this.$router.push({
              name:'PhotoList',
              query:{categoryId:id}
            })
        },
        loadImgsById (categoryId) {
          //发起请求
          this.$axios.get('https://www.apiopen.top/satinGodApi?type=3&page=' + categoryId)
            .then(res=>{
              this.imgs = res.data.data;
            })
            .catch(err=>console.log(err));
        },
      },
      created () {
//        console.log(this.$route.query.categoryId)
        //获取分类id
        let {  categoryId  } = this.$route.query;
        this.loadImgsById(categoryId);

        //获取分类
        this.$axios.get('https://api.apiopen.top/videoCategory')
          .then(res=>{
              this.categories = res.data.result.itemList;
          })
          .catch(console.log)
      },
      data () {
          return {
            imgs:[],
            categories:[]
          }
      },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
//      console.log(to)
//      console.log(from)

      let { categoryId } = to.query;
      this.loadImgsById(categoryId);
      next();
    },
  }
</script>

<style scoped>

  ul {
    padding: 0;
    margin: 0;
  }

  .photo-list {
    height: calc(100% - 185px);
    overflow: scroll;
  }

  .photo-list a {
    width: 100%;
    display: inline-block;
    position: relative;
  }

  .photo-list img {
    width: 100%;
  }

  .photo-list p {
    position: absolute;
    top: 0;
  }

  .photo-head ul {
    display: inline-flex;
  }

  .photo-head {
    overflow: scroll;

    height: 50px;
    line-height: 50px;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    background: #f78361;
    padding: 0px 5px;
  }

  .photo-head li {
    float: left;
    margin:  0 5px;
  }
</style>
