

export const message = (email: any, subject: string, message: string, message_html: string) =>{

    return {
        from: 'BookShopETN@gmail.com',
        to: email,
        subject: subject,
        text: message,
        html: message_html
    }
}