<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
    <h2>Count2 is {{counterValue2}}</h2>
  </div>
</template>

<script>
import { getCount,getCount2} from '../../vuex/getters'
export default {
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount,
      counterValue2: getCount2
    }
  }
}
</script>