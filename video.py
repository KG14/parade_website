from tello import *
import tello
import cv2
import time, queue, socket, sqlite3, datetime, threading

# get_video_frame()

start()
takeoff()
print(get_battery())
flip_backward()
start_video()
while True:
    frame = get_video_frame()
    if frame is None:
        print("bah")
    frame = cv2.resize(frame, (360, 240))
    cv2.imshow("Tello Drone", frame)
    cv2.waitKey(1)
    # key = cv2.waitKey(1) & 0xff
    # if keyboard.is_pressed('escape'):  # ESC
    #     break
    # elif keyboard.is_pressed('w'):
    #     forward(30)
    # elif keyboard.is_pressed('s'):
    #     backward(30)
    # elif keyboard.is_pressed('a'):
    #     left(30)
    # elif keyboard.is_pressed('d'):
    #     right(30)
    # elif keyboard.is_pressed('e'):
    #     clockwise(30)
    # elif keyboard.is_pressed('q'):
    #     anticlockwise(30)
    # elif keyboard.is_pressed('r'):
    #     up(30)
    # elif keyboard.is_pressed('f'):
    #     down(30)
land()
stop_video()