
const nodemailer = require("nodemailer")

const config = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user:'BookShopETN@gmail.com',
        pass: 'bprsjtctkpszqwsm'
    }
}

export const sendMail = async (message: any) => {

    const transporter = nodemailer.createTransport(config)

    await transporter.sendMail(message)
}