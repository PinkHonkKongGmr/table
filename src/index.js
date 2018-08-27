import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import './base.scss'
import data from './data.json';

let json_data_asks = data.asks;
let json_data_bids = data.bids;

function widthCreator(arr)
{var arr1= arr.map(function (n) {
  return n.quantity;}
);

var totalWidth =arr1.reduce(function (a,b) {
  return a+b;

});
return totalWidth;
}

let askw = widthCreator(json_data_asks);
let bidw=widthCreator(json_data_bids);




function createEl(className, content) {
  var newEl = document.createElement('div');
  newEl.classList.add(className);
  newEl.innerText = content;
  return newEl;
}

function thistable() {
  var tables = document.getElementsByClassName('table');
  return tables[tables.length - 1];
}

function graphCreator(amount,total) {

var width = amount/total*100;
var w = width.toString()+'%';
  var newEl = document.createElement('div');
  newEl.style.width=w;
  newEl.classList.add('graph');
  return newEl;
}

let sum = 0;


$.each(json_data_asks, function() {
  var selector = document.querySelector('.left_side');
  sum += this.quantity;

  selector.appendChild(createEl('table', null));
  thistable().appendChild(createEl('row_count', this.numberOfOrders));
  thistable().appendChild(createEl('row_total', sum));
  thistable().appendChild(createEl('row_amount', this.quantity));
  thistable().appendChild(createEl('row_price', this.price));
  thistable().appendChild(graphCreator(sum,askw));
})

sum = 0;

$.each(json_data_bids, function() {
  var selector = document.querySelector('.right_side');
  sum += this.quantity;
  selector.appendChild(createEl('table', null));
  thistable().appendChild(createEl('row_count', this.numberOfOrders));
  thistable().appendChild(createEl('row_total', sum));
  thistable().appendChild(createEl('row_amount', this.quantity));
  thistable().appendChild(createEl('row_price', this.price));
  thistable().appendChild(graphCreator(sum,bidw));
})
