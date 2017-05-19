// showOnMap(position) {
//         // ios
//         if (this.platform.is('ios')) {
//           window.open('maps://?q=' + this.location.name + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=' + this.location.latitude + ',' + this.location.longitude, '_system');
//         };
//         // android
//         if (this.platform.is('android')) {
//           window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + this.location.latitude + ',' + this.location.longitude + '(' + this.location.name + ')', '_system');
//         };
  
// }