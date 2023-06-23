from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

import urllib.parse as p
import re
import os
import pickle

SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl"]

def authenticate():
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "credentials_tmp.json"
    creds = None
    # the file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first time
    if os.path.exists("token_tmp.pickle"):
        with open("token_tmp.pickle", "rb") as token:
            creds = pickle.load(token)
    # if there are no (valid) credentials availablle, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(client_secrets_file, SCOPES)
            creds = flow.run_local_server(port=0)
        # save the credentials for the next run
        with open("token.pickle", "wb") as token:
            pickle.dump(creds, token)

    return build(api_service_name, api_version, credentials=creds)

def get_video_info(video_response):
    items = video_response.get("items")[0]
    # get the snippet, statistics & content details from the video response
    snippet         = items["snippet"]
    statistics      = items["statistics"]
    content_details = items["contentDetails"]
    # get infos from the snippet
    channel_title = snippet["channelTitle"]
    title         = snippet["title"]
    description   = snippet["description"]
    publish_time  = snippet["publishedAt"]
    # get stats infos
    comment_count = statistics.get("commentCount", None)
    like_count    = statistics["likeCount"]
    view_count    = statistics["viewCount"]

    # get duration from content details
    duration = content_details["duration"]
    # duration in the form of something like 'PT5H50M15S'
    duration_str = ""
  
    # parsing it to be something like '5:50:15'
    pattern = "PT(\d+H)?(\d+M)?(\d+S)"
    if re.search(pattern, duration):
        parsed_duration = re.search(pattern, duration).groups()
    # if reg:
    #     parsed_duration = reg.groups()
    
        for d in parsed_duration:
            if d:
                duration_str += f"{d[:-1]}:"
        duration_str = duration_str.strip(":")

    return {
        'title': title,
        'description': description,
        'channel_title': channel_title,
        'publish_time': publish_time,
        'duration_str': duration_str,
        'comment_count': comment_count,
        'like_count': like_count,
        'view_count': view_count
    }

def get_video_details(youtube, **kwargs):

    video = youtube.videos().list(
        part="snippet,contentDetails,statistics",
        **kwargs
    ).execute()

    if video.get("items"):
        return get_video_info(video)
    else:
        return None
