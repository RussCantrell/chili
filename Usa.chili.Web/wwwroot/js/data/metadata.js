$(function () {
  $('#metadataSelection').select2(Core.select2Options);
});

const App = new Vue({
  el: '#app',
  data: function () {
    return {
      stations: [],
      model: {
        stationId: 1
      }
    }
  },
  created: function() {
    Core.populateStationDropdown(this, false);
  }
});
