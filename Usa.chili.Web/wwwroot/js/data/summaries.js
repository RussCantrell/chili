$(function () {
  $('#dayMonthSelection').select2(Core.select2Options);
  $('[data-toggle="tooltip"]').tooltip();
});

const App = new Vue({
  el: '#app',
  data: function () {
    return {
      model: {

      }
    }
  }
});
