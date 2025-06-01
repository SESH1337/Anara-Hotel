import React from 'react'

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-center mb-10 font-crimson">
        Contact
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 text-lg text-gray-700 font-crimson">
          <p>
            Have questions or want to book your stay? We’d love to hear from
            you! Reach out via phone, email, or visit us in person.
          </p>

          <div>
            <h3 className="font-bold text-xl text-[#7C4A27]">Phone</h3>
            <p>+995 599 123 456</p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-[#7C4A27]">Email</h3>
            <p>info@anarahotel.com</p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-[#7C4A27]">Address</h3>
            <p>Rustaveli Avenue 20, Tbilisi, Georgia</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-[350px]">
          <iframe
            title="Anara Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11900.701721182865!2d44.7912899!3d41.7099811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd799afc6e5%3A0x41c1f8c4c9d655c6!2sRustaveli%20Ave%2C%20Tbilisi%2C%20Georgia!5e0!3m2!1sen!2sge!4v1717250936266!5m2!1sen!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
