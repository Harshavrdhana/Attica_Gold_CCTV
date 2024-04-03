[1mdiff --git a/package.json b/package.json[m
[1mindex 645a8e9..04bc671 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -25,7 +25,11 @@[m
     "start": "react-scripts start",[m
     "build": "react-scripts build",[m
     "test": "react-scripts test",[m
[31m-    "eject": "react-scripts eject"[m
[32m+[m[32m    "eject": "react-scripts eject",[m
[32m+[m[32m    "start:folder1": "cd server && npx nodemon hls-server.js",[m
[32m+[m[32m    "start:folder3": "cd server && npx nodemon cleaner.js",[m
[32m+[m[32m    "start:folder2": "cd server && ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 100 -hls_time 10 -hls_list_size 1 -y ./videos/ipcam/index.m3u8",[m
[32m+[m[32m    "start:all": "npm-run-all -p start:folder1 start:folder3 start:folder2 start"[m
   },[m
   "eslintConfig": {[m
     "extends": [[m
[1mdiff --git a/server/cleaner.js b/server/cleaner.js[m
[1mnew file mode 100644[m
[1mindex 0000000..bdf83df[m
[1m--- /dev/null[m
[1m+++ b/server/cleaner.js[m
[36m@@ -0,0 +1,94 @@[m
[32m+[m[32m// const findRemoveSync = require("find-remove");[m
[32m+[m
[32m+[m[32m// setInterval(() => {[m
[32m+[m[32m//   var result = findRemoveSync("./videos/ipcam", {[m
[32m+[m[32m//     age: { seconds: 30 },[m
[32m+[m[32m//     extensions: ".ts",[m
[32m+[m[32m//   });[m
[32m+[m[32m//   console.log(result);[m
[32m+[m[32m// }, 5000);[m
[32m+[m
[32m+[m[32mconst findRemoveSync = require("find-remove");[m
[32m+[m
[32m+[m[32m// Define the directory path and file extension to target[m
[32m+[m[32mconst DIRECTORY_PATH = "./videos/ipcam";[m
[32m+[m[32mconst FILE_EXTENSION = ".ts";[m
[32m+[m[32m// Define the age limit for files to be removed (in seconds)[m
[32m+[m[32mconst FILE_AGE_LIMIT_SECONDS = 30;[m
[32m+[m[32m// Define the interval for periodic file cleanup (in milliseconds)[m
[32m+[m[32mconst CLEANUP_INTERVAL_MS = 5000;[m
[32m+[m
[32m+[m[32m// Perform periodic file cleanup[m
[32m+[m[32msetInterval(() => {[m
[32m+[m[32m  // Execute file cleanup operation[m
[32m+[m[32m  performFileCleanup();[m
[32m+[m[32m}, CLEANUP_INTERVAL_MS);[m
[32m+[m
[32m+[m[32mfunction performFileCleanup() {[m
[32m+[m[32m  try {[m
[32m+[m[32m    // Use findRemoveSync to remove files matching specified criteria[m
[32m+[m[32m    const result = findRemoveSync(DIRECTORY_PATH, {[m
[32m+[m[32m      age: { seconds: FILE_AGE_LIMIT_SECONDS },[m
[32m+[m[32m      extensions: FILE_EXTENSION,[m
[32m+[m[32m      limit: 100, // Limit the maximum number of files to remove per cleanup operation[m
[32m+[m[32m      maxLevel: 1, // Limit the depth of directory traversal[m
[32m+[m[32m    });[m
[32m+[m
[32m+[m[32m    // Log the result of file cleanup[m
[32m+[m[32m    logFileCleanupResult(result);[m
[32m+[m[32m  } catch (error) {[m
[32m+[m[32m    // Handle any errors that occur during file cleanup[m
[32m+[m[32m    handleCleanupError(error);[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mfunction logFileCleanupResult(result) {[m
[32m+[m[32m  // Log the number of files removed and their paths[m
[32m+[m[32m  console.log(`File cleanup completed. Removed ${result.deleted} files.`);[m
[32m+[m[32m  result.files.forEach((file) => {[m
[32m+[m[32m    console.log(`Removed file: ${file}`);[m
[32m+[m[32m  });[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mfunction handleCleanupError(error) {[m
[32m+[m[32m  // Log and handle the error appropriately[m
[32m+[m[32m  console.error("An error occurred during file cleanup:", error);[m
[32m+[m[32m  // Additional error handling logic can be added here, such as notifying administrators or retrying cleanup[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main -c:v copy -c:a aac -f hls -hls_time 5 -hls_list_size 3 .\videos\ipcam\index.m3u8[m
[32m+[m[32m// .\node_modules\.bin\nodemon .\hls-server.js[m
[32m+[m
[32m+[m[32m// .\node_modules\.bin\nodemon .\cleaner.js[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -fflags flush_packets -max_delay 100 -flags -global_header -hls_time 10 -hls_list_size 1 -vcodec copy -y .\videos\ipcam\index.m3u8[m
[32m+[m
[32m+[m[32m// http://localhost:4000/index.m3u8[m
[32m+[m
[32m+[m[32m// https://cookpete.com/react-player/[m
[32m+[m
[32m+[m[32m// {ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main \[m
[32m+[m[32m// -acodec aac -strict -2 -b:a 128k \    # Use AAC audio codec with a bitrate of 128k[m
[32m+[m[32m// -vcodec libx264 -preset ultrafast -tune zerolatency \  # Use H.264 video codec with ultrafast preset and zero latency tuning[m
[32m+[m[32m// -fflags nobuffer -flags -global_header -hls_time 2 -hls_list_size 3 \  # Set HLS segment duration to 2 seconds and keep a list size of 3[m
[32m+[m[32m// -y .\videos\ipcam\index.m3u8}[m
[32m+[m
[32m+[m[32m//[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main \[m
[32m+[m[32m// -acodec aac -strict -2 -b:a 128k \  # AAC audio codec with 128k bitrate[m
[32m+[m[32m// -vcodec copy \  # Use the same video codec as input[m
[32m+[m[32m// -preset ultrafast -tune zerolatency \  # Ultrafast preset with zero latency tuning[m
[32m+[m[32m// -fflags nobuffer -flags +global_header \  # Disable buffering and set global header flag[m
[32m+[m[32m// -max_delay 5000000 \  # Maximum delay in microseconds (5 seconds)[m
[32m+[m[32m// -hls_time 2 -hls_list_size 3 -hls_flags delete_segments \  # HLS settings: 2-second segments, list size 3, delete old segments[m
[32m+[m[32m// -y .\videos\ipcam\index.m3u8  # Output HLS playlist location[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 1 -hls_time 5 -hls_list_size 3 -hls_flags delete_segments -y ./videos/ipcam/index.m3u8[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 5 -hls_time 10 -hls_list_size 3 -hls_flags delete_segments -y ./videos/ipcam/index.m3u8[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 1 -hls_time 2 -hls_list_size 2 -hls_flags delete_segments -y ./videos/ipcam/index.m3u8[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -acodec aac -b:a 128k -vcodec libx264 -preset ultrafast -tune zerolatency -fflags nobuffer -hls_time 4 -hls_list_size 2 -hls_flags delete_segments -y ./videos/ipcam/index.m3u8[m
[32m+[m
[32m+[m[32m// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.18:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 100 -hls_time 2 -hls_list_size 3 -hls_flags delete_segments -y ./videos/ipcam/index.m3u8[m
[1mdiff --git a/server/hls-server.js b/server/hls-server.js[m
[1mnew file mode 100644[m
[1mindex 0000000..72a747a[m
[1m--- /dev/null[m
[1m+++ b/server/hls-server.js[m
[36m@@ -0,0 +1,133 @@[m
[32m+[m[32m// const http = require("http");[m
[32m+[m[32m// var fs = require("fs");[m
[32m+[m
[32m+[m[32m// const PORT = 4000;[m
[32m+[m
[32m+[m[32m// http[m
[32m+[m[32m//   .createServer(function (request, response) {[m
[32m+[m[32m//     console.log("request starting...", new Date());[m
[32m+[m
[32m+[m[32m//     const headers = {[m
[32m+[m[32m//       "Access-Control-Allo