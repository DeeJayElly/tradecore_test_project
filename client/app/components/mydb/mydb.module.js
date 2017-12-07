
import angular from 'angular';
import tableComponent from './mydb.component';
import './mydb.component.scss';

const tableModule = angular.module('mydb', [])
  .component('mydb', tableComponent);
export default tableModule;