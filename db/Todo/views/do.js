(function () {
    let socket = io.connect();
    let app = {
        init: function () {
            //this.list();
            this.actions();
            //this.socketActions();
        },

        persists: function (new_todo) {
            socket.emit('add', new_todo);
        },

        destroy: function (todo_id) {
            socket.emit('delete', { id: todo_id });
        },

        actions: function (e) {
            window.addEventListener('button', function (params) {

                console.log(params);

            //    if(!params){
            //        return false;
            //    }
            //        let new_todo = {
            //         title: params.returnValue(),
            //         complete: false
            //        }



            });
        }
    };

    window.App = app.init();
})();