import angular from 'angular';
import notFoundComponent from './notFound.component';

const notFoundModule = angular.module('notFound', [])
  .component('notFound', notFoundComponent);
export default notFoundModule;