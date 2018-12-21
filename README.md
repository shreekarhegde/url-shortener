# url-shortener
An application which reduces the length of URL using npm package 'shorthash', tracks the details such as clicked date and time, IP address, Browser details, OS type and device type.
This helps the users to keep track of activities on his website such as no.of clicks and other informations which helps to improve the quality and content.

# Dependencies
  1. ` express `
  2. ` express-useragent `
  3. ` mongoose `
  4. ` morgan `
  5. ` nodemon ` 
  6. ` shorthash `
  7. ` url-hash `
  8. ` useragent `

# Usage
- When the original URL is provided which might be several characters long, its shortened version will be returned.
 - eg: orginal URL `https://www.facebook.com`
       - shortened URL `29aXmW`
- On entering the shortened URL user will be redirected to original URL.
- Tracking the details
  - | Fields | Information |
    | ------ | ----------- |
    | IP address | ::1     |
    | Browser name | Chrome |
    | OS Type | windows 10.0 |
    | Device type | other 0.0.0 |
    | Clicked date and time | 2018-10-08T11:04:24.870Z |

 # Author
 Shreekar Hegde

