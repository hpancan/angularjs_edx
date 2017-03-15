app.controller('sessionController', ['sessionService', 'sessionFactory', sessionController]);

function sessionController(sessionService, sessionFactory) {
    this.getFactorySession = function () {
        this.model = {
            name: sessionFactory.get('name'),
            nickname: sessionFactory.get('nickname'),
            status: 'Retrieved by factory on ' + new Date()
        };
    }
    
    this.setFactorySession = function() {
        sessionFactory.save('name', this.model.name);
        sessionFactory.save('nickname', this.model.nickname);
        this.getFactorySession();
    }
    
    this.clearFactorySession = function() {
        sessionFactory.clear();
        this.getFactorySession();
    }
    
    var ss = sessionService;
    this.getServiceSession = function () {
        this.model = {
            name: ss.get('name'),
            nickname: ss.get('nickname'),
            status: 'Retrieved by factory on ' + new Date()
        };
    }
    
    this.setServiceSession = function() {
        ss.save('name', this.model.name);
        ss.save('nickname', this.model.nickname);
        this.getServiceSession();
    }
    
    this.clearServiceSession = function() {
        ss.clear();
        this.getServiceSession();
    }
    
    
}