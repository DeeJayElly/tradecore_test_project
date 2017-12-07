import angular from 'angular';
import databaseSrvService from './databaseSrv/databaseSrv';

const ServicesModule = angular.module('app.services', [])
  .service('databaseSrvService', databaseSrvService);

export default ServicesModule;