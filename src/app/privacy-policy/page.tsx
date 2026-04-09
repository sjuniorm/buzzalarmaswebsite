import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aviso Legal y Política de Privacidad | Buzz Alarmas",
  description: "Aviso legal, política de privacidad y condiciones de uso del sitio web de Buzz Alarmas — BUZZ ALARMAS, S.L. · CIF: B01623032",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3 text-white/60 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="border-b border-white/5 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo-white.png" alt="Buzz Alarmas" width={160} height={56} className="h-12 w-auto object-contain" />
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-orange transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-3">Aviso Legal</h1>
          <div className="w-16 h-1 bg-orange rounded-full mb-4" />
          <p className="text-white/60 text-base font-semibold mb-2">Política de Privacidad / Condiciones de Uso del Sitio Web</p>
          <div className="bg-dark-2 border border-white/5 rounded-xl px-5 py-4 mt-4 space-y-1 text-sm text-white/50">
            <p><strong className="text-white/70">Entidad:</strong> BUZZ ALARMAS, S.L.</p>
            <p><strong className="text-white/70">CIF:</strong> B01623032</p>
          </div>
        </div>

        <Section title="1. Objeto y aceptación">
          <p>
            El presente aviso legal regula el uso del sitio Web: www.buzzalarmas.com. La navegación por la página www.buzzalarmas.com atribuye la condición de usuario de la misma e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal, que pueden sufrir modificaciones.
          </p>
          <p>
            El usuario se obliga a hacer un uso correcto del sitio Web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal. El Usuario responderá frente a BUZZ ALARMAS y frente a terceros, de los daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
          </p>
        </Section>

        <Section title="2. Condiciones de acceso y utilización">
          <p>
            El sitio Web y sus servicios son de acceso libre y gratuito. El Usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique a BUZZ ALARMAS y será el único responsable de las manifestaciones falsas o inexactas que realice.
          </p>
          <p>El Usuario se compromete expresamente a hacer un uso adecuado de los contenidos y servicios ofrecidos y a no emplearlos para:</p>
          <ol className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li>Difundir contenidos delictivos, violentos, pornográficos, racistas, xenófobo, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.</li>
            <li>Introducir en la red virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los documentos electrónicos, datos o sistemas físicos y lógicos de BUZZ ALARMAS o de terceras personas; así como obstaculizar el acceso de otros Usuarios al sitio Web y a sus servicios.</li>
            <li>Intentar acceder a áreas restringidas de los sistemas informáticos de BUZZ ALARMAS o de terceros y, en su caso, extraer información.</li>
            <li>Vulnerar los derechos de propiedad intelectual o industrial, así como violar la confidencialidad de la información de BUZZ ALARMAS o de terceros.</li>
            <li>Suplantar la identidad de otro Usuario, de las administraciones públicas o de un tercero.</li>
            <li>Reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar los Contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido.</li>
            <li>Recabar datos con finalidad publicitaria y de remitir publicidad de cualquier clase y comunicaciones con fines de venta u otras de naturaleza comercial sin que medie su previa solicitud o consentimiento.</li>
          </ol>
          <p>
            Todos los contenidos del sitio Web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a BUZZ ALARMAS, sin que puedan entenderse cedidos al Usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la Web.
          </p>
          <p>
            En definitiva, los usuarios que accedan a este sitio Web pueden visualizar los contenidos y efectuar, en su caso, copias privadas autorizadas siempre que los elementos reproducidos no sean cedidos posteriormente a terceros, ni se instalen a servidores conectados a redes, ni sean objeto de ningún tipo de explotación.
          </p>
          <p>
            Así mismo, todas las marcas, nombres o signos distintivos de cualquier clase que aparecen en el sitio Web son propiedad de BUZZ ALARMAS, sin que pueda entenderse que el uso o acceso al mismo atribuya al Usuario derecho alguno sobre los mismos. Quedan prohibidas la distribución, modificación, cesión o comunicación pública de los contenidos y cualquier otro acto que no haya sido expresamente autorizado por el titular de los derechos de explotación.
          </p>
        </Section>

        <Section title="3. Política de privacidad">
          <p>
            Cuando precisemos obtener información por su parte, siempre le solicitaremos que nos la proporcione voluntariamente de forma expresa a través de los formularios de recogida de datos existentes en la Web. En el caso de que el usuario facilite datos de carácter personal de personas distintas al usuario se compromete a informar previamente, a las personas de las cuales facilita los datos personales, del contenido de la presente política de protección de datos, facilitando a los mismos, si fuera necesario, copia impresa de la misma.
          </p>
          <p>
            Igualmente, cuando los datos se refieran a un menor de edad y sean proporcionados por el mismo, BUZZ ALARMAS supondrá que él mismo cuenta con el consentimiento de los tutores legales, quedando exenta de cualquier responsabilidad por el incumplimiento de este requisito.
          </p>
          <p>
            De conformidad con lo dispuesto en el art. 4 de la LOPDGDD, el usuario se compromete a facilitar datos verdaderos, exactos, completos y actualizados. Los datos recabados a través de los formularios y del correo electrónico serán incorporados a un fichero automatizado de datos de carácter personal con el nombre de &quot;USUARIOS WEB&quot; del cual es responsable BUZZ ALARMAS, con todas las garantías legales y de seguridad que impone el Reglamento (UE) 2016/679 de Protección de Datos RGPD, la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales LOPDGDD y la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico LSSI-CE.
          </p>

          <div className="mt-6">
            <h3 className="text-base font-semibold text-white/90 mb-3">Finalidad — ¿Con qué finalidades tratamos sus datos?</h3>
            <p className="mb-3">BUZZ ALARMAS informa al Usuario de la existencia de un tratamiento de datos de carácter personal creado con los datos obtenidos en la página web por y para BUZZ ALARMAS y bajo su responsabilidad.</p>
            <p className="font-semibold text-white/70 mb-2 uppercase text-xs tracking-widest">Fines de tratamiento</p>
            <ol className="list-[upper-roman] list-inside space-y-2 pl-2">
              <li>Posibilitar a los usuarios la navegación por la misma, permitiendo con ello el acceso a la información y a los contenidos dispuestos en la Plataforma.</li>
              <li>Contactar con el usuario, dar respuesta a las solicitudes, peticiones o consultas, que pudieran derivarse de la utilización de los distintos formularios de la Plataforma.</li>
              <li>Adoptar cuantas medidas de protección resulten aplicables de conformidad con la normativa vigente, incluyendo, la posible anonimización de sus datos personales aplicando, para ello, las adecuadas técnicas disponibles al efecto. Por consiguiente, en este ámbito, también podrán realizarse tratamientos de anonimización y seudonimización para la mejor protección de sus datos personales.</li>
            </ol>
            <p className="mt-3">Dicho fichero ha sido creado con la finalidad de facilitar información sobre la prestación de los servicios ofrecidos por el Portal.</p>
          </div>

          <div className="mt-6">
            <h3 className="text-base font-semibold text-white/90 mb-3">Plazos — ¿Por cuánto tiempo conservaremos sus datos personales?</h3>
            <p className="mb-3">Los datos personales proporcionados se conservarán por el plazo determinado en base los siguientes criterios:</p>
            <p className="font-semibold text-white/70 mb-2 uppercase text-xs tracking-widest">Criterios de conservación</p>
            <ol className="list-[upper-roman] list-inside space-y-2 pl-2">
              <li>Con carácter general, se conservarán tus datos a estos fines por el tiempo imprescindible y necesario para posibilitarte la correcta navegación y el uso de nuestra plataforma y de los contenidos dispuestos a través de la misma a los que accedes. Respecto a los datos asociados a tu perfil de navegación, por relación a las cookies de tipo analíticas que hayas aceptado según se indica en la política de cookies.</li>
              <li>Por el tiempo imprescindible para atender de forma correcta sus peticiones y/o solicitudes específicas según cada caso.</li>
              <li>Mientras se traten datos personales del usuario, incluida la conservación de tales datos durante los plazos legales dispuestos, y con independencia de la base legítima de tratamiento.</li>
            </ol>
          </div>

          <div className="mt-6">
            <h3 className="text-base font-semibold text-white/90 mb-3">Legitimación — ¿Cuál es la legitimación para el tratamiento de sus datos?</h3>
            <p className="mb-3">La base legal para el tratamiento de los datos personales de los usuarios es la relación contractual y el propio consentimiento del interesado.</p>
            <div className="bg-dark-2 border border-white/5 rounded-xl p-5 space-y-3">
              <div>
                <p className="text-white/70 font-semibold text-xs mb-1">Posibilitar a los usuarios la navegación por la Plataforma</p>
                <p>Su consentimiento y, según los casos, satisfacción del interés legítimo, propio o de terceros, asociado a la adecuada gestión, mantenimiento, desarrollo y evolución de la plataforma, herramientas, red y sistemas de la información asociados, permitiendo su correcto funcionamiento, funcionalidades, acceso a contenidos y servicios, así como la seguridad general de todos los anteriores extremos.</p>
              </div>
              <div>
                <p className="text-white/70 font-semibold text-xs mb-1">Contactar con el usuario, dar respuesta a las solicitudes, peticiones o consultas</p>
                <p>Su consentimiento.</p>
              </div>
              <div>
                <p className="text-white/70 font-semibold text-xs mb-1">Adoptar cuantas medidas de protección resulten aplicables</p>
                <p>Cumplimiento de una obligación legal (Reglamento Europeo de Protección de Datos) RGPD.</p>
              </div>
            </div>
            <p className="mt-3">Asimismo, la oferta prospectiva de servicios está basada en el consentimiento que se solicita al usuario sin que en ningún caso la retirada de este consentimiento condicione la ejecución de otras finalidades.</p>
          </div>

          <div className="mt-6">
            <h3 className="text-base font-semibold text-white/90 mb-3">Destinatarios — ¿A qué destinatarios se comunicarán sus datos?</h3>
            <p>
              Los datos que se recogen en esta web mediante los formularios correspondientes serán objeto de comunicación a otras empresas que ejercen de encargados del tratamiento de datos personales, y que solo tratarán los datos conforme a las estrictas indicaciones que BUZZ ALARMAS establece con dichos encargados. En todo caso los datos serán comunicados dentro del espacio de la Unión Europea y solo para los fines anteriormente indicados.
            </p>
            <p className="mt-2">
              En el marco de las comunicaciones indicadas en el párrafo anterior, se podrán realizar transferencias internacionales de datos a terceros países u organizaciones internacionales, sobre los que exista una decisión de adecuación de la Comisión Europea respecto a los mismos.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-base font-semibold text-white/90 mb-3">Derechos — ¿Cuáles son sus derechos cuando nos facilita sus datos?</h3>
            <p className="mb-3">A los usuarios de la web titularidad de BUZZ ALARMAS se les garantiza los derechos que se establecen en la legislación en materia de Protección de Datos Personales:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Derecho a obtener una confirmación sobre si en BUZZ ALARMAS se están tratando datos personales que le conciernan o no.</li>
              <li>Derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos que sean inexactos o, en su caso, solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos.</li>
              <li>Derecho a oponerse al tratamiento de sus datos personales, por lo que BUZZ ALARMAS dejará de tratar sus datos, salvo si existen motivos legítimos, imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</li>
              <li>Facultad de solicitar a BUZZ ALARMAS que limite los tratamientos de sus datos personales cuando se cumplan los requisitos que el Reglamento UE 2016/679 RGPD exige.</li>
              <li>Derecho a recibir en un formato estructurado, de uso común y lectura mecánica los datos personales que le incumban y que haya facilitado a BUZZ ALARMAS, o solicitar a BUZZ ALARMAS que los transmita directamente a otro responsable cuando sea técnicamente posible.</li>
              <li>Cualquier interesado podrá presentar una reclamación ante la Agencia Española de Protección de Datos, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</li>
            </ul>
          </div>
        </Section>

        <Section title="3.1. Formulario de Contacto">
          <p>
            BUZZ ALARMAS le informa que su dirección de correo electrónico será introducida en un fichero automatizado (correo electrónico) con la finalidad de proporcionarles información de nuestros servicios y proyectos o cualquier otra información que se nos solicite por e-mail.
          </p>
          <p>
            De conformidad con lo establecido en los párrafos anteriores BUZZ ALARMAS se compromete a no ceder, comunicar, ni compartir los datos con terceros sin su aprobación expresa. Asimismo, BUZZ ALARMAS cancelará o rectificará los datos cuando resulten inexactos, incompletos o hayan dejado de ser necesarios o pertinentes para su finalidad, de conformidad con lo previsto en el Reglamento UE 2016/679 Europeo de Protección de Datos RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales LOPDGDD.
          </p>
        </Section>

        <Section title="4. Procedimiento en caso de realización de actividades de carácter ilícito">
          <p>
            En el caso de que cualquier usuario o un tercero considere que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas Web incluidas o accesibles a través del sitio Web, deberá enviar una notificación a BUZZ ALARMAS identificándose debidamente, especificando las supuestas infracciones y declarando expresamente y bajo su responsabilidad que la información proporcionada en la notificación es exacta.
          </p>
        </Section>

        <Section title="5. Datos de Contacto">
          <p>Todas las notificaciones y comunicaciones entre los usuarios y BUZZ ALARMAS se considerarán eficaces, a todos los efectos, cuando se realicen a través de correo postal o correo electrónico o comunicación telefónica.</p>
          <div className="bg-dark-2 border border-white/5 rounded-xl p-5 space-y-2 mt-4">
            <p><strong className="text-white/80">Dirección:</strong> C/ Montaña Clara 5, Local 8, 38679 Fañabé, Adeje, Tenerife.</p>
            <p><strong className="text-white/80">Teléfono:</strong> <a href="tel:+34922099200" className="text-orange hover:underline">922 099 200</a></p>
            <p><strong className="text-white/80">Correo electrónico de contacto:</strong> <a href="mailto:dpo@buzzalarmas.com" className="text-orange hover:underline">dpo@buzzalarmas.com</a></p>
          </div>
          <p className="mt-3">
            El usuario podrá contactar con el Departamento de Protección de Datos para resolver sus dudas relacionadas con el tratamiento de sus datos personales en la misma dirección de correo postal facilitada.
          </p>
        </Section>

        <Section title="6. Modificación y actualización de la política">
          <p>
            La presente política podrá ser modificada en cualquier momento, siendo debidamente publicada en este mismo sitio, por causa de cambio de requisitos legales, cambios jurisprudenciales y, en general, por cambios en la actuación y estrategia de BUZZ ALARMAS. La publicación y acceso por parte de los usuarios, será realizada a través de este mismo sitio, entendiéndose que las relaciones establecidas con los mismos, con anterioridad al cambio, se regirán por las normas previstas en el momento en que se accedió al sitio Web para su establecimiento.
          </p>
        </Section>

        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-sm">
          <Link href="/terms-and-conditions" className="text-orange hover:underline">
            Condiciones Generales del Servicio →
          </Link>
          <Link href="/" className="text-white/40 hover:text-white transition-colors">
            ← Volver a buzzalarmas.com
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-white/25 text-xs">
        © {new Date().getFullYear()} Buzz Alarmas. Todos los derechos reservados. · BUZZ ALARMAS, S.L. · CIF: B01623032 · Homologada R.N.S.P. 4557
      </footer>
    </div>
  );
}
