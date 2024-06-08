Interactive story script 

HTML: 
https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/index.html#L12-L74
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/index.html#L23
    - The button that opens up the video.
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/index.html#L34-L36
    - The button that resizes the video.
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/index.html#L59-L62
    - This is a dialogue example. Each dialogue group has its own ID that will be used as a link to other groups. The dialogue is activated on click. It then takes the user to the timestamp (sec1), plays for a specified duration (dur1). If necessary, it can repeat that process by adding sec2 and dur2. After that, there's a choice that will be saved in local storage.
----------------------------------------------------------------------
JS:
https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L1-L177
  
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L2-L31

    - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L3-L7
      - Get the video elements from the ID in HTML, set the current time to the seconds1 variable, and play it.

    - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L10-L30
      - This is a set time function that sets a timeout to pause the video after a specified duration (duration1). After pausing, it checks if a second set of time and duration (seconds2 and duration2) are provided. If so, it sets the video's playback time to the second time and resumes playback. Another timeout is set to pause the video after the second duration and execute the callback function if provided. If no second set of time and duration is provided, it immediately executes the callback function after the initial pause.
 
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L34-L69
    - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L35-L39
      - Hiding all the dialogue

    - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L42-L55
      - Using the setTime function to display dialogue at the appropriate time. The dialogue is found after its ID, then gets displayed, and the choice gets saved in the LocalStorage.
 
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L71-L76
    - This function displays the video after pressing the button.
  
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L78-L101
    - This function is responsible for closing the video. After closing the video, it clears the LocalStorage, resets the video, hides the dialogue, and clears timeouts. This addresses a bug where the dialogue would appear twice or too early due to closing the window.
  
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L104-L108
    - Saving the choices in the LocalStorage function.
  
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L110-L128
    - Toggling the video size by the button.
  
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L131-L142
    - This function is responsible for displaying the END dialogue. After it's pressed, a pop-up window will appear showing the choices made during the video.
 
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L145-L147
    - Loading the first dialogue after opening the video to start it.
 
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L150-L156
    - Toggling video size function.
  
  - https://github.com/witzakr/grp/blob/6441445e34c2ac751cc84a591e9ecb4e9c7c23bb/script.js#L172-L177
    - This function fixes a bug where dialogue would appear too quickly after closing the video or would appear twice.
