describe('BaseController', function () {
    var $rootScope,
        $scope,
        controller,
        $q,
        $timeout,
        $httpBackend;

    // Inicjalizuje wszystkie potrzebne zmienne
    // $injector jest serwisem angularowym ładującym instancję obiektów wraz z ich typami, metodami i powiązanymi modułami
    beforeEach(function () {
        module('BooksGui');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('BaseController', {$scope: $scope});
            $q = $injector.get('$q');
            $timeout = $injector.get('$timeout');
            $httpBackend = $injector.get('$httpBackend');
        });
    });
    describe('API Symfony 200 HTTP status', function() {
        beforeEach(inject(function($controller, $rootScope, $httpBackend) {
            $scope = $rootScope.$new();

            $httpBackend.when('GET', 'http://localhost:8080/books-filter/web/app_dev.php')
                .respond();

            BaseController = $controller('BaseController', { $scope: $scope });
            $httpBackend.flush();
        }));
        it('Should return 200 HTTP status', function() {
            expect($scope.responseStatus).toEqual(200);

        });

    });
    describe('Array type of input', function() {
        beforeEach(inject(function($controller, $rootScope, $httpBackend) {
            $scope = $rootScope.$new();

            $httpBackend.when('GET', 'http://localhost:8080/books-filter/web/app_dev.php')
                .respond();



            BaseController = $controller('BaseController', { $scope: $scope });
            //$httpBackend.flush();
        }));

        it('should be an array', function() {
            $httpBackend.expectGET('http://localhost:8080/books-filter/web/app_dev.php');
            //$httpBackend.flush();
            // $timeout.flush(15000);
            expect($scope.books).toEqual([]);

        });
    });

});


//
//    // Testy do napisanych przez nas metod
//    describe('Method handlers', function () {
//        describe('rentCopy', function () {
//            // Sprawdź czy na początku jest 5 książek
//            // wykonaj metodę rentCopy()
//            // sprawdź czy po wykonaniu metody książek jest 4
//            it('Should lower the number of available books by 1', function () {
//                // Given
//                expect($scope.availableCopies).toEqual(5);
//                // When
//                $scope.rentCopy();
//                // Then
//                expect($scope.availableCopies).toEqual(4);
//            });
//
//            // Ustaw stan początkowy na 0 dostępnych książek
//            // wykonaj metodę rentCopy()
//            // sprawdź czy po wykonaniu metody książek wciąż jest 0
//            it('Should do nothing if there is 0 books available', function () {
//                // Given
//                $scope.availableCopies = 0;
//                // When
//                $scope.rentCopy();
//                // Then
//                expect($scope.availableCopies).toEqual(0);
//            });
//        });
//    });
//
//    // Testy wykonane przy inicjalizacji (stan początkowy)
//    describe('Initialization', function () {
//        it('Should instantiate books count to 5', function () {
//            expect($scope.availableCopies).toEqual(5);
//        });
//    });
//});
