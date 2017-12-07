import 'bootstrap-css-only';
import 'ng-table';
import controller from './mydb.controller.js';
import template from './mydb.component.html';
let tableComponent = {
    template: template,
    controller: controller,
    controllerAs:'vm'
}
export default tableComponent;