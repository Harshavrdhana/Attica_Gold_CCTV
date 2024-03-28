// const http = require("http");
// var fs = require("fs");

// const PORT = 4000;

// http
//   .createServer(function (request, response) {
//     console.log("request starting...", new Date());

//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
//       "Access-Control-Max-Age": 2592000, // 30 days
//       /** add other headers as per requirement */
//     };
//     if (request.method === "OPTIONS") {
//       response.writeHead(204, headers);
//       response.end();
//       return;
//     }

//     var filePath = "./videos/ipcam" + request.url;
//     console.log(filePath);
//     fs.readFile(filePath, function (error, content) {
//       response.writeHead(200, { "Access-Control-Allow-Origin": "*" });
//       if (error) {
//         if (error.code == "ENOENT") {
//           fs.readFile("./404.html", function (error, content) {
//             response.end(content, "utf-8");
//           });
//         } else {
//           response.writeHead(500);
//           response.end(
//             "Sorry, check with the site admin for error: " +
//               error.code +
//               " ..\n"
//           );
//           response.end();
//         }
//       } else {
//         response.end(content, "utf-8");
//       }
//     });
//   })
//   .listen(PORT);
// console.log(`Server listening PORT ${PORT}`);

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;
const ROOT_DIRECTORY = "./videos/ipcam";

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
  ".m3u8": "application/vnd.apple.mpegurl",
};

const server = http.createServer((request, response) => {
  console.log("Request:", request.method, request.url);

  // Set CORS headers
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  response.setHeader("Access-Control-Max-Age", 2592000); // 30 days

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  let filePath = path.join(ROOT_DIRECTORY, request.url);
  // if (filePath.indexOf(ROOT_DIRECTORY) !== 0) {
  //   response.writeHead(403);
  //   response.end("Forbidden");
  //   return;
  // }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === "ENOENT") {
        send404(response);
      } else {
        send500(response, err);
      }
      return;
    }

    if (stats.isFile()) {
      serveFile(response, filePath, stats);
    } else {
      send404(response);
    }
  });
});

function send404(response) {
  response.writeHead(404);
  response.end("404 Not Found");
}

function send500(response, err) {
  response.writeHead(500);
  response.end(`Internal Server Error: ${err}`);
}

function serveFile(response, filePath, stats) {
  const fileExtension = path.extname(filePath);
  const contentType = mimeTypes[fileExtension] || "application/octet-stream";

  response.writeHead(200, {
    "Content-Type": contentType,
    "Content-Length": stats.size,
    "Access-Control-Allow-Origin": "*",
  });

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(response);
  fileStream.on("error", (err) => {
    send500(response, err);
  });
}

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
