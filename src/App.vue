<template lang="pug">
  el-container.py-3(direction="vertical")    
    el-header
      el-dialog(title="YouTube頻道整理器" :visible.sync="welcomePage" fullscreen)
        h1.text-center 歡迎使用YouTube頻道整理器
        h3.text-center 這個小工具可以幫助分類您訂閱的頻道
        h3.text-center *此工具不會回傳任何您的個人資料至網路，請安心使用
        .text-center 
          el-button(@click="oauthSignIn") 登入YouTube授權

      el-button(@click="allSubscriptions=true") 顯示訂閱列表
      el-dialog(title="訂閱列表" :visible.sync="allSubscriptions" width="80%" top="5vh")
        .row
          .col
            el-button.m-2(@click="(subscriptItems=[]);getSubscript('')" type="primary" plain) 取得/更新列表
            | 數量：{{subscriptItems.length}}
        el-card          
          .row
            .col-auto.py-3(v-for="val,id in subscriptItems" :key="id")
              el-popover(placement="top-start"
              :title="val.snippet.title"
              width="200"
              trigger="hover")
                el-link(:href="'https://www.youtube.com/channel/'+val.snippet.resourceId.channelId" type="primary" target="_blank") 開啟頻道連結
                div(style="max-height:150px;overflow: auto;") {{val.snippet.description}}
                el-avatar(:src="val.snippet.thumbnails.default.url" slot="reference")
    el-main
      .row
        .col-3(v-for="(item, index) in channelGroup")
          el-card
            div(slot="header")
              .d-flex.justify-content-between
                div {{item.title}}
                div
                  el-button.mr-1(@click="editChannelGroup(index)" type="info" size="mini" round) 編輯
                  el-popconfirm(title="確定刪除群組嗎？" @onConfirm="deleteChannelGroup(index)")
                    el-button(slot="reference" type="danger" size="mini" plain round) 刪除
            .row
              .col-auto.py-3(v-for="val,id in channelGroup[index].groupItems" :key="id")
                el-popover(placement="top-start"
                :title="val.title"
                width="200"
                trigger="hover")
                  el-link(:href="'https://www.youtube.com/channel/'+val.resourceId.channelId" type="primary" target="_blank") 開啟頻道連結
                  div(style="max-height:150px;overflow: auto;") {{val.description}}
                  el-avatar(:src="val.thumbnails.default.url" slot="reference")
            .row
              el-button.w-100(@click="getVideo(index)" icon="el-icon-video-play" type="primary" plain) 觀看影片
        .col-3(@click="(editSubscriptionsGroupIndex=-1);(editSubscriptionsGroup=true)")
          el-card.new-group-button
            el-tooltip(:value="(!welcomePage&&channelGroup.length==0)?true:false" effect="light" content="建立群組吧！" placement="right")
              i.el-icon-circle-plus
      el-dialog(:title="(editSubscriptionsGroupIndex==-1)?'新增群組':'編輯群組'"
      :visible.sync="editSubscriptionsGroup"
      width="80%"
      top="5vh"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false")
        .row
          .col-8
            .row
              .col
                el-button.m-2(@click="(subscriptItems=[]);getSubscript('')" type="primary" plain) 取得/更新列表
                | 數量：{{subscriptItems.length}}
            el-card(style="max-height:60vh;overflow: auto;")
              .row
                .col-auto.py-3(v-for="val,id in subscriptItems" :key="id" @click="select(val.snippet)")
                  el-popover(placement="top-start"
                  :title="val.snippet.title"
                  width="200"
                  trigger="hover")
                    el-link(:href="'https://www.youtube.com/channel/'+val.snippet.resourceId.channelId" type="primary" target="_blank") 開啟頻道連結
                    div(style="max-height:150px;overflow: auto;") {{val.snippet.description}}
                    el-avatar(:src="val.snippet.thumbnails.default.url" slot="reference")
          .col-4
            el-input.mb-3(v-model="editGroupName" placeholder="请输入内容" required)
                template(slot="prepend") 群組名稱：
            el-card
              div(slot="header") 選中頻道({{editDlgSelectList.length}}/10)
              .row
                .col-auto.py-3(v-for="val,id in editDlgSelectList" :key="id" @click="remove(id)")
                  el-popover(placement="top-start"
                  :title="val.title"
                  width="200"
                  trigger="hover")
                    el-link(:href="'https://www.youtube.com/channel/'+val.resourceId.channelId" type="primary" target="_blank") 開啟頻道連結
                    div(style="max-height:150px;overflow: auto;") {{val.description}}
                    el-avatar(:src="val.thumbnails.default.url" slot="reference")
            el-button.mt-3(type="success" plain @click="saveGroup()") 儲存
            el-button.mt-3(type="danger" plain @click="(editGroupName='');(editSubscriptionsGroup=false);(editDlgSelectList=[])") 不儲存
      el-dialog(title="觀看影片" :visible.sync="videoListDlg" width="80%" top="5vh")
        el-card
          .row
            .col-2(v-for="val,id in videoList" :key="id")
              el-card
                el-tag.mb-1(type="danger" size="mini") {{moment(val.publishedAt).fromNow()}}
                a(:href="'https://www.youtube.com/watch?v='+val.resourceId.videoId" target="_blank")
                  img.w-100(:src="val.thumbnails.standard.url")
                  div {{val.title}}
                  div {{moment(val.publishedAt).format('YYYY-MM-DD hh:mm')}}
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import Vue from "vue";
import axios from "axios";
import moment from "moment";

export default Vue.extend({
  name: "app",
  components: {},
  data() {
    const videoList: any[] = [];
    const groupPlaylist: string[] = [];
    const channelGroup: any[] = [];
    const subscriptItems: any[] = [];
    const editDlgSelectList: any[] = [];
    return {
      moment,
      welcomePage: false,
      videoListDlg: false,
      allSubscriptions: false,
      editSubscriptionsGroup: false,
      editSubscriptionsGroupIndex: -1,
      editDlgSelectList,
      editGroupName: "",
      channelGroup,
      subscriptItems,
      groupPlaylist,
      videoList,
      apiUrl: "https://www.googleapis.com/youtube/v3/",
      appKey: "AIzaSyAeVBh05wd_KIecntjV8vdNZmt_FEAaQlo",
      access_token: "",
      clientID:
        "980157943798-muko6d7qpq95ksdean0671ehh77687tu.apps.googleusercontent.com"
    };
  },
  watch: {
    subscriptItems: {
      handler: nv => {
        localStorage.setItem("subscriptItems", JSON.stringify(nv));
      },
      deep: true
    },
    channelGroup: {
      handler: nv => {
        localStorage.setItem("channelGroup", JSON.stringify(nv));
      },
      deep: true
    }
  },
  created() {
    moment.locale("zh-tw");
    const url = new URL(location.href);
    const hash = url.hash
      .split("&")
      .reduce((acc: { [k: string]: string }, cur: string) => {
        const keyVal = cur.split("=");
        acc[keyVal[0]] = keyVal[1];
        return acc;
      }, {});
    if (hash.access_token) this.access_token = hash.access_token;
    const subscriptItems = localStorage.getItem("subscriptItems");
    const channelGroup = localStorage.getItem("channelGroup");
    this.subscriptItems = subscriptItems ? JSON.parse(subscriptItems) : [];
    this.channelGroup = channelGroup ? JSON.parse(channelGroup) : [];
    this.welcomePage = this.access_token == "" ? true : false;
    if (!this.welcomePage && this.subscriptItems.length == 0)
      this.getSubscript("");
  },
  methods: {
    oauthSignIn() {
      // Google's OAuth 2.0 endpoint for requesting an access token
      const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      const form = document.createElement("form");
      form.setAttribute("method", "GET"); // Send as a GET request.
      form.setAttribute("action", oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      const params: { [T: string]: string } = {
        client_id: this.clientID,
        redirect_uri: process.env.VUE_APP_API_REDIRECT_URI,
        response_type: "token",
        scope: "https://www.googleapis.com/auth/youtube.readonly",
        include_granted_scopes: "true",
        state: "pass-through value"
      };

      // Add form parameters as hidden input values.
      for (const p in params) {
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", p);
        input.setAttribute("value", params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
    },
    getSubscript(page: string) {
      const params = {
        key: this.appKey,
        part: "id,snippet,contentDetails,subscriberSnippet",
        mine: "true",
        maxResults: "50",
        order: "relevance",
        pageToken: page,
        access_token: this.access_token
      };
      axios
        .get(this.apiUrl + "subscriptions", { params })
        .then(response => {
          const item: any[] = response.data.items;
          this.subscriptItems.push(...item);
          if (response.data.nextPageToken) {
            this.getSubscript(response.data.nextPageToken);
          }
        })
        .catch(error => {
          if (error.response.status == 401) this.oauthSignIn();
        });
    },
    getChannels(groupIndex: number, callback: Function) {
      const params = {
        key: this.appKey,
        part: "id,snippet,contentDetails",
        id: "",
        maxResults: "50",
        access_token: this.access_token
      };
      params.id = this.channelGroup[groupIndex].groupItems
        .reduce((acc: string[], cur: any) => {
          acc.push(cur.resourceId.channelId);
          return acc;
        }, [])
        .toString();
      axios
        .get(this.apiUrl + "channels", { params })
        .then(response => {
          this.groupPlaylist = response.data.items.reduce(
            (acc: string[], cur: { [T: string]: any }) => {
              acc.push(cur.contentDetails.relatedPlaylists.uploads);
              return acc;
            },
            []
          );
          if (callback) callback();
        })
        .catch(error => {
          if (error.response.status == 401) this.oauthSignIn();
        });
    },
    getPlaylistItems(Playlist: string) {
      const params = {
        key: this.appKey,
        part: "id,snippet,contentDetails",
        playlistId: Playlist,
        maxResults: "5",
        access_token: this.access_token
      };
      axios
        .get(this.apiUrl + "playlistItems", { params })
        .then(response => {
          const listsort = response.data.items.reduce(
            (acc: string[], cur: { [T: string]: any }) => {
              acc.push(cur.snippet);
              return acc;
            },
            []
          );
          this.videoList.push(...listsort);
          this.videoList.sort((a, b) => {
            return -this.moment(a.publishedAt).diff(this.moment(b.publishedAt));
          });
        })
        .catch(error => {
          if (error.response.status == 401) this.oauthSignIn();
        });
    },
    getVideo(groupIndex: number) {
      this.videoList = [];
      this.getChannels(groupIndex, () => {
        this.groupPlaylist.forEach(playList => {
          this.getPlaylistItems(playList);
        });
      });
      this.videoListDlg = true;
    },
    select(item: { [T: string]: any }) {
      if (
        !this.editDlgSelectList.some(
          val => val.resourceId.channelId == item.resourceId.channelId
        )
      ) {
        if (this.editDlgSelectList.length < 10)
          this.editDlgSelectList.push(item);
        else {
          this.$message({
            message: "群組頻道數至多10個",
            type: "warning"
          });
        }
      }
    },
    remove(id: number) {
      this.editDlgSelectList.splice(id, 1);
    },
    editChannelGroup(index: number) {
      this.editSubscriptionsGroupIndex = index;
      this.editDlgSelectList = JSON.parse(
        JSON.stringify(this.channelGroup[index].groupItems)
      );
      this.editGroupName = JSON.parse(
        JSON.stringify(this.channelGroup[index].title)
      );
      this.editSubscriptionsGroup = true;
    },
    deleteChannelGroup(index: number) {
      this.channelGroup.splice(index, 1);
      localStorage.setItem("channelGroup", JSON.stringify(this.channelGroup));
    },
    saveGroup() {
      const group = {
        title: this.editGroupName,
        groupItems: this.editDlgSelectList
      };
      if (this.editSubscriptionsGroupIndex == -1) this.channelGroup.push(group);
      else this.channelGroup[this.editSubscriptionsGroupIndex] = group;
      localStorage.setItem("channelGroup", JSON.stringify(this.channelGroup));
      this.editGroupName = "";
      this.editDlgSelectList = [];
      this.editSubscriptionsGroup = false;
    }
  }
});
</script>
