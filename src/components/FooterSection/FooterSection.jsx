import FooterBrand from './Components/FooterBrand';
import FooterContact from './Components/FooterContact';
import FooterSocialLinks from './Components/FooterSocialLinks';
import FooterCopyright from './Components/FooterCopyright';

export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        <FooterBrand />
        <FooterContact />
        <FooterSocialLinks />
      </div>
      <FooterCopyright />
    </footer>
  );
}
