# from flask import Flask, jsonify, request
# from pyezviz import EzvizClient

# app = Flask(__name__)
# ezviz_client = EzvizClient('ak.kr2727@gmail.com', 'Abhishek@27', 'apiiindia.ezvizlife.com')

# @app.route('/stream-urls', methods=['GET'])
# def get_stream_urls():
#     cameras = ['AY8856105']  # Add your camera serial numbers here
#     stream_urls = {}
#     for camera_serial in cameras:
#         try:
#             stream_url = ezviz_client.get_user_id(camera_serial)
#             stream_urls[camera_serial] = stream_url
#         except Exception as e:
#             stream_urls[camera_serial] = str(e)
#     return jsonify(stream_urls)

# if __name__ == '__main__':
#     app.run(debug=True)

# from pyezviz import EzvizClient, EzvizCamera
# import sys

# def main():
#     client = EzvizClient("ak.kr2727@gmail.com", "Abhishek@27","apiiindia.ezvizlife.com")
#     try:
#         client.login()
#         camera = EzvizCamera(client, "AY8856105")
#         print(camera.status())
#         camera.move('left')
#         camera.move('left')
#         camera.move('up')
#         camera.move('down')
#         camera.move('up')
#         camera.move('down')
#         print("Camera loaded")
#     except BaseException as exp:
#         print(exp)
#         return 1
#     finally:
#         client.close_session()
# if __name__ == '__main__':
#     sys.exit(main())


from flask import Flask, render_template, Response
import cv2

app = Flask(__name__)

# rtsp_urls = {
#     'camera1': 'rtsp://admin:LOZLUD@10.0.0.7:554/ch1/main',
#     'camera2': 'rtsp://admin:Admin@916@192.168.1.207:554/Streaming/Channels/101'
# }

def gen_frames():
    rtsp_url = 'rtsp://admin:LOZLUD@10.0.0.37:554/ch1/main'  # Replace with your camera's RTSP URL
    cap = cv2.VideoCapture(rtsp_url)
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)

