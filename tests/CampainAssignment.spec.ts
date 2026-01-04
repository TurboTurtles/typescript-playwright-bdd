import { test } from "playwright/test";


// divisible by 3 → "Email"
// divisible by 5 → "SMS"
// divisible by both 3 and 5 → "Email+SMS"
// otherwise → "No campaign"

test ('MarketingEmailorSMS', async () => {
    for (let i = 1; i <= 7; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("send Email and SMS")
        } else if (i % 3 === 0) {
            console.log("send Email")
        } else if (i % 5 === 0) {
            console.log("send SMS")
        } else {
            console.log("No campaign")
        }
    }
});