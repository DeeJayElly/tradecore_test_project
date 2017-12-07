import template from './notFound.component.html';
import controller from './notFound.controller.js';
import './notFound.component.scss';

let notFoundComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'notFoundController'
};
export default notFoundComponent;