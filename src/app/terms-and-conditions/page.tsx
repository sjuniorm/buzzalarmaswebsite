import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Buzz Alarmas",
  description: "Condiciones generales del servicio de Buzz Alarmas — instalación, mantenimiento y conexión a central receptora de alarmas.",
};

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">
        <span className="text-orange mr-2">{number}.</span>{title}
      </h2>
      <div className="space-y-4 text-white/60 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
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
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-3">Condiciones Generales del Servicio</h1>
          <div className="w-16 h-1 bg-orange rounded-full mb-4" />
          <p className="text-white/40 text-sm">Buzz Alarmas · R.N.S.P. 4557 · www.buzzalarmas.com</p>
        </div>

        <Section number="1" title="Objeto del Contrato">
          <p>
            La realización, por BUZZ ALARMAS, de los servicios de Sistemas de Seguridad todo ello con el alcance previsto en los términos del presente contrato, así como la instalación y venta de los equipos de seguridad y otros elementos contratados por el CLIENTE e instalados por BUZZ ALARMAS.
          </p>
          <p>
            A efectos del artículo 5.1 de la Ley 5/2014, de 4 de abril, de Seguridad Privada, los servicios que se contratan son los recogidos en la letra f) (Instalación y mantenimiento de aparatos, equipos, dispositivos y sistemas de seguridad conectados a centrales receptoras de alarmas o a centros de control o de videovigilancia).
          </p>
          <p>
            El presente es un contrato de arrendamiento de servicios de instalación y mantenimiento de sistema de seguridad y su conexión a Central Receptora de Alarmas (en adelante, CRA), que genera obligaciones de medios o actividad, y no de resultado. Consecuentemente, BUZZ ALARMAS en ningún caso garantiza la no comisión de robos, hurtos u otros ilícitos, incendios, inundaciones y otros siniestros que causen daños personales o materiales en las instalaciones del CLIENTE y/o en sus enseres o mobiliario, siendo los componentes de seguridad instalados elementos puramente preventivos o disuasorios.
          </p>
          <div className="bg-dark-2 border border-white/5 rounded-xl p-5">
            <p className="font-semibold text-white/80 mb-1">Entrada en Vigor del Contrato</p>
            <p>El contrato entrará en vigor a los tres días de la firma del mismo conforme se estipula en el artículo 17 de la orden INT 314/2011 salvo en los casos de urgencias recogidos en el artículo 20 de la misma orden.</p>
          </div>
        </Section>

        <Section number="2" title="Duración del Contrato">
          <p>El contrato tendrá la duración en función del tipo de opción contratada:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Opción A, de pago único de la cuota anual más la cuota de conexión durante dos (2) años.</li>
            <li>Opción B, de pago mensual tendrá una duración de tres (3) años.</li>
          </ul>
          <p>Tras los periodos iniciales de permanencia, el contrato se prorrogará por sucesivos periodos de doce (12) meses.</p>
        </Section>

        <Section number="3" title="Precio">
          <p>
            El precio de los servicios objeto de este contrato será el determinado en las Condiciones Particulares para cada servicio contratado según su modalidad. A este precio se añadirán los impuestos que legalmente corresponda repercutir a BUZZ ALARMAS, al tipo en vigor en cada momento.
          </p>
          <p>
            Durante la vigencia del contrato, el precio inicial pactado por los servicios objeto del mismo podrá estar sujeto a revisión el 1 de enero de cada año, de acuerdo con la variación experimentada por la media aritmética de los índices publicados de IPC interanual.
          </p>
          <p>
            La cuota mensual pactada en las Condiciones Particulares de este contrato será pagadera por anticipado mediante domiciliación bancaria, dándose por notificado el CLIENTE en este acto de los adeudos directos que se realizarán por BUZZ ALARMAS.
          </p>
        </Section>

        <Section number="4" title="Garantía">
          <p>
            El período de garantía del sistema de seguridad adquirido a BUZZ ALARMAS y de su instalación es de dos años contados desde la fecha de instalación del sistema de seguridad. Esta garantía comprende:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Todo defecto de fabricación del sistema de seguridad que afecte a su correcto funcionamiento</li>
            <li>Todo defecto en la ejecución de la instalación que afecte al correcto funcionamiento del sistema</li>
            <li>Todo defecto del software que impida el correcto funcionamiento del mismo o cuando no se ajustara a las características descritas en la oferta</li>
          </ul>
          <div className="bg-dark-2 border border-white/5 rounded-xl p-5 mt-2">
            <p className="font-semibold text-white/80 mb-2">La presente garantía no cubre:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Los defectos ocasionados por el desgaste y degradación natural de los componentes y del sistema de seguridad</li>
              <li>Incidencias derivadas de un uso o manipulación inadecuados o negligentes de la instalación, del software o de los demás componentes por parte del CLIENTE o de terceros no autorizados por BUZZ ALARMAS</li>
              <li>Incidencias cuyo origen se deba a causas externas o ajenas a BUZZ ALARMAS, tales como sobretensiones en la red, rayos y demás fenómenos atmosféricos, robo, actos vandálicos, incendio o cualquier otra causa ajena al normal uso del sistema de seguridad</li>
              <li>Los elementos de seguridad adquiridos por el CLIENTE con anterioridad a la firma del presente contrato y conectados al sistema de seguridad instalado por BUZZ ALARMAS</li>
            </ul>
          </div>
          <p>
            El CLIENTE se obliga a comunicar a BUZZ ALARMAS de manera fehaciente, tan pronto como haya tenido conocimiento de ello, la aparición de cualquier fallo o defecto cubierto por la presente Garantía, con una descripción suficiente del fallo o defecto detectado.
          </p>
        </Section>

        <Section number="5" title="Obligaciones del Cliente">
          <p>El CLIENTE deberá, en todo caso, conectar el sistema de alarma cada vez que pretenda evitar el acceso de personas no autorizadas al lugar y, especialmente, cada vez que el lugar quede abandonado y sin vigilancia.</p>
          <p>El CLIENTE no manipulará e impedirá que se manipulen los sistemas de seguridad por personas distintas a las de BUZZ ALARMAS.</p>
          <p>El CLIENTE comunicará a BUZZ ALARMAS con la mayor urgencia posible cualquier avería o incidencia que detecte en el sistema de seguridad.</p>
          <p>BUZZ ALARMAS no será responsable de los daños ocasionados en el sistema de seguridad del CLIENTE por no haber facilitado la información señalada anteriormente.</p>
          <p>Es responsabilidad del CLIENTE observar en todo momento que el sistema de seguridad está operativo y que no esté expuesto al abuso. El CLIENTE es responsable del daño producido al sistema debido al uso inadecuado del mismo.</p>
          <p>Reintegrará a BUZZ ALARMAS a la finalización del contrato, cualquiera que fuere la causa, la totalidad de los carteles, rótulos y/o indicativos de seguridad colocados en el lugar objeto de protección que hagan referencia o mención a BUZZ ALARMAS.</p>
          <p>Pagará el precio y cantidades convenidas en las Condiciones Particulares del presente contrato. La falta de pago por el CLIENTE de cualquiera de las cantidades del precio pactado facultará a BUZZ ALARMAS para la inmediata suspensión de los servicios objeto del presente contrato, sin perjuicio del ejercicio de las acciones judiciales correspondientes.</p>
        </Section>

        <Section number="6" title="Protección de Datos y Confidencialidad">
          <p>
            Los datos personales proporcionados por el CLIENTE, así como cualquier otro dato que pudiera facilitarse como consecuencia de la prestación del Servicio, serán incluidos en un fichero responsabilidad de BUZZ ALARMAS y serán tratados con la finalidad de gestionar el mantenimiento, desarrollo y control de la relación contractual.
          </p>
          <p>
            Tratar sus datos personales recabados y aquellos derivados del uso y la prestación del Servicio de manera individualizada con base en nuestro interés legítimo o de manera anonimizada y/o agregada con la finalidad de comprobar que el servicio se está prestando correctamente.
          </p>
          <p>
            El CLIENTE podrá ejercitar, en cualquier momento, los derechos de acceso, rectificación, cancelación/supresión, oposición, limitación y portabilidad reconocidos en la normativa vigente en materia de protección de datos de carácter personal dirigiéndose a BUZZ ALARMAS, por cualquier medio de los indicados en la{" "}
            <Link href="/privacy-policy" className="text-orange hover:underline">
              política de privacidad
            </Link>{" "}
            o a la Agencia Española de Protección de Datos (www.agpd.es).
          </p>
          <p>
            BUZZ ALARMAS mantendrá la confidencialidad de los datos personales del CLIENTE que obtenga con motivo de la prestación del Servicio y se compromete a implementar las medidas tecnológicas adecuadas para garantizar la seguridad de los datos personales de sus clientes.
          </p>
        </Section>

        <Section number="7" title="Derecho de Desistimiento">
          <p>
            El CLIENTE tiene derecho a desistir del presente contrato en un plazo de catorce (14) días naturales desde la celebración del mismo sin necesidad de justificación.
          </p>
          <p>
            Para ejercer el derecho de desistimiento, el CLIENTE deberá notificar a BUZZ ALARMAS su decisión de desistir del contrato a través de una declaración inequívoca a través del correo electrónico a la dirección:{" "}
            <a href="mailto:hola@buzzalarmas.com" className="text-orange hover:underline">hola@buzzalarmas.com</a>.
          </p>
          <p>
            Para cumplir el plazo disponible de ejercicio del derecho de desistimiento, será suficiente que la comunicación relativa a dicho ejercicio de su derecho sea enviada antes de que venza el plazo correspondiente.
          </p>
          <p>
            En caso de desistimiento por parte del CLIENTE, BUZZ ALARMAS devolverá el importe abonado hasta la fecha por el CLIENTE. BUZZ ALARMAS podrá retener el reembolso hasta que el CLIENTE efectúe la devolución del total de los productos que integran el servicio de alarma instalado o, en su caso, permita el acceso al lugar objeto de protección del CLIENTE del personal autorizado de BUZZ ALARMAS para el desmontaje y retirada del mismo.
          </p>
        </Section>

        <Section number="8" title="Resolución del Contrato">
          <p>
            Cualquiera de las partes podrá resolver el presente contrato, mediante notificación fehaciente, por las causas legalmente establecidas. Cuando el CLIENTE quiera solicitar la resolución del contrato de forma voluntaria, deberá contactar con BUZZ ALARMAS en el teléfono de Atención al Cliente.
          </p>
          <p>
            Sin perjuicio de cualesquiera otros incumplimientos del CLIENTE que pudiesen motivar la resolución del contrato, los siguientes supuestos serán considerados por sí mismos causa suficiente para instar la resolución del contrato por parte de BUZZ ALARMAS:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>El CLIENTE incumpliese sus compromisos de pago, en los términos y plazos acordados en el presente contrato.</li>
            <li>Si el CLIENTE realiza alteraciones en el sistema de seguridad y/o en el lugar objeto de protección, de tal manera que dichos cambios afecten a la eficacia o fiabilidad de los sistemas de seguridad instalados.</li>
            <li>Si el CLIENTE, haciendo uso del sistema de seguridad, ocasiona daños y/o perjuicios a terceros.</li>
          </ul>
          <p>
            En ningún caso la resolución del contrato eximirá al CLIENTE de sus obligaciones de pago frente a BUZZ ALARMAS por cualquier concepto, así como de la Condición de Permanencia.
          </p>
        </Section>

        <Section number="9" title="Legislación Aplicable">
          <p>
            Para cualquier controversia que pudiera suscitarse con motivo del presente contrato ambas partes acuerdan someterse al Derecho común español y a la normativa de Seguridad Privada vigente en España.
          </p>
          <p>
            En caso de surgir cualquier tipo de conflicto o controversia, las Partes se someterán a lo dispuesto en la legislación española aplicable en cada momento.
          </p>
        </Section>

        {/* Bottom nav */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-sm">
          <Link href="/privacy-policy" className="text-orange hover:underline">
            ← Privacy Policy
          </Link>
          <Link href="/" className="text-white/40 hover:text-white transition-colors">
            Volver a buzzalarmas.com →
          </Link>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-white/5 py-6 text-center text-white/25 text-xs">
        © {new Date().getFullYear()} Buzz Alarmas. Todos los derechos reservados. · Homologada por R.N.S.P. 4557 · Con aviso a policía
      </footer>
    </div>
  );
}
