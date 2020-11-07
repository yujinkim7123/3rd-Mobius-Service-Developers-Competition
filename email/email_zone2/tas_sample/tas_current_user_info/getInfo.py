import time
import sys
import os


try:

  var1 = sys.argv[1]

  file = open('./currentUserInfo.txt', 'w')
  file.write(var1)
  file.close()

  print(var1)

  time.sleep(1)

except KeyboardInterrupt:
  time.sleep(1)