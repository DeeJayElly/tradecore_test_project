import angular from 'angular';
    import MydbModule from './mydb/mydb.module';

const ComponentsModule = angular.module('app.components',[
       MydbModule.name, 
]);

export default ComponentsModule;