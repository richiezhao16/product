var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "descriptions.html"
  };
});

app.directive("reviews", function() {
  return {
    restrict: "E",
    templateUrl: "reviews.html"
  };
});

app.directive("ingredient", function() {
  return {
    restrict: "E",
    templateUrl: "ingredient.html"
  };
});

app.directive("productTabs", function() {
  return {
    restrict: "E",

    templateUrl: "product-tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});
