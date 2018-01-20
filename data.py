import sqlite3
from operator import itemgetter
import operator

####SERVER

from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods = ["GET", "POST"])

def output():

    db = sqlite3.connect('database.db', timeout = 1)

    c = db.cursor()

    new_tuple = ()
    new_new = []
    
    img_name = str(request.form.getlist("name"))[2:-2]
    img_rank = str(request.form.getlist("rank"))[2:-2]
    img_clicks = str(request.form.getlist("clicks"))[2:-2]

    img_data = img_name, img_rank, img_clicks
    
    print("\nSite:\n\n" + str(img_data) + "\n\nDatabase:\n")

    while True:
        try:
            sqlite3.connect('database.db', timeout = 1)
            if request.method == 'POST':
                c.execute("insert into raw_data (name, rank, clicks) values "+ str(img_data))
                data = c.execute('select * from raw_data')
                for row in c:
                    print(list(row))
            else:
                c.execute("select count(clicks), name, rank from raw_data group by name")
                new_tuple = sorted(c.fetchall())

                for i in new_tuple:
                    new_new.append(list(i))
                 
                print("clicks:", new_new)
            break
        except sqlite3.OperationalError:
            print("database locked")

    db.commit()
    db.close()

    if request.method == 'GET':
        return(str("var ranking_list = "+str(new_new)))
    return("Done")

if __name__ == "__main__":
    app.run()


##if __name__ == "__main__":
        ##app.run("0.0.0.0", 5010)

        ##localhost:5010/output











