import angular from 'angular';
import template from './app.component.html';
import FilterModule from './filter/filter';
import 'moment/moment.js'
import appComponent from './app.component';
import ComponentsModule from './components/components';
import ServiceModule from './services/services';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
import DirectiveModule from './directives/directives';
import 'angular-moment';
import 'angular-sanitize';
import './app.component.scss'
angular.module('app', [
    'angularMoment', "ngTable",'ngSanitize'
    ,ComponentsModule.name,'ngComponentRouter',FilterModule.name,ServiceModule.name,DirectiveModule.name
])
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: template,
        controller:function(){
            this.Links=['car_purchases','uploads','users'];
        },
        controllerAs:'vm',
        $routeConfig: [
            {path: '/table/:table', name: 'Mydb', component: 'mydb'},
            {path: '**', component: 'notFound',name:'NotFound'}
        ]
    });