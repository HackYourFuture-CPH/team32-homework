import express from "express";
const app = express();
const port = process.env.PORT || 3005;

const products = [
  {
    id: 1,
    name: "Used Apple Airpods",
    price: "50",
    description: "Battery life is not great",
  },
  {
    id: 2,
    name: " Apple Airpods",
    price: "500",
    description: "Battery life is not great",
  },
  {
    id: 3,
    name: "High quality Apple Airpods",
    price: "250",
    description: "Battery life is not great",
  },
  {
    id: 4,
    name: "Modern Apple Airpods",
    price: "550",
    description: "Battery life is not great",
  },
  {
    id: 5,
    name: "Luxry Apple Airpods",
    price: "5000",
    description: "Battery life is not great",
  },
];

// Support parsing JSON requests
app.use(express.json());

app.get("/search", (req, res) => {
  if (req.query.q) {
    res.send([products[0]]);
  } else {
    res.send(products);
  }
});

app.get("/documents/:id", (req, res) => {
  console.log(req.params);

  if (req.params.id) {
    res.send({
      id: 1,
      type: "doc",
      value: "hello world",
    });
  } else {
    res.status(404).send("Documents is not found");
  }
});

app.post("/search", (req, res) => {
  const filterByprice = req.body.fields.price;
  const filterByName = req.body.fields.name;

  const filterProdducts = products.filter((p) => {
    if (filterByprice && filterByName) {
      return p.price == filterByprice && p.name.toLowerCase().includes(filterByName.toLowerCase());
    } else if (filterByprice) {
      return p.price == filterByprice;
    } else if (filterByName) { 
      return p.name.toLowerCase().includes(filterByName.toLowerCase());
    }

    return true;

  });

  res.send(filterProdducts);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
