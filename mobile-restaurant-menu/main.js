
import {menuArray} from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const menuItemsDiv = document.getElementById('menu__items');
const summaryDiv = document.getElementById('menu__order');
const modal = document.getElementById('modal');
let itemCart = [];

document.addEventListener("click", function(e){
    if(e.target.dataset.id){
        addItemClick(e.target.dataset.id);
        render()
    }else if(e.target.dataset.remove){
        removeItem(e.target.dataset.remove);
        render()
    }else if(e.target.id === "order-btn"){
        completeOrder()
    }else if(e.target.id === "pay-btn"){
        payOrder(e)
    }
})

function addItemClick(itemId){
    menuArray.forEach((item)=>{
                if(item.id == itemId){
                    item.uuid = uuidv4()
                    itemCart.push(item)
                }
            })
}


function getCartArr(){
    let cartHtmlString = '';
    let total = 0;
    itemCart.forEach(function(item){
        cartHtmlString += `
        <div class="order-item">
            <span class="item-title">${item.name}</span>
            <span class="item-remove" data-remove=${item.uuid}>remove</span>
            <span class="price order-price">$${item.price}</span>
        </div>
        `
        total += item.price
    })
    console.log(total)
    return {
        htmlString : cartHtmlString,
        total: total
    }
}
function getOrderSummary(){
    let cart = getCartArr();
    
    return `
        <h3 class="summary-title item-title">Your order</h3>
        <div class="order-items" id="order-items">
            ${cart.htmlString}
        </div>
        <div class="total-wrapper">
            <span class="item-title">
                Total price:
            </span>
            <span class="price order-price">$${cart.total}</span>
        </div>
        <button class="order-btn" id="order-btn">
            Complete Order
        </button>
    `
    
}
function removeItem(itemId){
    let newArr = [];
    if (itemCart.length === 1){
        return itemCart = []
    }else{
        itemCart.forEach(function(item, index){
            if(item.uuid === itemId){
                newArr = [...itemCart.slice(0, index), ...itemCart.slice(index + 1)]
            }
        })
    }
    
    itemCart = newArr
}
function completeOrder(){
    modal.style.display = 'block'
}
function payOrder(e){
    if(!modal.querySelector('input:invalid')){
        e.preventDefault()
        modal.style.display = 'none'
        summaryDiv.style.display = 'none'
        document.getElementById('thanks').style.display = 'flex'

    }else{
        console.log('Invalid item present')
    }
}

function getItemsArr(){
    let htmlString = '';
    menuArray.forEach(function(item){
        let ingredients =''; 
        item.ingredients.forEach(function(ingredient, index){
            if(index === item.ingredients.length - 1){
                ingredients += ingredient
            }else{
                ingredients += `${ingredient},`
            }
            
        })
        htmlString += `
        <div class="menu-item">
            <img src="${item.imageUrl}" class="item-img"/>
            <div class="item-data">
                <span class="item-title">
                    ${item.name}
                </span>
                <span class="item-ingredients">
                    ${ingredients}
                </span>
                <span class="price">
                    $${item.price}
                </span>
            </div>
            <div class="item-btn-wrapper">
                <button class="item-btn" id="item-btn" data-id="${item.id}">
                    <i class="fa-regular fa-plus"></i>
                </button>
            </div> 
        </div>
        `
    })
    return htmlString
}

function render(){
    menuItemsDiv.innerHTML = getItemsArr()
    if(itemCart.length > 0){
        summaryDiv.innerHTML = getOrderSummary()
    }else{
        summaryDiv.innerHTML = ''
    }
}

render()