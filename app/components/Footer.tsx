import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from "@/components/ui/scroll-area"
import WP from '@/Resources/whatsapp.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[60%] p-16 max-md:p-5 text-white bg-[#283040] gap-5 flex  justify-between items-center max-md:flex-col'> 
    
    <Dialog>
        <div>
    <p>© 2025. All Copyrights reserved.</p>
    <DialogTrigger className='cursor-pointer underline underline-offset-2'>Privacy Policy</DialogTrigger>
    </div>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-3xl text-left'>  Our Privacy Policy:  </DialogTitle>
        
            <div>
            <ScrollArea className='w-full h-[500px] text-left'>

       <p> 1. Introduction This Privacy Policy explains how I power Projects we  collects, uses, and shares information about you when you visit our website and use our services.</p>
<p>2. Information We Collect We collect various types of information to provide and improve our services:
Personal Information: This may include your name, email address, phone number, and any other information you provide to us when filling out forms, subscribing to our services, or contacting us.
Usage Data: This includes information on how you interact with the Site, such as your IP address, browser type, and pages visited.
Cookies: We use cookies and similar technologies to enhance user experience and analyze trends.</p>
<p>
3. How We Use Your Information We use the information we collect for the following purposes:
To provide and maintain the Site and services
To improve, personalize, and analyze the Site
To communicate with you, including sending newsletters or promotional materials (if you have opted in)
To comply with legal obligations</p>
<p>
4. Sharing Your Information We do not sell or rent your personal information to third parties. However, we may share your information in the following situations:
With service providers who help us operate the Site
To comply with legal obligations, such as responding to subpoenas or court orders
In the case of a business transfer, such as a merger or acquisition</p>
<p>
5. Data Retention We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
<p>
6. Your Rights You have the following rights regarding your personal data:
Access, correct, or delete your personal information
Withdraw your consent (if processing is based on consent)
Object to the processing of your data in certain circumstances
opt out of marketing communications
To exercise any of these rights, please contact us at [contact information]. </p>
<p>
7. Security We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
</p>
<p>
8. Third-Party Links Our Site may contain links to other websites. We are not responsible for the privacy practices of these sites and encourage you to read their privacy policies.
</p>
<p>
9. Changes to This Privacy Policy We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on this page and update the effective date above.
</p>
</ScrollArea>
</div>
        
      </DialogHeader>
    </DialogContent>
  </Dialog>
  <div className='flex flex-col gap-2'>
    <div>
    <p className='text-3xl'>Owned & Operated by:</p>
    <p className='text-2xl'>Trunal Patel</p>
    </div>
  <div className='flex '> <Link href={'https://wa.me/9723503320?text='}>
  <div className='flex justify-center items-center gap-1 bg-[#52BA63] p-3  rounded-2xl'>
            <Image src={WP} alt='WP' width={500} height={500} className='w-full h-full' />
            <div className='flex flex-col'> <p className='text-sm text-nowrap'>Click here to contact us directly on</p> <p className='text-2xl'>WhatsApp</p> </div>
            </div>
            </Link>
            </div>
            </div> </div>
  )
}

export default Footer