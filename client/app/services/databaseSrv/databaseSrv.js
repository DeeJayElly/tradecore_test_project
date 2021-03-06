class databaseSrvService {
  constructor($http, $q) {
      'ngInject';

    //INIT DEPENDENCIES
    this.$http = $http;
    this.$q = $q;
  }

  getData(table) {
    const defer = this.$q.defer();
    this.$http.get('./assets/table/'+table+'.json')
      .then((response) => {
      const data = response.data;
    defer.resolve(data);
  })
  .catch((response) => {
      defer.reject(response.statusText);
  });
    return defer.promise;
  }
}

export default databaseSrvService;