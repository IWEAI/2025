import { defineStore } from "pinia";
import { Names } from "@/store/store-name";

export const usePublicStore = defineStore(Names.PUBLIC, {
  state: () => {
    return {
      activeIndex: sessionStorage.getItem("activeIndex") || "/home",
    };
  },
});
