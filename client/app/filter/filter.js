/**
 * Created by shadow-viper on 12/6/17.
 */
const FilterModule=angular.module('app.filter',[]).filter('rmUnderScore',removeUnderscore).filter('isNumber',Isnumber)
    .filter('UrlTransform',StringCheck).filter('DateToNow',DateToNow);

function removeUnderscore(){
    return function(item){
        return item.replace('_',' ');
    }
}

function Isnumber(){

    return function(item){
        if(item){
            if(Number.isInteger(item)){
                 return 'number';
            }
                return 'string';
        }
    }
}

function StringCheck(){
    return function(item){
        if(item.toString().startsWith('http')){
            return '<a href="'+item+'">item</a>';
        }
        return item;
    }
}


function DateToNow(moment){
    return function(item){
        return moment(new Date(item)).fromNow();
    }
}

DateToNow.$inject=['moment'];
export default FilterModule;