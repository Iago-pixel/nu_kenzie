<template>
  <TheHeader />
  <main class="main">
    <div>
      <FinanceForm />
      <TotalBox />
    </div>
    <FinanceList />
  </main>
</template>

<script>
import FinanceForm from './components/FinanceForm/FinanceForm.vue';
import FinanceList from './components/FinanceList/FinanceList.vue';
import TheHeader from './components/TheHeader.vue';
import TotalBox from './components/TotalBox.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    FinanceForm,
    TotalBox,
    FinanceList
  }
}
</script>

<style>
#app {
  font-family: "Nunito", sans-serif;
}
.main {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .main {
    flex-direction: row;
    align-items: start;
    gap: 50px;
  }
}
</style>
