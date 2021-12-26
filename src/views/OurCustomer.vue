<template>
  <div>
    <Caption />
    <cardes />
  </div>
</template>

<script>
import Caption from "@/components/ourcustomer/Caption.vue";
import Cardes from "@/components/ourcustomer/Cards.vue";

export default {
  name: "OurCustomer",
  components: {
    Caption,
    Cardes
  }
};
</script>