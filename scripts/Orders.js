import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const allProducts = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (orders, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === orders.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul class= orders>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, allProducts)
        if (order.employeeId > 10) {
            html += `<li>${product.name} ${order.employeeId} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
            
            

        }else {
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`

        }

    }

    html += "</ul>"

    return html
}

