<div className="flex flex-col min-h-screen">
  <main className="flex-grow"> {/* Acá el contenido */}</main>

  {/* Navbar mobile */}
  <div className="block md:hidden fixed bottom-14 left-0 w-full z-50">
    <Navbar />
  </div>

  {/* Footer mobile */}
  <div className="block md:hidden fixed bottom-0 left-0 w-full z-40">
    <Footer />
  </div>

  {/* Navbar + Footer en PC */}
  <div className="hidden md:block">
    <Navbar />
    <Footer />
  </div>
</div>
