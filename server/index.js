const http = require("http");
const { movies } = require("./data");
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  // GET ALL MOVIES
  if (req.url == "/movies" && req.method == "GET") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(movies));
  }
  //GET SINGLE MOVIE
  if (req.url.match(/\/movies\/([0-9]+)/) && req.method == "GET") {
    const urlPath = req.url.split("/");
    const movieId = urlPath[2];
    const movieData = movies.find((movie) => movie.id == movieId);
    if (movieData === "undefined") {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify("Record not found."));
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(movieData));
  }
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
