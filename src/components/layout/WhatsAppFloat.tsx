import Image from "next/image";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=593992261101&text=Hola%2C+me+gustar%C3%ADa+agendar+una+evaluaci%C3%B3n+con+el+Dr.+Luis+Calder%C3%B3n.+%C2%BFTiene+disponibilidad+esta+semana%3F&type=phone_number&app_absent=0";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[.15] transition-transform hover:scale-105"
    >
      <Image
        src="/assets/wppicon.webp"
        alt="WhatsApp"
        width={48}
        height={48}
        className="object-contain"
      />
    </a>
  );
}
