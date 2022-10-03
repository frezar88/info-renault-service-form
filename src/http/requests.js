import {$host} from "./index";



export const axiosSendToMailer = async (data) => {
    return  await $host.post('Action_service/service_form/php/smtpmailer.php',data)

}

export const axiosSendToBot = async (data) => {
    return  await $host.post('Action_service/service_form/php/userDataToTg.php',data)

}
