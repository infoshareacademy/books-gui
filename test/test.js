describe('true', function () {
    it('Should be true', function () {
        expect(true).toBeTruthy();
    })
});

describe('Symfony.Api.response', function() {
    var
        $httpBackend,
        $http;

    beforeEach(inject(function(_$http_) {
        $http = _$http_;
    }));

        describe('HTTP status', function() {
            describe('is 200 OK', function() {
                it('should return a 200 status', function() {
                    $httpBackend.expectGET('http://localhost:8080/books-filter/web/app_dev.php').respond(200, {});
                    $http.get('http://localhost:8080/books-filter/web/app_dev.php');
                    $httpBackend.flush();
                });
            });


        });
    });


            //describe('HTTP status', function() {
            //        it('should return a 200 status', function($http) {
            //            expect ('http://localhost:8080/books-filter/web/app_dev.php').respond(200);
            //        });
            //    });

