export default function Contact() {
  return (
    <section className="container">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-white/80 mb-4">
        For bookings, collaborations, or enquiries, reach out to us.
      </p>

      <a
        href="mailto:info@broadendefined.com?subject=Consultation%20Enquiry"
        className="bg-mustard text-black px-6 py-3 rounded-lg inline-block font-semibold hover:bg-yellow-600 transition"
      >
        Get Consultation
      </a>
    </section>
  );
}
