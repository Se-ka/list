/**
 * Created by sergiy on 31.08.15.
 */

'use strict';

var productList = [];

var render = function () {

    var $products = $('[name=containerForTheProductList]').empty(), l = productList.length, product, html, $html;

    for (var i = 0; i < l; i++) {

        product = productList[i];

        html =  '<div class="product" productId="' + product.id + '">' +
                    '<div class="imageOfTheProduct"></div>' +
                    '<div class="text">' +
                        '<div class="nameOfTheProduct">' + product.title + '</div>' +
                        '<div class="descriptionOfTheProduct">' + product.description + '</div>' +
                        '<div class="priceOfTheProduct">' + product.price + '</div>' +
                    '</div>' +
                    '<button>видалити</button>' +
                '</div>';

        $html = $(html);

        $html.find('button').click((function (index) {
                return function () {
                  productList.splice(index, 1);
                    render();
                };
        })(i));

        $products.append($html);
    }
};

$(function () {
    $.ajax( {
      url: 'data/products.json'
    }).done (function (data) {
        productList = data;
        render();
        })
});