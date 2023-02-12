import MailchimpSubscribe from "react-mailchimp-subscribe";

export const MailchimpForm = () =>{
    const postUrl = `${process.env.REACT_APP.MAILCHIMP_URL}?u=${process.env.REACT_APP.MAILCHIMP_U}$id=${process.env.REACT_APP.MAILCHIMP_ID}`:
    return(
        <>
        <MailchimpSubscribe
        url={postURL}
        render={({subscribe, status, message, }) => (
            <></>
        )}
        />
        </>
    )
}