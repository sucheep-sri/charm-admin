angular.module('myApp.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/category.html",
    "");
  $templateCache.put("views/food.html",
    "<div class=container><div class=row><div class=col-md-3><div class=category-header><h3>Menu Category</h3></div><div class=form-add-category><div class=input-group><input class=form-control placeholder=\"Add Menu Category\"> <span class=input-group-btn><button class=\"btn btn-info\" type=button>Add</button></span></div></div><div class=list-group><a href=# class=\"list-group-item active\">Category 1</a> <a href=# class=list-group-item>Category 2</a> <a href=# class=list-group-item>Category 3</a></div></div><div class=col-md-9><div class=menu-wrapper><div class=\"panel panel-default\"><div class=panel-heading><span class=food-header>Starters</span><label class=radio-inline><input type=radio name=inlineRadioOptions value=option1> Show in Website</label><label class=radio-inline><input type=radio name=inlineRadioOptions value=option2> Hide in Website</label><button type=button id=btn-del-cat class=\"btn btn-danger\">Delete Category</button></div><div class=panel-body><button type=button id=btn-add-food class=\"btn btn-info\" ng-click=openModal()>Add Menu</button></div><table class=\"table table-hover\"><thead><tr><th class=food-name>Name</th><th class=food-price>Price</th><th class=food-desc>Description</th><th class=food-edit></th></tr></thead><tbody><tr><td class=food-name>Name</td><td class=food-price>Price</td><td class=food-desc>Description</td><td class=food-edit><a><i class=\"fa fa-pencil-square-o\"></i></a></td></tr></tbody></table></div></div></div></div></div><script type=text/ng-template id=foodModal.html><div class=\"modal-header\">\n" +
    "        <h4>Add Menu <span class=\"close\"  ng-click=\"cancel()\">X</span></h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <form>\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"form-group col-md-8\">\n" +
    "              <div class=\"input-group {{nameValidation}}\">\n" +
    "              <span id=\"addon-name\" class=\"input-group-addon\"><i class=\"fa fa-newspaper-o\"></i></span>\n" +
    "              <input type=\"text\" class=\"form-control input-block\" id=\"accname\" placeholder=\"Menu Name *\"  ng-model=\"_name\" ng-change=\"onChangeValidate('name')\">\n" +
    "              </div>\n" +
    "              <span ng-show=\"accNameErrMsg\" for=\"accName\" generated=\"true\" class=\"help-block\">Enter your account name.</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-4\">\n" +
    "              <div class=\"input-group {{emailValidation}}\">\n" +
    "              <span class=\"input-group-addon\"><i class=\"fa fa-dollar\"></i></span>\n" +
    "              <input type=\"email\" class=\"form-control\" id=\"accemail\" placeholder=\"Price *\" ng-model=\"_email\" ng-change=\"onChangeValidate('email')\">\n" +
    "              </div>\n" +
    "              <span ng-show=\"accEmailErrMsg\" for=\"accEmail\" generated=\"true\" class=\"help-block\">Enter your email.</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"input-group {{emailValidation}}\">\n" +
    "          <span class=\"input-group-addon\"><i class=\"fa fa-info-circle\"></i></span>\n" +
    "          <input type=\"email\" class=\"form-control\" id=\"accemail\" placeholder=\"Description *\" ng-model=\"_email\" ng-change=\"onChangeValidate('email')\">\n" +
    "          </div>\n" +
    "          <span ng-show=\"accEmailErrMsg\" for=\"accEmail\" generated=\"true\" class=\"help-block\">Enter your email.</span>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\" >\n" +
    "        <button class=\"btn btn-info\" type=\"button\" ng-click=\"ok()\" ng-show=\"!onLoad\">Add</button>\n" +
    "    </div></script>");
}]);
