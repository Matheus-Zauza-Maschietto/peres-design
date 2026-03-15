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
          src="https://lh3.googleusercontent.com/rd-d/ALs6j_EquTD54K6SmvWWmEUX94hH7m0lA1QU11fZye_pRRmpY_eDxiWmwAPaIJ1s8DZzzPW_0GUlmwlamYUIsQ99Q7MFnu6yauPpjRgKzeuWsIyFVc5GBxdIyu-byGacsPbmgQQZCLVglV0LLa8dM0tJGa7WeaT_sVAkHQhoEITVyKl8zglwbo15vIaOCqReoZStMU_03e8fg00CVPyrV4xEVQPTrn_mAbb6LWnNwZJ8em4LGEkiwv1QUGKok6TYQDsR53TCowewgozliykzQuvW9wuigYMRATkxlnoKWH9-Bxll5PuOWJcAhMwuC9sVfDtoRUVD-2erwuAXIN2_rvOM-h5flFQ-IjzPdfChcRDRPN4TeQolp2Rahjn-XZtqCF_rgAYwMQbOAkwrcq84yr4Uu6yVQ9RyXkSlsEBsb1Hjrn87utP-tqqdrN8UP9RqzIJB8GSu1Z8zpofJgNwKW55IElvh1BO4nuXadsxwCX6oQoqq7U5BUZO5NweKjAQoEZJbOHnKefsnmN_wp0u-tiOIidKhs_HrjI9q81zdE-saGe_PZo2SYtH00wyWLudk9xZeervxIjGzIHpBRS863OSb_8MjKSiYzUoXvvKQeEJ_oo5Zz3D4MmkcGHWB_GpHSukMXiKDOJ6dXeDavBFQ33XjMS83tmyOMt7_GYzFl-HkTx4jqvk05eal9rxPjmAKPSdQZ-s1XqVvJx-cjRz-JY1PCKmerA2va0IgZule8MbwwbXWSDxNfm0DwfFrxY-4xdpqz20xNLbeVjvmJGET7HSy7nisS-C3_FnQVOhrw2WnkVIx5Gv3HxrL_M1MM-35rJby2zDV3E5UMKiYsClpvuKSAOrz9pnhFNCeUWOyfo3KsqXVCS1U_eMvYLQ2RNxXD7rZ-K3aLrXyfzu2lIUUhCCcY6PdlrW6y_QFs9KgcRnCgikXQWof2DXWDt_FDBALlaLSPYKA0fPCQRK80yKtEuYiM3Oc19xFWFyq54NkN5QNxFoZZGxR_Z3ekPMMLqXe9c5yTPzwin-_MF1O_pF9rddRpawQ54AAAzOrjtar8BGxo-I=w1848-h916?auditContext=forDisplay"
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
