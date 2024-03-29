### Dome

---

I have several production telegram bots written in Python that require data storage.These bots are either standalone ([newsbot](https://github.com/olamileke/politicalnewsbot "newsbot")) or are helpers to applications I built ([yeetbot](https://github.com/theyeetapp/yeetbot "yeetbot"), [mauibot](https://github.com/maui-app/mauibot "mauibot")). In building these bots, I was faced with a challenge in that these bots need to hold user state. They need to know which respective users they were communicating with. And due to the conversational, quick fire (stateless) nature of chat, I didnt want the bots hitting their respective APIs on every single message to know which user from the integrated API was messaging it. From this, it would then take the user information and execute its operations. I also wanted to avoid two other potential bottlenecks I saw

- Overloading the APIs with too many requests if every single message involved querying for the user information and then hitting said API again to perform its operations.
- Say, the APIs were taking too long to respond, this would delay the response time of the bot and make it hard to mimic an actual conversation.

So I made the decision to use file storage to enable the quick fetching of information and generally speed up operations. Despite this, I still wanted to have the security of having the application's data stored externally. So I decided to build Dome, with which I can set the bots up to automatically back their data at periodic intervals.
