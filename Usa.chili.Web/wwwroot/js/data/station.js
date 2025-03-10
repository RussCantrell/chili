$(function () {
  $('#datePicker').datetimepicker(Core.dateTimePickerDateOptions);
  $('#timePicker').datetimepicker(Core.dateTimePickerTimeOptions);
  $('[data-toggle="tooltip"]').tooltip();
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
  },
  computed: {
    currentDate: function() {
      return moment().format('MM/DD/YYYY');
    },
    currentTime: function() {
      return moment().format('HH:mm:ss');
    }
  }
});
