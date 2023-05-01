import axios from "axios";

export const apiTag = axios.create({
  baseURL: "http://localhost:3333/books",
});

export const apiGoodReads = axios.create({
  baseURL: "http://localhost:3000/",
});

export const apiGoodReadsWeb = axios.create({
  baseURL: "https://www.goodreads.com/",
});
