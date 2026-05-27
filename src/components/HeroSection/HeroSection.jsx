import HeroContent from './Components/HeroContent';
import HeroScrollIndicator from './Components/HeroScrollIndicator';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-6"
      style={{ 
        backgroundColor: '#FAFAFA', 
        backgroundImage: 'url(https://lh3.googleusercontent.com/rd-d/ALs6j_GVPE-M9Tiv-PIUKr1F--Gy41_ZVwgFnNTBI_01CdeHYOjyoelHigpW8SFMxMOX5E6imuwjCw65lVD38yJVBdq69wRQ3r2yuGT6L9-86smchqCXHblYLrNOgL64ocW1a8Iq1n78-Ni92wJMUkbHZ2o1UmyV9BCV2AU3dMa-_hHHY6aXv9SgiRdJfy47qZV7_H2JXrGU5FWFr-CVNxLG7h4exQocL11s0Gypv6RUCXoyOyVCnMzHWPbAcTv-9JdLGURHWhAr4PD310B8e0aBepUWI3sneD_H5ZuyNn3ptCCRYYFVOkrreCnd1vweo0mWTlGrkV7NlRaIuiyv0c11KfthpacsxCF6BGEcL3x3a2eICLckbnSPa_xJlPCogA8RBHEKmDtBBkmdspFP_b0RBJZAh0wgtJQjaAajzfBKeRgEKWH56QpXFk3tqnC2fxufYdIuj0RLwxn92Q5PWbMtuwqXnONIaFDdATGgbfSs1yv_8OcSXFNpMnKNAq8DPWdiUQo920F7DlPuL29rruGs09Ofxkj4TaaxspuFwUwelauZkvil7T52xArAD9yTez5MSzKwZlKxySirkCi440JnEQNq0iClBge0vxla1gaG1TdKis_0xWWlQcii2_zxalARmG2HNtcPLI3OG14XYRNp7mDeZifPAjZfc9-M-DoaCwcQIJkTXuyMe1fbboRGLy2t-nhHqEE41BxyFUGlmwCsguOkITdeGaGINakNeCqbEKKjmCYypFm2p77Ff68K1_IjC6ET9LeVI19f9Fwx-gy7q-V97ptVnIu2fktDYJfhc_THNUfJpPxuGTtrE3y8ONmoXulOmRZwKRKlGT41GXJaGf5B2gZZnjJIzdGIDx_rvir-ctTCPivpP9XiBFketQ3Z4wdBp0WgVs5xUTRcmNkVQniuCv2QcQecCXnLC6v45GTHJf5EENS5VNAOlIlvXxklO0DcZ7DKZwCB_foT8f1H_JVYZl96yn8taXHgfpeg_OEct5olJvf561BRGjnpkR-He-qkbn9Z_nRnMa7H_Hr4Zeic69t9hQ3aumlFPio8CQ5IdFJNR07abMZiOtRJzLoY4d9ltB2fpXQ9KaiyRsKiiyy9CYa3xZs61pcfqTJKvUcQc81Csenj3lUP868Rbb2_0R9b1ZuS_Z4TGtBPo58IUKrWAfsBdehRuJEy_F0=w1836-h916?auditContext=prefetch)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.8)',
      }}
      aria-label="Introdução — Peres Design"
    >
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
