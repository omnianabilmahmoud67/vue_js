<template>
  <div>
    <Caption />
    <cardes />
  </div>
</template>

<script>
import Caption from "@/components/Services/Caption.vue";
import Cardes from "@/components/Services/Cardes.vue";

export default {
  name: "sevices",
  components: {
    Caption,
    Cardes
  }
};
</script>
