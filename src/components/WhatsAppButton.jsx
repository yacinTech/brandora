"use client";

export default function WhatsAppButton() {
  const phoneNumber = "212625902672"; // ضع رقمك هنا بصيغة دولية بدون +
const message = "Bonjour, je suis intéressé par vos services. Pouvez-vous me contacter ?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="whatsapp-icon"
        >
          <path
            fill="white"
            d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.76 5.71 2.2 8.188L0 32l7.644-2.155A15.93 15.93 0 0016 31.604c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.13a13.01 13.01 0 01-6.628-1.81l-.474-.28-4.535 1.278 1.21-4.414-.308-.457A13.01 13.01 0 013.07 16.396c0-7.127 5.803-12.93 12.93-12.93s12.93 5.803 12.93 12.93-5.803 12.93-12.93 12.93zm7.243-9.756c-.396-.198-2.343-1.155-2.706-1.287-.363-.132-.627-.198-.891.198s-1.023 1.287-1.254 1.551c-.231.264-.462.297-.858.099-.396-.198-1.674-.617-3.19-1.966-1.18-1.054-1.977-2.354-2.208-2.75-.231-.396-.025-.61.173-.808.178-.178.396-.462.594-.693.198-.231.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.891-2.145-1.221-2.937-.321-.77-.648-.665-.891-.678l-.759-.013c-.264 0-.693.099-1.056.495s-1.386 1.353-1.386 3.3 1.419 3.828 1.617 4.092c.198.264 2.79 4.262 6.766 5.973.946.408 1.683.651 2.257.834.949.302 1.814.259 2.498.157.762-.113 2.343-.957 2.673-1.881.33-.924.33-1.716.231-1.881-.099-.165-.363-.264-.759-.462z"
          />
        </svg>
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          z-index: 9999;
          transition: all 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }

        .whatsapp-icon {
          width: 30px;
          height: 30px;
        }

        /* تأثير نبض خفيف احترافي */
        .whatsapp-float::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          animation: pulse 2s infinite;
          z-index: -1;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 55px;
            height: 55px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-icon {
            width: 26px;
            height: 26px;
          }
        }
      `}</style>
    </>
  );
}