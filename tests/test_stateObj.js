var expect =  require('chai').expect;
var core = require('../src/core');
var domain = 'www.oada.com';
var configuration = 'openid-configuration';
var parameters = {};
var redirect = {};
var stateObj = {
          key: "i9Ga8O1D4C7IkTp91GgM_LBLtvwNqGOkthM1S26oy",
          domain: "oada.com",
          conf: "confi",
          callback: "call me may be",
          options: "idk",
      };

describe("testing Store State function and Retrieve State",function(){
    it("should return same object",function(done){
        core.storeState(stateObj,function(error,stateOk){
            core.retrieveState(stateOk,function(error,stateObject){
                expect(stateObj).to.deep.equal(stateObject);
                done();
            });
        });

    });
});
