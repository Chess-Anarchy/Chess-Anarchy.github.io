import praw
import datetime

# Reddit API credentials
client_id = 'YOUR_CLIENT_ID'
client_secret = 'YOUR_CLIENT_SECRET'
user_agent = 'YOUR_USER_AGENT'
username = 'YOUR_USERNAME'
password = 'YOUR_PASSWORD'

# Create a Reddit instance
reddit = praw.Reddit(client_id=client_id,
                     client_secret=client_secret,
                     user_agent=user_agent,
                     username=username,
                     password=password)

# Define the subreddit and time range
subreddit_name = 'anarchychess'
start_time = datetime.datetime.now() - datetime.timedelta(days=1)
end_time = datetime.datetime.now()

# Fetch the top post from the subreddit within the specified time range
subreddit = reddit.subreddit(subreddit_name)
top_post = subreddit.top(time_filter='day', limit=1)

for post in top_post:
    if start_time < datetime.datetime.fromtimestamp(post.created_utc) < end_time:
        print("Title:", post.title)
        print("Author:", post.author)
        print("Score:", post.score)
        print("URL:", post.url)
        print("Created:", datetime.datetime.fromtimestamp(post.created_utc))
        break
