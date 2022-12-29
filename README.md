<h1 align="center"> memory-card-game 🃏</h1>  

#### Click [here](https://lisa-go.github.io/memory-card-game) for live preview.
<br>

# Made with

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<br>

# Description

#### A memory game featuring Nijisanji EN Vtubers. The goal is to only click each card once!
<br>

# Features
- Cards shuffle on each click
- High score tracker
- A tooltip on the top bar for instructions
<br>

# Previews

### Home Page
<img src="https://i.imgur.com/Je8Cg6C.png" alt="homepage" width="700" />

### Tooltip Instructions
<img src="https://i.imgur.com/heAvzwf.png" alt="tooltip" width="150" />

### Game result alert
<img src="https://i.imgur.com/rJfJvfx.png" alt="game result alert" width="430" />
<br>

# Things I learned from this Project
* Introduced me to useEffect, in order to accurately keep track of the current score.
```js
useEffect(() => {
    if (pickedCards.length === 26) {
        setHighScore(26);
        setPickedCards([]);
        alert('Win');
    }
    }, [pickedCards])
```
* Introduced me to react hook libraries such as tooltip
```js
import ReactTooltip from 'react-tooltip';

<div className="Help"
    data-tip="
    Click on a card to score a point! 
    Clicking the same card twice will end the game.">
    <TiLightbulb size={30} />
    <ReactTooltip />
</div>
```