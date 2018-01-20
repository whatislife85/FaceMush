####  Multiples of 3 and 5

##def multiples(n):
##    a = 3
##    b = 5
##    c = []
##    for i in range(1, n):
##        if a * i < n:
##            c.insert (0, a * i)
##        if b * i < n:
##            c.insert (0, b * i)
##    print(sum(set(c)))

####  Even Fibonacci Numbers
##def evenFib(x):
##    a = []
##    def Fib(n):
##        if n < 2:
##            return 1
##        return Fib(n-1) + Fib(n-2)
##    for i in range(x+1):
##        if Fib(i)/2 != Fib(i)//2 and Fib(i) < 4000000:
##            a.insert(0, Fib(i))
##    print("Current Sum:", sum(a))
        
##NAMES OF FILES!

import os

picList = os.listdir('C:/Users/Legend/Desktop/htdocs/images')
pics = []
with open('C:/Users/Legend/Desktop/htdocs/javascript.js', 'r+') as textFile:
    for i in range(len(picList)):
        pics.append([picList[i], 1400, 1])
    old_text = textFile.read()
    textFile.seek(0, 0)
    textFile.write("\n\rvar pics = " + str(pics) + ";\n\n" + old_text)
    print("List:", pics)
