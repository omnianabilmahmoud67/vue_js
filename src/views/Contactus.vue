<template>
<section>
<Caption/>
<cards/>
</section>

</template>



<script>
import Caption from '@/components/contentus/caption.vue'
import Cards from '@/components/contentus/cards.vue'
export default{
    name:"Contactus" ,
  components: {
       Caption,
    Cards
        }
   
    }
</script>
