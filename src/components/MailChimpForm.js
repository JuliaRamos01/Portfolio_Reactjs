import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter"; /* parei aqui 1:34:27 */

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