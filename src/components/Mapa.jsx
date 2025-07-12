export default function Mapa() {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6547.156927198426!2d-57.898104786872835!3d-34.86681782042769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e44bde9760b9%3A0x7cad7c37fa17302e!2sHospital%20Zonal%20General%20de%20Agudos%20Mario%20V%20Larrain%2C%20Berisso!5e0!3m2!1ses-419!2sar!4v1752285423299!5m2!1ses-419!2sar"
        height="450"
        width="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
