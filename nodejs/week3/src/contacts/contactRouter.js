import express from "express";
import { StatusCodes } from "http-status-codes";
import knexInstance from "../database.js";

export const contactRouter = express.Router();

const domain = "contacts";
const table_contacts = "contacts";



contactRouter.get(`/${domain}`, async (req, res) => {
  let query = knexInstance.select("*").from(table_contacts);

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (orderBy.length > 0) {
      query = query.orderByRaw(orderBy);
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});