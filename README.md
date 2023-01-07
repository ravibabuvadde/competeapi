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

#### **Contest Platforms :**
1. codeforces<br>
2. codechef<br>
3. leetcode<br>

#### **Use :**

#### User Info
- get leetcode user info<br>
```https://competeapi.vercel.app/user/leetcode/<username>/```<br>
    This will return Leetcode user info in json format.
- get codechef user info<br>
```https://competeapi.vercel.app/user/codechef/<username>/```<br>
    This will return Codechef user info in json format.
- get codeforces user info<br>
```https://competeapi.vercel.app/user/codeforces/<username>/```<br>
    This will return Codeforces user info in json format.<br>

### **Example**
#### Example request for user info:
```[https://competeapi.vercel.app/user/codeforces/bharanispace/```<br>
    *[https://competeapi.vercel.app/user/codeforces/bharanispace/](https://competeapi.vercel.app/user/codeforces/bharanispace/)*

#### Example response for user info:
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

#### Contests Info

#### Upcoming Contests
- Upcoming Contests of all sites<br>
```https://competeapi.vercel.app/contests/upcoming/```<br>
    This will return all future contests
    
#### Request
[https://competeapi.vercel.app/contests/upcoming/](https://competeapi.vercel.app/contests/upcoming/)
    
#### Response
```
[
  {
    "site": "codeforces",
    "title": "Codeforces Round #817 (Div. 4)",
    "startTime": 1661870100000,
    "duration": 8100000,
    "endTime": 1661878200000,
    "url": "https://codeforces.com/contest/1722"
  },
  {
    "site": "codechef",
    "title": "Starters 54 (Rated for Div 2, 3 & 4)",
    "startTime": 1661956200000,
    "duration": 10800000,
    "endTime": 1661967000000,
    "url": "https://www.codechef.com/START54"
  }
]
```


- get leetcode contests info<br>
```https://competeapi.vercel.app/contests/leetcode/```<br>
    This will return Leetcode user info in json format.
- get codechef contests info <br>
```https://competeapi.vercel.app/contests/codechef/```<br>
    This will return Codechef user info in json format.
- get codeforces contests info<br>
```https://competeapi.vercel.app/contests/codeforces/```<br>
    This will return Codeforces user info in json format.
    
### Example

#### Example request for contests info:
```[https://competeapi.vercel.app/contests/leetcode/```<br>
    *[https://competeapi.vercel.app/contests/leetcode/](https://competeapi.vercel.app/contests/leetcode/)*

#### Example response for contests info:
```json
{
  "data": {
    "topTwoContests": [
      {
        "title": "Weekly Contest 308",
        "startTime": 1661653800,
        "duration": 5400,
        "cardImg": null
      },
      {
        "title": "Biweekly Contest 86",
        "startTime": 1662215400,
        "duration": 5400,
        "cardImg": "https://assets.leetcode.com/contest/biweekly-contest-86/card_img_1661011324.png"
      }
    ]
  }
}

```
