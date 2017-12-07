import ServiceModule from '../../services/services'
import 'ng-table/bundles/ng-table.css' ;

class tableController {
    constructor(databaseSrvService, $location,NgTableParams,moment) {
        this.srvDb = databaseSrvService;
        this.location = $location;
        this.moment=moment;
        this.name = 'table';
        this.TableData = [];
        this.TableHead = [];

        this.$routerOnActivate = function (e) {
            this.tableName = e.params.table;
            this.srvDb.getData(this.tableName).then((a) => {
                this.TableData = a;
                this.TableHead = a[0];
                this.TableParams=new NgTableParams({}, { dataset:a})
            }, error => {
                $location.path('/404');

            })
        }
    }

    WhatIsType(item) {
        if(item){
            if (this.__checkFloat(item))
                return 'money';
            if (this.__checkInt(item))
                return 'number';
            if (this.__checkDate(item))
                return 'date';
            if(this.__checkObject(item))
                return 'object'
        }
           return 'string';

    }


    __checkFloat(item) {
        if(parseFloat(item)){
            let fl=parseFloat(item);
            if( fl%1!==0 && fl>0){
                return true;
            }else if(item.toString().endsWith('00') && fl |0){
                return true
            }
        }

    }

    __checkInt(item) {
        if (Number.isInteger(item))
            return true;
    }

    __checkDate(item) {
        if(isNaN(Date.parse(item))===false && ((item.toString().charAt(0)|0)>0) && ((item.slice(1)|0)<=0)){
            return true;

        }
    }
    __checkObject(item){
        if(typeof item==='object')
            return true;
    }




}

tableController.$inject = ['databaseSrvService','$location','NgTableParams','moment'];

export default tableController;
