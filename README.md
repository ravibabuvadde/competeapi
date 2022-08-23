# Comepete API 

#### Users Profile fetched from Codeforces, Codechef, and Leetcode.
<br>

#### Users can be searched by username/handle.
<br>

## Features
- rating, ranking 
- solutions, problems solved by user
- contests participated by user
- rating history

## Usage
- get user profile<br>
```https://competeapi.vercel.app/user/<platform>/<username>/```<br>
    This will return user info in json format.

#### **Platforms :**
1. codeforces<br>
2. codechef<br>
3. leetcode<br>

#### **Use :**

- get leetcode user info<br>
```https://competeapi.vercel.app/user/leetcode/<username>/```<br>
    This will return Leetcode user info in json format.
- get codechef user info<br>
```https://competeapi.vercel.app/user/codechef/<username>/```<br>
    This will return Codechef user info in json format.
- get codeforces user info<br>
```https://competeapi.vercel.app/user/codeforces/<username>/```<br>
    This will return Codeforces user info in json format.

### **Example**
#### Example request :
```[https://competeapi.vercel.app/user/codeforces/bharanispace/```<br>
    *[https://competeapi.vercel.app/user/codeforces/bharanispace/](https://competeapi.vercel.app/user/codechef/bharanispace/)*

#### Example response :
```json
[
  {
    "contribution": 0,
    "lastOnlineTimeSeconds": 1660836836,
    "rating": 349,
    "friendOfCount": 1,
    "titlePhoto": "https://cdn-userpic.codeforces.com/no-title.jpg",
    "rank": "newbie",
    "handle": "Bharanispace",
    "maxRating": 349,
    "avatar": "https://cdn-userpic.codeforces.com/no-avatar.jpg",
    "registrationTimeSeconds": 1655563973,
    "maxRank": "newbie"
  },
  {
    "ratings": [
      {
        "contestId": 1701,
        "contestName": "Educational Codeforces Round 131 (Rated for Div. 2)",
        "handle": "Bharanispace",
        "rank": 14409,
        "ratingUpdateTimeSeconds": 1657298100,
        "oldRating": 0,
        "newRating": 349
      }
    ]
  }
]

```
