<a href="https://imgbb.com/"><img src="https://i.ibb.co/LxPnZ1Z/Screen-Shot-2023-06-11-at-0-13-04.png" alt="Screen-Shot-2023-06-11-at-0-13-04" border="0"></a>

# Soojumg Music Bot 


### A Discord Music Bot  
Supports  **Spotify**, **User inputs**.


### Reference version  
[**node.js  `v16.17.1`**](https://nodejs.org/en/)  
[**discord.js  `v14.5.0`**](https://www.npmjs.com/package/discord.js)  



[`config.json`](./config.json)  
```json
{
    "name": "soojumg.beats",
    "prefix": "soo!",
    "playing": "soo!help",
    "quality": "highestaudio",
    "maxVol": 200,
    "autoLeave": true,
    "displayVoiceState": true
}
```
**`autoLeave`** : After the bot finishes the track playing and if there is no activity, it auto leaves   
**`displayVoiceState`** : Show voice channel status updates.   

## Running the script 
```
node index.js
```


