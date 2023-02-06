import { SESv2Client, sendEmailCommand } from "@aws-sdk/client-sesv2";

// a client can be shared by different commands.
const client = new SESv2Client({ region: "us-east-2" });

const params = {
    /** input parameters */
};
const command = new sendEmailCommand(params);

const sendServiceNotification = async (message) => {
    // async/await.
    try {
        const data = await client.send(command);
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}