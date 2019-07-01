<template>
  <div class="tmpl">
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评论</span>
            <span><a @click="goBack">返回</a></span>
          </div>
        </li>
        <li class="txt-comment">
          <textarea v-model="content"></textarea>
        </li>
        <li>
          <mt-button type="primary" size="large" @click="sendMsg">发表评论</mt-button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>{{ msg.length }}条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-if="msg.length > 0" v-for="(item , index) in msg" :key="index">
          {{ item.user.username }}:{{ item.content }} {{ item.ctime | relTime }}
        </li>
        <li v-else>
          暂无评论
        </li>
      </ul>
      <mt-button type="danger" size="large" plain @click="loadMsgByPage" :disabled="isDisabled">加载更多</mt-button>

    </div>
  </div>
</template>
<script>

  export default {
      name:'comment',
      props:['sid'],
      data () {
          return {
            content:'',
            msg:[],
            page:1,
            isDisabled:false
          }
      },
      methods:{
        goBack () {
          this.$router.go(-1)
        },
          init () {
            this.page = 1;
            this.isDisabled = false;
          },
        sendMsg () {
            //由于没有对应的借口 这里暂时不做处理
          console.log('评论的内容:'+this.content);
          //提交后获取最新数据
          this.init();
          this.loadMsgByPage();
        },
        loadMsgByPage () {
          this.$axios.get('https://www.apiopen.top/satinCommentApi?id='+ this.sid +'&page=' + this.page)
            .then(res => {

                //弄一个假的没有更多数据
              if (res.data.data.normal.list.length < 10 && this.page !=1) {

                  this.$toast({
                    message: '没有更多数据了',
                  });
                  this.isDisabled = true;

                  return
              }


              if (this.page === 1) {//如果是第一页  说明是赋值   并不是点击了加载更多
                this.msg = res.data.data.normal.list;
              } else {//点击了加载更多
                this.msg = this.msg.concat(res.data.data.normal.list);
              }
              this.page++;
            })
            .catch(console.log);

        }
      },
      created () {
        this.loadMsgByPage();
      }
  }

</script>
<style scoped>

  .tmpl {
    margin-bottom: 54px;
  }

  .photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
  }

  .photo-comment > div span:nth-child(2) {
    float: right;
  }

  .photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
  }

  .txt-comment {
    padding: 5px;
  }

  .txt-comment textarea {
    margin-bottom: 5px;
  }

  .comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  textarea {
    width: 100%;
  }
</style>
