function renderContact() {
    mainContent.innerHTML = `
    <section class="bg-slate-900 text-white pt-32 pb-12">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold">Contáctenos</h1>
            <p class="text-slate-400 mt-2">Estamos listos para gestionar su proyecto industrial.</p>
        </div>
    </section>

    <section class="py-16 bg-white" id="contact-form-section">
        <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-6xl">

            <!-- Contact Info & Map -->
            <div>
                <div class="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 mb-8">
                    <h3 class="text-xl font-bold text-slate-800 mb-6">Información Corporativa</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4 text-orange-600"><i class="fas fa-map-marker-alt"></i></div>
                            <div>
                                <p class="font-bold text-slate-900">Sede Central & Planta</p>
                                <p class="text-slate-600">Cam. de Valdecabañas, Argada del rey, M 28500<br>Madrid, España</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4 text-orange-600"><i class="fas fa-phone"></i></div>
                            <div>
                                <p class="font-bold text-slate-900">Teléfonos</p>
                                <p class="text-slate-600">+34 916 12 44 85 (Ventas)</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-orange-100 p-3 rounded-full mr-4 text-orange-600"><i class="fas fa-envelope"></i></div>
                            <div>
                                <p class="font-bold text-slate-900">Email</p>
                                <p class="text-slate-600">vipwelleuropesl71@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Google Maps Map -->
                <div class="w-full h-80 bg-slate-200 rounded-xl overflow-hidden shadow-inner border border-slate-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5367808298!2d-3.4475459!3d40.3303866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd423984d436cf17%3A0xc6c7694f83e0a75b!2sCam.%20de%20Valdecaba%C3%B1as%2C%2028%2C%2028500%20Arganda%20del%20Rey%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <!-- Form -->
            <div class="bg-white p-8 rounded-xl shadow-xl border border-slate-100">
                <h3 class="text-2xl font-bold text-slate-800 mb-6">Envíenos un mensaje</h3>
                <form onsubmit="event.preventDefault(); alert('Mensaje enviado. Gracias por contactar a VIPWELL.');" class="space-y-6">
                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                            <input type="text" class="w-full bg-slate-50 border border-slate-300 rounded p-3 focus:outline-none focus:border-orange-500" placeholder="Su nombre">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-2">Empresa</label>
                            <input type="text" class="w-full bg-slate-50 border border-slate-300 rounded p-3 focus:outline-none focus:border-orange-500" placeholder="Nombre empresa">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Email / Teléfono</label>
                        <input type="text" class="w-full bg-slate-50 border border-slate-300 rounded p-3 focus:outline-none focus:border-orange-500" placeholder="Contacto directo">
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Interés Principal</label>
                        <select class="w-full bg-slate-50 border border-slate-300 rounded p-3 focus:outline-none focus:border-orange-500">
                            <option>Compra de Maquinaria</option>
                            <option>Servicio de Maquila (Producción)</option>
                            <option>Gestión de Importación/Sourcing</option>
                            <option>Servicio Técnico</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-slate-700 mb-2">Detalles</label>
                        <textarea rows="4" class="w-full bg-slate-50 border border-slate-300 rounded p-3 focus:outline-none focus:border-orange-500" placeholder="Descripción de su proyecto..."></textarea>
                    </div>
                    <button type="submit" class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded transition shadow-lg">ENVIAR SOLICITUD</button>
                </form>
            </div>
        </div>
    </section>
    `;
}
