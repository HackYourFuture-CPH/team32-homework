import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import { readFileSync } from "fs";

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const q = req.query.q;
  const documents = JSON.parse(readFileSync("./document.json", "utf-8"));

  if (!q) {
    return res.json(documents);
  }

  const results = documents.filter((doc) =>
    Object.values(doc).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(q.toLowerCase())
    )
  );
  res.send(res.json(results));
});

app.get("/documents/:id", (req, res) => {
  const id = Number(req.params.id);
  const documents = JSON.parse(readFileSync("./document.json", "utf-8"));
  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  res.json(document);
});

app.post("/search", (req, res) => {
  const q = req.query.q;
  const { fields } = req.body;
  const documents = JSON.parse(readFileSync("./document.json", "utf-8"));
  if (q && fields) {
    return res
      .status(400)
      .json({ error: "Bad request: q and fields are not allowed together" });
  }

  if (q) {
    const results = documents.filter((doc) =>
      Object.values(doc).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(q.toLowerCase())
      )
    );
    res.send(res.json(results));
  }

  if (fields && typeof fields === "object") {
    const results = documents.filter((doc) =>
      Object.entries(fields).every(([key, value]) => doc[key] === value)
    );
    return res.json(results);
  }

  res.json(documents);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
