import angular from 'angular';
    import MydbModule from './mydb/mydb.module';    import NotFoundModule from './notFound/notFound.module';

const ComponentsModule = angular.module('app.components',[
       MydbModule.name,      NotFoundModule.name 
]);

export default ComponentsModule;