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
          src="https://scontent-gru1-2.cdninstagram.com/v/t51.75761-15/503522064_17897545224232341_8952279710628010696_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=103&ig_cache_key=MzY1OTMyNzcyMDI0MjAyMzY4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyODB4MTYwMS5zZHIuQzMifQ%3D%3D&_nc_ohc=YJv6rxtejLkQ7kNvwFWLZHD&_nc_oc=AdnUAHLluzyUNBvgI9b1RzTghYyb8qdwJNjUAEq9_UhxolyO55nosjNShEwPFu1pvSg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_gid=NjUXGT9IWxbBnu_w_hI88A&_nc_ss=8&oh=00_AfyqeJayj9gJkv1oEEQBFqn6eIH5c90Ol7Mut0vcYjwA0A&oe=69BBC16B"
          alt="Kethelyn Peres — Designer Gráfica especializada em Branding e Identidade Visual em Maringá, PR"
          loading="lazy"
          width="800"
          height="1000"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
