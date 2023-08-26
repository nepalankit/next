import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'
import User from '@/Models/userModel'

export const  sendEmail=async ({email,emailType,userId}:any)=>{
    try{
            //create a hashed token
            const hashedToken= await bcryptjs.hash(userId.toString(),10)

            if(emailType==='VERIFY')
            {
                User.findByIdAndUpdate({
                    verifyToken:hashedToken,
                    verifyTokenExpiry:Date.now()+3600000
                })
            }
            else(emailType==='RESET'){
                User.findByIdAndUpdate(
                    {

                        forgotPasswordToken:hashedToken,
                        forgotPasswordTokenExpiry:Date.now()+3600000
                    }
                )

            }
            var transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: process.env.USER,
                  pass: process.env.PASS
                }
              });

              const mailOptions=({
                from:process.env.MYEMAIL,
                to:email,
                subject: emailType==='VERIFY'  ? 'Verify Your Email' :'RESET Your Password',
                html: `<p> CLICK <a href="${process.env.domain}/verfiyemail?token=${hashedToken}">here 
                </a> to ${emailType==='VERIFY' ?'Verify Your email': 'Reset Your Password'}
                </p>`
            
            })
            const mailResponse=await transport.sendMail(mailOptions)
            return mailResponse
    }

    catch(error:any)
    {
        throw new Error(error.message)
    }


}