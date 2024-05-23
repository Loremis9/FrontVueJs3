<template>
  <div
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="match"
          navText="Match"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">dashboard</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
            url="#"
            :aria-controls="''"
            v-bind:collapse="false"
            collapseRef="matchRevision"
            navText="MatchRevision"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">receipt_long</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
            url="#"
            :aria-controls="''"
            @click="goIndex"
            v-bind:collapse="false"
            collapseRef="index"
            navText="Index"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">receipt_long</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          v-bind:collapse="false"
          collapseRef="tournoi"
          navText="Tournoi"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">notifications</i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          ACCOUNT PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          url="#"
          :aria-controls="''"
          @click="useAuthStore().logout()"
          v-bind:collapse="false"
          collapseRef="log Out"
          navText="log Out"
        >
          <template v-slot:icon>
            <i class="material-icons-round opacity-10 fs-5">login</i>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import {useAuthStore} from "../../store/auth";
import router from "../../router";

export default {
  name: "SidenavList",
  methods: {useAuthStore,
  goIndex(){
    router.push("/index")
  }
  },
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,

  },
};
</script>
