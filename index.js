// index.js
const express = require("express");
const app = express();
const port = 3004;

// Import the data from coupon.js
const coupons = require("./coupon.js");
const expiredcoupon = require("./expiredcoupon.js");
const AllStores = require("./store");
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Define a route to send the coupon data
app.get("/coupons", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  console.log("page: ", page);
  // const itemsPerPage = parseInt(req.query.itemsPerPage) || 10;
 
    if ((page == 1)) {
      // setTimeout(() => {
        res.json([...coupons.Coupon.slice(0, 2)]);
      // }, 5000);
    } else if ((page == 2)) {
      // setTimeout(() => {
        const mycoupons = coupons.Coupon.slice(2, 4)
        console.log('first coupon: ' + JSON.stringify(mycoupons))
        res.json(mycoupons);
      // }, 5000);
    } else if ((page == 3)) {
      // setTimeout(() => {
        res.json(coupons.Coupon.slice(4,6));
      // }, 5000);
    } else if ((page == 4)) {
      // setTimeout(() => {
        res.json(coupons.Coupon.slice(6,8));
      // }, 5000);
    } else if ((page == 5)) {
      // setTimeout(() => {
        res.json(coupons.Coupon.slice(8,10));
      // }, 5000);
    } else if ((page == 6)) {
      // setTimeout(() => {
        res.json(coupons.Coupon.slice(10,12));
      // }, 5000);
    }
});
app.get("/allcouponsuptopage", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  console.log("page: ", page);
  // const itemsPerPage = parseInt(req.query.itemsPerPage) || 10;
 
    if ((page)) {
      // setTimeout(() => {
        res.json([...coupons.Coupon.slice(0, page * 2)]);
      // }, 5000);
    } 
});

app.get("/allexpiredcouponsuptopage", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  console.log("page: ", page);
  // const itemsPerPage = parseInt(req.query.itemsPerPage) || 10;
 
    if ((page)) {
      // setTimeout(() => {
        res.json([...expiredcoupon.Coupon.slice(0, page * 2)]);
      // }, 5000);
    } 
});

app.get("/expiredcoupons", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  console.log("page: ", page);
  // const itemsPerPage = parseInt(req.query.itemsPerPage) || 10;
 
    if ((page == 1)) {
      // setTimeout(() => {
        res.json([...expiredcoupon.Coupon.slice(0, 2)]);
      // }, 5000);
    } else if ((page == 2)) {
      // setTimeout(() => {
        const mycoupons = expiredcoupon.Coupon.slice(2, 4)
        console.log('first coupon: ' + JSON.stringify(mycoupons))
        res.json(mycoupons);
      // }, 5000);
    } else if ((page == 3)) {
      // setTimeout(() => {
        res.json(expiredcoupon.Coupon.slice(4,6));
      // }, 5000);
    } else if ((page == 4)) {
      // setTimeout(() => {
        res.json(expiredcoupon.Coupon.slice(6,8));
      // }, 5000);
    } else if ((page == 5)) {
      // setTimeout(() => {
        res.json(expiredcoupon.Coupon.slice(8,10));
      // }, 5000);
    } else if ((page == 6)) {
      // setTimeout(() => {
        res.json(expiredcoupon.Coupon.slice(10,12));
        console.log('first',expiredcoupon.Coupon.slice(10,12))
      // }, 5000);
    }
});
app.get('/store', (req, res) => {
  const storeName = req.query.storeName; // Use req.query for query parameters

  console.log('Query Parameter:', storeName); // Debugging output

  if (!storeName) {
    return res.status(400).json({ error: 'Store name is required' });
  }

  const store = AllStores.find((s) => s.store_name.toLowerCase() === storeName.toLowerCase());

  if (store) {
    res.json(store);
  } else {
    res.status(404).json({ error: 'Store not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
