export default function DesignerPhoto() {
  return (
    <div className="relative px-6 md:px-12 lg:pl-24 lg:pr-0 pb-12 lg:pb-0">

      {/* Bloco decorativo deslocado — primary-1 sutil */}
      <div
        className="absolute top-6 left-10 md:left-16 lg:left-28 w-full h-full rounded-sm pointer-events-none"
        style={{ background: "var(--color-primary-1)", opacity: 0.18, maxWidth: "calc(100% - 2.5rem)" }}
        aria-hidden="true"
      />

      {/* Foto da designer com borda fina em primary-2 */}
      <div
        className="relative overflow-hidden rounded-sm"
        style={{
          paddingBottom: "125%",
          border: "1px solid var(--color-primary-2)",
        }}
      >
        <img
          src="https://lh3.googleusercontent.com/rd-d/ALs6j_GYW8gScGTEuj_6kKVdl2xveW2slyMM7e4QRtoAWc3BtEvcz-dhk7_JEe0dDzaWHBmI5l1naRpGqwzseOZ7Bc2aKhkdicW35OEhDdbbpt1N8Y_4oa-RlObDGb6Jjcw1uRwMGsyI8B0FcpZ2TNTnRzQvqhV8tD81I3Kd9xOP6Zo0ei5N6x1DozTRtMNC6gnldWXNJxzgsWT8q2f1-hVcfgCKG4mNBceu9iClP4ZW7rm5vO2nj1KDlbIpoWKEIrJoUj72t5OOgvkZM8LwJ4tpF0mdJRzIIGohKUygmUBqoDUzNhHK5sd2-JUvY9cuO_r41xioE3KV-grxrhgtBiSibujJ_5_K7aWjosLRBczqN63xFoMOiOKxkHHJsD_hT1tBMdoF-lTG6UXPZY4eTorhWVsWAs2kOSBT4glcgg_pwdOdspeqOnS8CPScaUO_dphN8it07aCCemZ547CqhZXGZx9Dyp-Z2PJqwwShpqDg18c0RGr2Kqx3sIw5nlFJmA9p4jcU5nV3Ub_xU17IHmbIiZfB9iJ8UbILU6Xf_5J2iIZaypC4giIOaEHYODFUiExtBgB4Co1HJ27Uj0-VI7eWwZrSdr_W6-uENM9Ys6S-BW2hyrpnqwUVC0CDa_lmh9eQ_FWD9Hiwg_q-1qG-BUPOZwtNp8zll91Tk_CV28S-xzf7M-RIPpauqG6rQ8cbdWk0zqmuZTpeYjoI2tfhDiT7DQiqxpMgI7pwpR223Kl-kwiJYT_1fOA3hupwM_ge5XFUhxR15UxCfv0TpkcoBKIlu5243mjPN4QmSlQiT1ZotRIRcc4POjd6eZISDzjnSnWlCd9ydR8RzJcNnuqPGW1EkDe8tkDuGDpyfYdmUM11oFHK3r7an2Fwoj4YSSViDyB2CvKYb83DKjjAWCWkaxFOhg4r3NTnpQ20sS_PimpvFt5ZsOeS_raoWjoEagmwXJEMCfFEOWZ_gobigCbKgVIptIqnUbF4zcFsQ-pHpTmPXGgPHEw58ekxSMtJANWqQ3gupuOA3FDrin0TZhkeZ5Xse0l039wF8b9Kju9l7EwnMSdRgc5P7oF-uUUmBPC62QNzHnZKlGJEvOfcCsnmHcXw080pT7aVBGHr-Kr2DDpqxaq7lNQI3nRvZcDEo7XOgRSZR0VBcc2lqtnUlSIYBHN7DbRyq3BaJFwjVg-j69o=w1273-h892?auditContext=forDisplay"
          alt="Kethelyn Peres — Designer Gráfica especializada em Identidade Visual"
          loading="lazy"
          width="800"
          height="1000"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
