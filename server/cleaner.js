const findRemoveSync = require("find-remove");

setInterval(() => {
  var result = findRemoveSync("./videos/ipcam", {
    age: { seconds: 30 },
    extensions: ".ts",
  });
  console.log(result);
}, 15000);

// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main -c:v copy -c:a aac -f hls -hls_time 5 -hls_list_size 3 .\videos\ipcam\index.m3u8
// .\node_modules\.bin\nodemon .\hls-server.js

// .\node_modules\.bin\nodemon .\cleaner.js

// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main -fflags flush_packets -max_delay 5 -flags -global_header -hls_time 5 -hls_list_size 3 -vcodec copy -y .\videos\ipcam\index.m3u8

// http://localhost:4000/index.m3u8

// https://cookpete.com/react-player/

// {ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main \
// -acodec aac -strict -2 -b:a 128k \    # Use AAC audio codec with a bitrate of 128k
// -vcodec libx264 -preset ultrafast -tune zerolatency \  # Use H.264 video codec with ultrafast preset and zero latency tuning
// -fflags nobuffer -flags -global_header -hls_time 2 -hls_list_size 3 \  # Set HLS segment duration to 2 seconds and keep a list size of 3
// -y .\videos\ipcam\index.m3u8}

//
// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main \
// -acodec aac -strict -2 -b:a 128k \  # AAC audio codec with 128k bitrate
// -vcodec copy \  # Use the same video codec as input
// -preset ultrafast -tune zerolatency \  # Ultrafast preset with zero latency tuning
// -fflags nobuffer -flags +global_header \  # Disable buffering and set global header flag
// -max_delay 5000000 \  # Maximum delay in microseconds (5 seconds)
// -hls_time 2 -hls_list_size 3 -hls_flags delete_segments \  # HLS settings: 2-second segments, list size 3, delete old segments
// -y .\videos\ipcam\index.m3u8  # Output HLS playlist location

// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 1 -hls_time 5 -hls_list_size 3 -hls_flags delete_segments -y .\videos\ipcam\index.m3u8

// ffmpeg -rtsp_transport tcp -i rtsp://admin:LOZLUD@10.0.0.2:554/ch1/main -acodec aac -strict -2 -b:a 128k -vcodec copy -preset ultrafast -tune zerolatency -fflags nobuffer -flags +global_header -max_delay 5 -hls_time 10 -hls_list_size 3 -hls_flags delete_segments -y ./videos/ipcam/index.m3u8
