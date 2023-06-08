import json
import datetime
from datetime import timezone

# Test posts

test_post_1 = {
    "id": 1,
    "title": "Test post",
    "body": "Google QA department",
    "author": "Brabygg",
    "date": 1686229860.0
}

test_post_2 = {
    "id": 2,
    "title": "Test post",
    "body": "holy fucking shit. if i see ONE more en passant meme i'm going to chop my fucking balls off."
            " holy shit it is actually impressive how incredibly unfunny the entire sub is. it's not that complicated, "
            "REPEATING THE SAME FUCKING JOKE OVER AND OVER AGAIN DOES NOT MAKE IT FUNNIER. this stupid fucking meme has "
            "been milked to fucking death IT'S NOT FUNNIER THE 973RD TIME YOU MAKE THE EXACT SAME FUCKING JOKE. WHAT'S EVEN THE JOKE?????? "
            "IT'S JUST \"haha it's the funne move from chess\" STOP. and the WORST part is that en passant was actually funny for like "
            "a few years and it got fucking ruined in like a week because EVERYONE POSTED THE EXACT SAME FUCKING JOKE OVER AND OVER AGAIN. "
            "PLEASE MAKE IT STOP. SEEING ALL YOUR SHITTY MEMES IS ACTUAL FUCKING MENTAL TORTURE YOU ALL ARE NOT FUNNY. COME UP WITH A DIFFERENT FUCKING JOKE PLEASE",
    "author": "Brabygg",
    "date": 1686229860.0
}


# f = open("post_data.txt", "a")
# f.write(json.dumps(test_post_1) + "\n")
# f.write(json.dumps(test_post_2))
# f.close()

def load(post_id):
    f = open("post_data.txt", "r")

    i = 0
    for x in f:
        if i == post_id:
            break
        i += 1
        data = x

    f.close()
    data = json.loads(data)
    print("Title: " + data["title"])
    print("Body: " + data["body"])


def save(title, body, author):
    newData = {
        "id": None,
        "title": None,
        "body": None,
        "author": None,
        "date": None
    }
    f = open("post_data.txt", "r")

    # Roundabout way to read file line length
    i = 1
    for x in f:
        i += 1

    newData["id"] = i
    newData["title"] = title
    newData["body"] = body
    newData["author"] = author

    # Uses the current time for saving
    time = datetime.datetime.now(timezone.utc)
    newData["date"] = datetime.datetime.now(timezone.utc).timestamp()

    print(f"Saved entry '{title}' with ID {i} at {datetime.datetime.now()} UTC")
    f = open("post_data.txt", "a")
    f.write("\n" + json.dumps(newData))
    f.close()


# while True:
#    i = input("Save, load or exit? (s/l/e)")
#    if i == 'l':
#        i = input("ID to load: ")
#        load(int(i))
#    elif i == 's':
#        t = input("Post title: ")
#        b = input("Post body: ")
#        a = input("Post author: ")
#        save(t, b, a)
#    elif i == 'e':
#        break
