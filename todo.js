function TodoCtrl($scope) {
    $scope.todos = [
        {text:'Send Examples of Work', done:false},
        {text:'Place webpages on portfolio', done:false},
		 
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

   $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function(item){
            if (false == item.done)
            {
                return item;
            }
        });
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };
}