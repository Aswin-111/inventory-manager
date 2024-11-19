const products = require("../database/products/Products")
const category = require("../database/products/Category")
const inventory = require("../database/products/Inventory")

// const orders = require("../database/orders/Orders")
// const leads = require("../database/orders/Leads")
// const tasks = require("../database/orders/Tasks")



products.sync({alter : true})
category.sync({alter : true})
inventory.sync({alter : true})
// orders.sync({alter : true})

// leads.sync({alter : true})







// tasks.sync({alter : true})