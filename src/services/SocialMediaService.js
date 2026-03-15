class SocialMediaService {
  instagram = {
    handle: "peresdesigns",
    url: "https://www.instagram.com/peresdesigns",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
  };

  whatsapp = {
    number: "554497324658",
    url: `https://wa.me/554497324658`,
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    buildUrl(packageName) {
      const message = `Olá, gostaria de saber mais sobre o pacote ${packageName}.`;
      return `https://wa.me/${this.number}?text=${encodeURIComponent(message)}`;
    },
  };

  behance = {
    handle: "peresdesigns",
    url: "https://www.behance.net/peresdesigns",
    icon: "fa-brands fa-behance",
    label: "Behance",
  };

  email = {
    address: "peres.designss@gmail.com",
    url: "mailto:peres.designss@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "E-mail",
  };
}

export const socialMediaService = new SocialMediaService();
export default SocialMediaService;
