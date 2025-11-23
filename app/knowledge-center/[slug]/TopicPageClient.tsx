"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  FileText,
  DollarSign,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Clock,
  ChevronRight,
  ArrowLeft,
  Menu,
  X,
  Globe,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import knowledgeData from "../../data/knowledge-center.json";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  AlertCircle,
  FileText,
  DollarSign,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Clock,
};

const topicContent: { [key: string]: any } = {
  "what-to-do-after-car-accident": {
    en: {
      title: "What to Do After a Car Accident",
      sections: [
        {
          heading: "Stay Calm and Assess the Situation",
          content:
            "The moments immediately following a car accident can be overwhelming. Your first priority should be to stay calm and assess whether anyone is injured. If there are serious injuries, call 911 immediately. Even if the accident seems minor, it's important to remain at the scene until you've exchanged information with the other driver.",
        },
        {
          heading: "Ensure Safety",
          content:
            "If your vehicle is still operational and you're able to move it, pull over to a safe location away from traffic. Turn on your hazard lights to alert other drivers. If your vehicle cannot be moved, stay inside with your seatbelt fastened until help arrives, unless it's unsafe to do so.",
        },
        {
          heading: "Call the Police",
          content:
            "In South Carolina, you must report any accident that results in injury, death, or property damage exceeding $1,000. Even for minor accidents, having a police report can be invaluable when filing an insurance claim. The officer will document the scene, gather witness statements, and create an official record of the incident.",
        },
        {
          heading: "Document Everything",
          content:
            "Take photos and videos of the accident scene from multiple angles. Capture images of: vehicle damage, license plates, the surrounding area, traffic signs or signals, weather conditions, and any visible injuries. Also write down the time, date, location, and a detailed description of what happened while it's fresh in your memory.",
        },
        {
          heading: "Exchange Information",
          content:
            "Collect the following information from all parties involved: full name and contact information, driver's license number, insurance company and policy number, vehicle make, model, year, and license plate number. Also get contact information from any witnesses who saw the accident occur.",
        },
        {
          heading: "Contact Your Insurance Company",
          content:
            "Notify your insurance company as soon as possible, ideally within 24 hours of the accident. Provide them with all the information you've gathered. Your insurance agent will guide you through the claims process and explain what coverage applies to your situation. Be honest and thorough when describing the accident.",
        },
        {
          heading: "Seek Medical Attention",
          content:
            "Even if you don't feel injured immediately, some injuries may not become apparent until hours or days later. It's important to see a healthcare provider for a thorough examination. Keep all medical records and receipts, as these will be important for your insurance claim and any potential legal proceedings.",
        },
        {
          heading: "Keep Detailed Records",
          content:
            "Maintain a file with all accident-related documents: police report, medical records, repair estimates, correspondence with insurance companies, photos and videos, witness statements, and receipts for any expenses related to the accident. This documentation will be crucial if you need to dispute a claim decision.",
        },
      ],
    },
    es: {
      title: "Qué Hacer Después de un Accidente de Auto",
      sections: [
        {
          heading: "Mantén la Calma y Evalúa la Situación",
          content:
            "Los momentos inmediatamente posteriores a un accidente de auto pueden ser abrumadores. Tu primera prioridad debe ser mantener la calma y evaluar si alguien está lesionado. Si hay lesiones graves, llama al 911 inmediatamente. Incluso si el accidente parece menor, es importante permanecer en la escena hasta que hayas intercambiado información con el otro conductor.",
        },
        {
          heading: "Asegura la Seguridad",
          content:
            "Si tu vehículo aún es operativo y puedes moverlo, estaciónalo en un lugar seguro alejado del tráfico. Enciende las luces de emergencia para alertar a otros conductores. Si tu vehículo no puede moverse, permanece dentro con el cinturón de seguridad abrochado hasta que llegue la ayuda, a menos que sea inseguro hacerlo.",
        },
        {
          heading: "Llama a la Policía",
          content:
            "En Carolina del Sur, debes reportar cualquier accidente que resulte en lesiones, muerte o daños a la propiedad que excedan $1,000. Incluso para accidentes menores, tener un reporte policial puede ser invaluable al presentar un reclamo de seguro. El oficial documentará la escena, recopilará declaraciones de testigos y creará un registro oficial del incidente.",
        },
        {
          heading: "Documenta Todo",
          content:
            "Toma fotos y videos de la escena del accidente desde múltiples ángulos. Captura imágenes de: daños al vehículo, placas de matrícula, el área circundante, señales de tráfico o semáforos, condiciones climáticas, y cualquier lesión visible. También anota la hora, fecha, ubicación y una descripción detallada de lo que sucedió mientras está fresco en tu memoria.",
        },
        {
          heading: "Intercambia Información",
          content:
            "Recopila la siguiente información de todas las partes involucradas: nombre completo e información de contacto, número de licencia de conducir, compañía de seguros y número de póliza, marca, modelo, año del vehículo y número de placa. También obtén información de contacto de cualquier testigo que haya visto el accidente.",
        },
        {
          heading: "Contacta a Tu Compañía de Seguros",
          content:
            "Notifica a tu compañía de seguros lo antes posible, idealmente dentro de las 24 horas del accidente. Proporciónales toda la información que hayas recopilado. Tu agente de seguros te guiará a través del proceso de reclamos y explicará qué cobertura se aplica a tu situación. Sé honesto y exhaustivo al describir el accidente.",
        },
        {
          heading: "Busca Atención Médica",
          content:
            "Incluso si no te sientes lesionado inmediatamente, algunas lesiones pueden no ser aparentes hasta horas o días después. Es importante ver a un proveedor de atención médica para un examen exhaustivo. Guarda todos los registros médicos y recibos, ya que estos serán importantes para tu reclamo de seguro y cualquier procedimiento legal potencial.",
        },
        {
          heading: "Mantén Registros Detallados",
          content:
            "Mantén un archivo con todos los documentos relacionados con el accidente: reporte policial, registros médicos, estimaciones de reparación, correspondencia con compañías de seguros, fotos y videos, declaraciones de testigos, y recibos de cualquier gasto relacionado con el accidente. Esta documentación será crucial si necesitas disputar una decisión de reclamo.",
        },
      ],
    },
  },
  "understanding-your-policy": {
    en: {
      title: "Understanding Your Insurance Policy",
      sections: [
        {
          heading: "Policy Declarations Page",
          content:
            "The declarations page is the summary of your policy. It contains your name, policy number, coverage periods, vehicles covered, and premium amounts. This is the first page you should review to understand what you're paying for and what's covered. Keep this page easily accessible as you'll reference it frequently.",
        },
        {
          heading: "Coverage Types Explained",
          content:
            "Liability coverage protects you if you're at fault in an accident. It covers bodily injury and property damage to others. Collision coverage pays for damage to your vehicle from an accident, regardless of fault. Comprehensive coverage protects against non-collision incidents like theft, vandalism, or weather damage. Uninsured/Underinsured motorist coverage protects you if hit by someone without adequate insurance.",
        },
        {
          heading: "Deductibles and Limits",
          content:
            "Your deductible is the amount you pay out-of-pocket before insurance kicks in. Higher deductibles typically mean lower premiums, but you'll pay more if you file a claim. Policy limits are the maximum amounts your insurance will pay. It's crucial to ensure your limits are adequate to protect your assets. In South Carolina, minimum liability limits are required by law, but they may not be sufficient for serious accidents.",
        },
        {
          heading: "Exclusions and Limitations",
          content:
            "Every policy has exclusions - situations not covered. Common exclusions include intentional damage, racing, using your vehicle for commercial purposes without proper coverage, and normal wear and tear. Read this section carefully to understand what's not covered. If you need coverage for excluded items, you may need additional policies or endorsements.",
        },
        {
          heading: "Understanding Premiums",
          content:
            "Your premium is calculated based on various factors: your driving record, age, location, vehicle type, coverage amounts, and deductibles. Premiums can be paid monthly, quarterly, or annually. Some insurers offer discounts for safe driving, multiple policies, or safety features in your vehicle. Understanding how your premium is calculated can help you find ways to save.",
        },
        {
          heading: "Policy Renewal and Cancellation",
          content:
            "Policies typically renew automatically unless you or your insurer cancels. You can cancel at any time, but you may be subject to fees. Insurers can cancel for non-payment, fraud, or significant changes in risk. Review renewal notices carefully as terms and premiums may change. Always compare your renewal offer with other options to ensure you're getting the best rate.",
        },
      ],
    },
    es: {
      title: "Entendiendo Tu Póliza de Seguro",
      sections: [
        {
          heading: "Página de Declaraciones de la Póliza",
          content:
            "La página de declaraciones es el resumen de tu póliza. Contiene tu nombre, número de póliza, períodos de cobertura, vehículos cubiertos y montos de prima. Esta es la primera página que debes revisar para entender por qué estás pagando y qué está cubierto. Mantén esta página fácilmente accesible ya que la consultarás frecuentemente.",
        },
        {
          heading: "Tipos de Cobertura Explicados",
          content:
            "La cobertura de responsabilidad te protege si tienes la culpa en un accidente. Cubre lesiones corporales y daños a la propiedad de otros. La cobertura de colisión paga por daños a tu vehículo por un accidente, independientemente de la culpa. La cobertura integral protege contra incidentes que no son colisiones como robo, vandalismo o daños por clima. La cobertura de conductor sin seguro/subasegurado te protege si te golpea alguien sin seguro adecuado.",
        },
        {
          heading: "Deducibles y Límites",
          content:
            "Tu deducible es la cantidad que pagas de tu bolsillo antes de que el seguro entre en acción. Deducibles más altos típicamente significan primas más bajas, pero pagarás más si presentas un reclamo. Los límites de la póliza son las cantidades máximas que tu seguro pagará. Es crucial asegurar que tus límites sean adecuados para proteger tus activos. En Carolina del Sur, los límites mínimos de responsabilidad son requeridos por ley, pero pueden no ser suficientes para accidentes graves.",
        },
        {
          heading: "Exclusiones y Limitaciones",
          content:
            "Cada póliza tiene exclusiones - situaciones no cubiertas. Las exclusiones comunes incluyen daños intencionales, carreras, usar tu vehículo para fines comerciales sin cobertura adecuada, y desgaste normal. Lee esta sección cuidadosamente para entender qué no está cubierto. Si necesitas cobertura para artículos excluidos, puedes necesitar pólizas adicionales o endosos.",
        },
        {
          heading: "Entendiendo las Primas",
          content:
            "Tu prima se calcula basándose en varios factores: tu historial de conducción, edad, ubicación, tipo de vehículo, montos de cobertura y deducibles. Las primas se pueden pagar mensualmente, trimestralmente o anualmente. Algunos aseguradores ofrecen descuentos por conducción segura, múltiples pólizas o características de seguridad en tu vehículo. Entender cómo se calcula tu prima puede ayudarte a encontrar formas de ahorrar.",
        },
        {
          heading: "Renovación y Cancelación de Póliza",
          content:
            "Las pólizas típicamente se renuevan automáticamente a menos que tú o tu asegurador las cancelen. Puedes cancelar en cualquier momento, pero puedes estar sujeto a tarifas. Los aseguradores pueden cancelar por falta de pago, fraude o cambios significativos en el riesgo. Revisa los avisos de renovación cuidadosamente ya que los términos y primas pueden cambiar. Siempre compara tu oferta de renovación con otras opciones para asegurar que estás obteniendo la mejor tarifa.",
        },
      ],
    },
  },
  "lower-your-premiums": {
    en: {
      title: "How to Lower Your Insurance Premiums",
      sections: [
        {
          heading: "Maintain a Clean Driving Record",
          content:
            "Your driving history is one of the most significant factors affecting your insurance rates. Traffic violations, accidents, and DUI convictions can dramatically increase your premiums. Focus on safe driving practices: obey speed limits, avoid distractions, never drive under the influence, and follow all traffic laws. Many insurers offer safe driver discounts for maintaining a clean record over time.",
        },
        {
          heading: "Increase Your Deductibles",
          content:
            "Choosing a higher deductible can significantly lower your monthly premium. If you have a $500 deductible and increase it to $1,000, you could save 15-30% on your premium. However, make sure you can afford to pay the higher deductible if you need to file a claim. This strategy works best if you're a safe driver with a good emergency fund.",
        },
        {
          heading: "Bundle Your Policies",
          content:
            "Most insurance companies offer multi-policy discounts when you bundle auto, home, and other insurance policies together. This can save you 10-25% on your total insurance costs. Additionally, maintaining all policies with the same company simplifies management and often provides better customer service.",
        },
        {
          heading: "Take Advantage of Discounts",
          content:
            "Ask your insurer about available discounts: good student discounts for young drivers with good grades, defensive driving course completion, low mileage discounts if you drive less than average, anti-theft device installation, and loyalty discounts for long-term customers. Many people don't realize they qualify for multiple discounts simultaneously.",
        },
        {
          heading: "Choose Your Vehicle Wisely",
          content:
            "The type of vehicle you drive significantly impacts your insurance costs. Sports cars, luxury vehicles, and vehicles with high theft rates cost more to insure. Before purchasing a vehicle, research its insurance costs. Safer vehicles with good crash test ratings and anti-theft features often qualify for lower premiums.",
        },
        {
          heading: "Review and Adjust Coverage",
          content:
            "If you have an older vehicle, consider dropping collision and comprehensive coverage if the vehicle's value is low. The cost of these coverages may exceed the vehicle's worth. However, always maintain adequate liability coverage as it's required by law and protects your assets. Regularly review your coverage needs as your situation changes.",
        },
        {
          heading: "Improve Your Credit Score",
          content:
            "In most states, including South Carolina, insurance companies use credit-based insurance scores to determine rates. Improving your credit score can lead to lower premiums. Pay bills on time, reduce debt, and monitor your credit report regularly. Even small improvements in your credit score can result in meaningful premium reductions.",
        },
        {
          heading: "Shop Around Regularly",
          content:
            "Insurance rates vary significantly between companies. Get quotes from multiple insurers at least once a year, especially when your policy renews. Don't automatically renew without comparing. Online comparison tools make it easy to compare rates. However, remember that the cheapest option isn't always the best - consider coverage, customer service, and claims handling reputation.",
        },
      ],
    },
    es: {
      title: "Cómo Reducir Tus Primas de Seguro",
      sections: [
        {
          heading: "Mantén un Historial de Conducción Limpio",
          content:
            "Tu historial de conducción es uno de los factores más significativos que afectan tus tarifas de seguro. Las violaciones de tráfico, accidentes y condenas por DUI pueden aumentar dramáticamente tus primas. Enfócate en prácticas de conducción segura: obedece los límites de velocidad, evita distracciones, nunca conduzcas bajo la influencia y sigue todas las leyes de tráfico. Muchos aseguradores ofrecen descuentos de conductor seguro por mantener un registro limpio con el tiempo.",
        },
        {
          heading: "Aumenta Tus Deducibles",
          content:
            "Elegir un deducible más alto puede reducir significativamente tu prima mensual. Si tienes un deducible de $500 y lo aumentas a $1,000, podrías ahorrar 15-30% en tu prima. Sin embargo, asegúrate de poder pagar el deducible más alto si necesitas presentar un reclamo. Esta estrategia funciona mejor si eres un conductor seguro con un buen fondo de emergencia.",
        },
        {
          heading: "Agrupa Tus Pólizas",
          content:
            "La mayoría de las compañías de seguros ofrecen descuentos de múltiples pólizas cuando agrupas auto, hogar y otras pólizas de seguro juntas. Esto puede ahorrarte 10-25% en tus costos totales de seguro. Además, mantener todas las pólizas con la misma compañía simplifica la gestión y a menudo proporciona un mejor servicio al cliente.",
        },
        {
          heading: "Aprovecha los Descuentos",
          content:
            "Pregunta a tu asegurador sobre descuentos disponibles: descuentos de buen estudiante para conductores jóvenes con buenas calificaciones, finalización de curso de conducción defensiva, descuentos de bajo kilometraje si conduces menos que el promedio, instalación de dispositivos anti-robo, y descuentos de lealtad para clientes a largo plazo. Muchas personas no se dan cuenta de que califican para múltiples descuentos simultáneamente.",
        },
        {
          heading: "Elige Tu Vehículo Sabiamente",
          content:
            "El tipo de vehículo que conduces impacta significativamente tus costos de seguro. Los autos deportivos, vehículos de lujo y vehículos con altas tasas de robo cuestan más asegurar. Antes de comprar un vehículo, investiga sus costos de seguro. Los vehículos más seguros con buenas calificaciones de pruebas de choque y características anti-robo a menudo califican para primas más bajas.",
        },
        {
          heading: "Revisa y Ajusta la Cobertura",
          content:
            "Si tienes un vehículo más antiguo, considera eliminar la cobertura de colisión e integral si el valor del vehículo es bajo. El costo de estas coberturas puede exceder el valor del vehículo. Sin embargo, siempre mantén una cobertura de responsabilidad adecuada ya que es requerida por ley y protege tus activos. Revisa regularmente tus necesidades de cobertura a medida que tu situación cambia.",
        },
        {
          heading: "Mejora Tu Puntuación de Crédito",
          content:
            "En la mayoría de los estados, incluyendo Carolina del Sur, las compañías de seguros usan puntuaciones de seguro basadas en crédito para determinar las tarifas. Mejorar tu puntuación de crédito puede llevar a primas más bajas. Paga las facturas a tiempo, reduce la deuda y monitorea tu informe de crédito regularmente. Incluso pequeñas mejoras en tu puntuación de crédito pueden resultar en reducciones significativas de primas.",
        },
        {
          heading: "Compara Regularmente",
          content:
            "Las tarifas de seguro varían significativamente entre compañías. Obtén cotizaciones de múltiples aseguradores al menos una vez al año, especialmente cuando tu póliza se renueva. No renueves automáticamente sin comparar. Las herramientas de comparación en línea facilitan comparar tarifas. Sin embargo, recuerda que la opción más barata no siempre es la mejor - considera la cobertura, el servicio al cliente y la reputación de manejo de reclamos.",
        },
      ],
    },
  },
  "types-of-coverage-explained": {
    en: {
      title: "Types of Coverage Explained",
      sections: [
        {
          heading: "Liability Coverage",
          content:
            "Liability insurance is required by law in South Carolina and most states. It covers bodily injury and property damage you cause to others in an accident. This includes medical expenses, lost wages, pain and suffering, and vehicle repairs for the other party. South Carolina requires minimum limits of 25/50/25, meaning $25,000 per person for bodily injury, $50,000 per accident for bodily injury, and $25,000 for property damage. However, these minimums may not be sufficient for serious accidents.",
        },
        {
          heading: "Collision Coverage",
          content:
            "Collision coverage pays for damage to your vehicle resulting from a collision with another vehicle or object, regardless of who's at fault. This coverage is optional but highly recommended, especially if you have a loan or lease on your vehicle. Your lender typically requires collision coverage. The coverage amount is based on your vehicle's actual cash value, minus your deductible.",
        },
        {
          heading: "Comprehensive Coverage",
          content:
            "Comprehensive coverage protects your vehicle from non-collision incidents such as theft, vandalism, fire, natural disasters, falling objects, and animal collisions. Like collision coverage, it's optional but often required by lenders. Comprehensive coverage is particularly valuable if you live in areas prone to severe weather, theft, or if you park your vehicle in areas with high crime rates.",
        },
        {
          heading: "Uninsured/Underinsured Motorist Coverage",
          content:
            "This coverage protects you if you're hit by a driver who has no insurance or insufficient insurance to cover your damages. In South Carolina, uninsured motorist coverage is required, but you can reject it in writing. However, this is generally not recommended as it provides important protection. Underinsured motorist coverage kicks in when the at-fault driver's limits are too low to cover all your expenses.",
        },
        {
          heading: "Medical Payments Coverage",
          content:
            "Medical payments coverage (MedPay) pays for medical expenses for you and your passengers regardless of who's at fault. It covers hospital visits, doctor bills, surgery, X-rays, and other medical costs. This coverage is optional in South Carolina but can be valuable, especially if you don't have health insurance or have high health insurance deductibles.",
        },
        {
          heading: "Personal Injury Protection (PIP)",
          content:
            "PIP is similar to MedPay but more comprehensive. It covers medical expenses, lost wages, and sometimes funeral expenses. PIP is required in some states but optional in South Carolina. It provides broader coverage than MedPay and can be particularly beneficial if you're unable to work due to accident-related injuries.",
        },
      ],
    },
    es: {
      title: "Tipos de Cobertura Explicados",
      sections: [
        {
          heading: "Cobertura de Responsabilidad",
          content:
            "El seguro de responsabilidad es requerido por ley en Carolina del Sur y la mayoría de los estados. Cubre lesiones corporales y daños a la propiedad que causas a otros en un accidente. Esto incluye gastos médicos, salarios perdidos, dolor y sufrimiento, y reparaciones de vehículos para la otra parte. Carolina del Sur requiere límites mínimos de 25/50/25, lo que significa $25,000 por persona por lesiones corporales, $50,000 por accidente por lesiones corporales, y $25,000 por daños a la propiedad. Sin embargo, estos mínimos pueden no ser suficientes para accidentes graves.",
        },
        {
          heading: "Cobertura de Colisión",
          content:
            "La cobertura de colisión paga por daños a tu vehículo resultantes de una colisión con otro vehículo u objeto, independientemente de quién tenga la culpa. Esta cobertura es opcional pero altamente recomendada, especialmente si tienes un préstamo o arrendamiento en tu vehículo. Tu prestamista típicamente requiere cobertura de colisión. El monto de cobertura se basa en el valor real en efectivo de tu vehículo, menos tu deducible.",
        },
        {
          heading: "Cobertura Integral",
          content:
            "La cobertura integral protege tu vehículo de incidentes que no son colisiones como robo, vandalismo, incendio, desastres naturales, objetos que caen y colisiones con animales. Como la cobertura de colisión, es opcional pero a menudo requerida por los prestamistas. La cobertura integral es particularmente valiosa si vives en áreas propensas a clima severo, robo, o si estacionas tu vehículo en áreas con altas tasas de criminalidad.",
        },
        {
          heading: "Cobertura de Conductor Sin Seguro/Subasegurado",
          content:
            "Esta cobertura te protege si te golpea un conductor que no tiene seguro o seguro insuficiente para cubrir tus daños. En Carolina del Sur, la cobertura de conductor sin seguro es requerida, pero puedes rechazarla por escrito. Sin embargo, esto generalmente no se recomienda ya que proporciona protección importante. La cobertura de conductor subasegurado entra en acción cuando los límites del conductor culpable son demasiado bajos para cubrir todos tus gastos.",
        },
        {
          heading: "Cobertura de Pagos Médicos",
          content:
            "La cobertura de pagos médicos (MedPay) paga por gastos médicos para ti y tus pasajeros independientemente de quién tenga la culpa. Cubre visitas al hospital, facturas del doctor, cirugía, rayos X y otros costos médicos. Esta cobertura es opcional en Carolina del Sur pero puede ser valiosa, especialmente si no tienes seguro de salud o tienes deducibles altos de seguro de salud.",
        },
        {
          heading: "Protección de Lesiones Personales (PIP)",
          content:
            "PIP es similar a MedPay pero más integral. Cubre gastos médicos, salarios perdidos y a veces gastos funerarios. PIP es requerido en algunos estados pero opcional en Carolina del Sur. Proporciona cobertura más amplia que MedPay y puede ser particularmente beneficioso si no puedes trabajar debido a lesiones relacionadas con el accidente.",
        },
      ],
    },
  },
  "choosing-right-deductible": {
    en: {
      title: "Choosing the Right Deductible",
      sections: [
        {
          heading: "Understanding Deductibles",
          content:
            "A deductible is the amount you pay out-of-pocket before your insurance coverage kicks in. For example, if you have a $500 deductible and file a claim for $2,000 in damages, you'll pay $500 and your insurance will cover the remaining $1,500. Deductibles apply to collision and comprehensive coverage, not liability coverage.",
        },
        {
          heading: "How Deductibles Affect Premiums",
          content:
            "Generally, the higher your deductible, the lower your premium. This is because you're taking on more financial responsibility. If you increase your deductible from $250 to $1,000, you could save 15-30% on your collision and comprehensive coverage premiums. However, you need to ensure you can afford the higher deductible if you need to file a claim.",
        },
        {
          heading: "Factors to Consider",
          content:
            "When choosing a deductible, consider your financial situation, driving history, vehicle value, and risk tolerance. If you have a healthy emergency fund and are a safe driver, a higher deductible might make sense. If you have an older vehicle with low value, you might want a higher deductible or consider dropping collision/comprehensive coverage entirely.",
        },
        {
          heading: "Emergency Fund Considerations",
          content:
            "Your deductible should be an amount you can comfortably pay from your emergency fund without causing financial hardship. Financial experts recommend having at least $1,000 in emergency savings, but ideally 3-6 months of expenses. If you can't afford your deductible, you may struggle to get your vehicle repaired after an accident.",
        },
        {
          heading: "Vehicle Age and Value",
          content:
            "For newer, more valuable vehicles, lower deductibles often make sense to protect your investment. For older vehicles with lower values, higher deductibles or dropping coverage entirely may be more cost-effective. If your vehicle's value is less than a few thousand dollars, paying for collision coverage might not be worth it.",
        },
        {
          heading: "Balancing Cost and Protection",
          content:
            "The goal is to find the right balance between affordable premiums and manageable deductibles. Consider how often you've filed claims in the past and your likelihood of needing to file a claim. If you're a safe driver with a good record, a higher deductible with lower premiums might be the best strategy.",
        },
      ],
    },
    es: {
      title: "Cómo Elegir el Deducible Correcto",
      sections: [
        {
          heading: "Entendiendo los Deducibles",
          content:
            "Un deducible es la cantidad que pagas de tu bolsillo antes de que tu cobertura de seguro entre en acción. Por ejemplo, si tienes un deducible de $500 y presentas un reclamo por $2,000 en daños, pagarás $500 y tu seguro cubrirá los $1,500 restantes. Los deducibles se aplican a la cobertura de colisión e integral, no a la cobertura de responsabilidad.",
        },
        {
          heading: "Cómo los Deducibles Afectan las Primas",
          content:
            "Generalmente, cuanto más alto sea tu deducible, más baja será tu prima. Esto es porque estás asumiendo más responsabilidad financiera. Si aumentas tu deducible de $250 a $1,000, podrías ahorrar 15-30% en tus primas de cobertura de colisión e integral. Sin embargo, necesitas asegurarte de poder pagar el deducible más alto si necesitas presentar un reclamo.",
        },
        {
          heading: "Factores a Considerar",
          content:
            "Al elegir un deducible, considera tu situación financiera, historial de conducción, valor del vehículo y tolerancia al riesgo. Si tienes un fondo de emergencia saludable y eres un conductor seguro, un deducible más alto podría tener sentido. Si tienes un vehículo más antiguo con bajo valor, podrías querer un deducible más alto o considerar eliminar la cobertura de colisión/integral por completo.",
        },
        {
          heading: "Consideraciones del Fondo de Emergencia",
          content:
            "Tu deducible debe ser una cantidad que puedas pagar cómodamente de tu fondo de emergencia sin causar dificultades financieras. Los expertos financieros recomiendan tener al menos $1,000 en ahorros de emergencia, pero idealmente 3-6 meses de gastos. Si no puedes pagar tu deducible, puedes tener dificultades para reparar tu vehículo después de un accidente.",
        },
        {
          heading: "Edad y Valor del Vehículo",
          content:
            "Para vehículos más nuevos y valiosos, los deducibles más bajos a menudo tienen sentido para proteger tu inversión. Para vehículos más antiguos con valores más bajos, deducibles más altos o eliminar la cobertura por completo puede ser más rentable. Si el valor de tu vehículo es menor a unos pocos miles de dólares, pagar por cobertura de colisión podría no valer la pena.",
        },
        {
          heading: "Equilibrando Costo y Protección",
          content:
            "El objetivo es encontrar el equilibrio correcto entre primas asequibles y deducibles manejables. Considera con qué frecuencia has presentado reclamos en el pasado y tu probabilidad de necesitar presentar un reclamo. Si eres un conductor seguro con un buen registro, un deducible más alto con primas más bajas podría ser la mejor estrategia.",
        },
      ],
    },
  },
  "filing-insurance-claim": {
    en: {
      title: "How to File an Insurance Claim",
      sections: [
        {
          heading: "Contact Your Insurance Company Immediately",
          content:
            "Notify your insurance company as soon as possible after an accident or incident. Most insurers have claims hotlines available. The sooner you report, the faster the claims process can begin. Have your policy number ready when you call. Your insurance agent will guide you through the process and explain what information and documentation you'll need.",
        },
        {
          heading: "Gather Required Documentation",
          content:
            "You'll need to provide: photos and videos of the damage, police report (if applicable), contact information of all parties involved, witness statements, medical records (if there are injuries), repair estimates from auto shops, and any other relevant documentation. The more thorough your documentation, the smoother your claim process will be.",
        },
        {
          heading: "Understand Your Coverage",
          content:
            "Review your policy to understand what's covered and what your deductibles are. Your insurance adjuster will explain which coverages apply to your claim. Be aware that you'll need to pay your deductible before your insurance covers the remaining costs. Some coverages may have specific limits or exclusions.",
        },
        {
          heading: "Work with an Adjuster",
          content:
            "An insurance adjuster will be assigned to evaluate your claim. They'll inspect the damage, review your documentation, and determine the claim value. Be cooperative and provide all requested information promptly. You can also hire a public adjuster if you disagree with the insurance company's assessment, though this comes with additional costs.",
        },
        {
          heading: "Get Repair Estimates",
          content:
            "Your insurance company may require you to get estimates from multiple repair shops, or they may have preferred shops. Compare estimates and ensure they're comprehensive. Some insurers have direct repair programs where they work directly with shops, which can streamline the process. Make sure any shop you choose is reputable and certified.",
        },
        {
          heading: "Review the Settlement Offer",
          content:
            "Once your claim is evaluated, you'll receive a settlement offer. Review it carefully to ensure it covers all damages and expenses. If you believe the offer is too low, you can negotiate or dispute it. Keep detailed records of all communications and be prepared to provide additional documentation if needed.",
        },
        {
          heading: "Follow Up Regularly",
          content:
            "Stay in regular contact with your claims adjuster and follow up on the status of your claim. Keep a log of all conversations, emails, and correspondence. If there are delays or issues, don't hesitate to escalate to a supervisor or file a complaint with your state's insurance department if necessary.",
        },
      ],
    },
    es: {
      title: "Cómo Presentar un Reclamo de Seguro",
      sections: [
        {
          heading: "Contacta a Tu Compañía de Seguros Inmediatamente",
          content:
            "Notifica a tu compañía de seguros lo antes posible después de un accidente o incidente. La mayoría de los aseguradores tienen líneas directas de reclamos disponibles. Cuanto antes reportes, más rápido puede comenzar el proceso de reclamos. Ten tu número de póliza listo cuando llames. Tu agente de seguros te guiará a través del proceso y explicará qué información y documentación necesitarás.",
        },
        {
          heading: "Recopila la Documentación Requerida",
          content:
            "Necesitarás proporcionar: fotos y videos de los daños, reporte policial (si aplica), información de contacto de todas las partes involucradas, declaraciones de testigos, registros médicos (si hay lesiones), estimaciones de reparación de talleres automotrices, y cualquier otra documentación relevante. Cuanto más exhaustiva sea tu documentación, más fluido será tu proceso de reclamo.",
        },
        {
          heading: "Entiende Tu Cobertura",
          content:
            "Revisa tu póliza para entender qué está cubierto y cuáles son tus deducibles. Tu ajustador de seguros explicará qué coberturas se aplican a tu reclamo. Ten en cuenta que necesitarás pagar tu deducible antes de que tu seguro cubra los costos restantes. Algunas coberturas pueden tener límites o exclusiones específicas.",
        },
        {
          heading: "Trabaja con un Ajustador",
          content:
            "Se te asignará un ajustador de seguros para evaluar tu reclamo. Inspeccionarán los daños, revisarán tu documentación y determinarán el valor del reclamo. Sé cooperativo y proporciona toda la información solicitada prontamente. También puedes contratar un ajustador público si no estás de acuerdo con la evaluación de la compañía de seguros, aunque esto conlleva costos adicionales.",
        },
        {
          heading: "Obtén Estimaciones de Reparación",
          content:
            "Tu compañía de seguros puede requerir que obtengas estimaciones de múltiples talleres de reparación, o pueden tener talleres preferidos. Compara estimaciones y asegúrate de que sean exhaustivas. Algunos aseguradores tienen programas de reparación directa donde trabajan directamente con talleres, lo que puede agilizar el proceso. Asegúrate de que cualquier taller que elijas sea reputado y certificado.",
        },
        {
          heading: "Revisa la Oferta de Liquidación",
          content:
            "Una vez que tu reclamo sea evaluado, recibirás una oferta de liquidación. Revísala cuidadosamente para asegurar que cubra todos los daños y gastos. Si crees que la oferta es demasiado baja, puedes negociar o disputarla. Mantén registros detallados de todas las comunicaciones y prepárate para proporcionar documentación adicional si es necesario.",
        },
        {
          heading: "Haz Seguimiento Regularmente",
          content:
            "Mantén contacto regular con tu ajustador de reclamos y haz seguimiento del estado de tu reclamo. Mantén un registro de todas las conversaciones, correos electrónicos y correspondencia. Si hay retrasos o problemas, no dudes en escalar a un supervisor o presentar una queja con el departamento de seguros de tu estado si es necesario.",
        },
      ],
    },
  },
  "factors-affecting-premiums": {
    en: {
      title: "Factors That Affect Your Premiums",
      sections: [
        {
          heading: "Driving Record",
          content:
            "Your driving history is one of the most significant factors. Accidents, traffic violations, and DUI convictions can dramatically increase premiums. Insurance companies view drivers with clean records as lower risk. Maintaining a clean driving record over time can lead to significant savings through safe driver discounts.",
        },
        {
          heading: "Age and Experience",
          content:
            "Younger drivers, especially those under 25, typically pay higher premiums due to lack of experience and higher accident rates. Drivers over 65 may also see increases. Middle-aged drivers with good records usually pay the lowest rates. Some insurers offer discounts for completing driver education courses.",
        },
        {
          heading: "Location",
          content:
            "Where you live significantly impacts your rates. Urban areas with higher traffic density, crime rates, and accident frequencies typically have higher premiums. Rural areas generally have lower rates. Your specific ZIP code matters, as insurers use local data to assess risk. Moving to a safer area can reduce your premiums.",
        },
        {
          heading: "Vehicle Type",
          content:
            "Sports cars, luxury vehicles, and vehicles with high theft rates cost more to insure. Safe, reliable vehicles with good crash test ratings often qualify for discounts. The cost to repair or replace your vehicle also affects premiums. Before buying a vehicle, research its insurance costs.",
        },
        {
          heading: "Coverage Amounts and Deductibles",
          content:
            "Higher coverage limits mean higher premiums, but they provide better protection. Higher deductibles lower premiums but increase out-of-pocket costs when filing claims. Finding the right balance is key. Consider your assets and risk tolerance when choosing coverage levels.",
        },
        {
          heading: "Credit Score",
          content:
            "In South Carolina and most states, insurers use credit-based insurance scores. Studies show a correlation between credit scores and claim likelihood. Improving your credit score can lead to lower premiums. Pay bills on time, reduce debt, and monitor your credit report regularly.",
        },
        {
          heading: "Annual Mileage",
          content:
            "The more you drive, the higher your risk of accidents. Low-mileage drivers often qualify for discounts. If you work from home or have a short commute, you may save money. Some insurers offer usage-based insurance programs that track your driving and adjust rates accordingly.",
        },
        {
          heading: "Claims History",
          content:
            "Frequent claims can increase your premiums, as insurers view you as higher risk. Some companies offer accident forgiveness programs for long-term customers with good records. Consider whether filing small claims is worth potential premium increases.",
        },
      ],
    },
    es: {
      title: "Factores que Afectan tus Primas",
      sections: [
        {
          heading: "Historial de Conducción",
          content:
            "Tu historial de conducción es uno de los factores más significativos. Los accidentes, violaciones de tráfico y condenas por DUI pueden aumentar dramáticamente las primas. Las compañías de seguros ven a los conductores con registros limpios como de menor riesgo. Mantener un historial de conducción limpio con el tiempo puede llevar a ahorros significativos a través de descuentos de conductor seguro.",
        },
        {
          heading: "Edad y Experiencia",
          content:
            "Los conductores más jóvenes, especialmente aquellos menores de 25, típicamente pagan primas más altas debido a la falta de experiencia y tasas de accidentes más altas. Los conductores mayores de 65 también pueden ver aumentos. Los conductores de mediana edad con buenos registros usualmente pagan las tarifas más bajas. Algunos aseguradores ofrecen descuentos por completar cursos de educación para conductores.",
        },
        {
          heading: "Ubicación",
          content:
            "Dónde vives impacta significativamente tus tarifas. Las áreas urbanas con mayor densidad de tráfico, tasas de criminalidad y frecuencias de accidentes típicamente tienen primas más altas. Las áreas rurales generalmente tienen tarifas más bajas. Tu código postal específico importa, ya que los aseguradores usan datos locales para evaluar el riesgo. Mudarse a un área más segura puede reducir tus primas.",
        },
        {
          heading: "Tipo de Vehículo",
          content:
            "Los autos deportivos, vehículos de lujo y vehículos con altas tasas de robo cuestan más asegurar. Los vehículos seguros y confiables con buenas calificaciones de pruebas de choque a menudo califican para descuentos. El costo de reparar o reemplazar tu vehículo también afecta las primas. Antes de comprar un vehículo, investiga sus costos de seguro.",
        },
        {
          heading: "Montos de Cobertura y Deducibles",
          content:
            "Límites de cobertura más altos significan primas más altas, pero proporcionan mejor protección. Deducibles más altos reducen las primas pero aumentan los costos de bolsillo al presentar reclamos. Encontrar el equilibrio correcto es clave. Considera tus activos y tolerancia al riesgo al elegir niveles de cobertura.",
        },
        {
          heading: "Puntuación de Crédito",
          content:
            "En Carolina del Sur y la mayoría de los estados, los aseguradores usan puntuaciones de seguro basadas en crédito. Los estudios muestran una correlación entre las puntuaciones de crédito y la probabilidad de reclamos. Mejorar tu puntuación de crédito puede llevar a primas más bajas. Paga las facturas a tiempo, reduce la deuda y monitorea tu informe de crédito regularmente.",
        },
        {
          heading: "Kilometraje Anual",
          content:
            "Cuanto más conduces, mayor es tu riesgo de accidentes. Los conductores de bajo kilometraje a menudo califican para descuentos. Si trabajas desde casa o tienes un viaje corto al trabajo, puedes ahorrar dinero. Algunos aseguradores ofrecen programas de seguro basados en uso que rastrean tu conducción y ajustan las tarifas en consecuencia.",
        },
        {
          heading: "Historial de Reclamos",
          content:
            "Los reclamos frecuentes pueden aumentar tus primas, ya que los aseguradores te ven como de mayor riesgo. Algunas compañías ofrecen programas de perdón de accidentes para clientes a largo plazo con buenos registros. Considera si presentar reclamos pequeños vale la pena los aumentos potenciales de primas.",
        },
      ],
    },
  },
  "teen-driver-insurance": {
    en: {
      title: "Insurance for Teen Drivers",
      sections: [
        {
          heading: "Why Teen Drivers Cost More",
          content:
            "Teen drivers are statistically the highest-risk group on the road. According to the CDC, drivers aged 16-19 are three times more likely to be involved in a fatal crash than drivers 20 and older. This increased risk translates to higher insurance premiums. Insurance companies base rates on actuarial data showing teens have more accidents, violations, and claims than experienced drivers.",
        },
        {
          heading: "Adding a Teen to Your Policy",
          content:
            "When your teen gets their license, you'll need to add them to your policy. This typically increases your premium significantly - often 50-100% or more. However, it's usually more affordable than getting them a separate policy. Your teen will be covered under your existing coverage limits, and you maintain control over the policy.",
        },
        {
          heading: "Good Student Discounts",
          content:
            "Most insurers offer good student discounts for teens who maintain a B average or better. This can save 10-25% on the teen's portion of the premium. To qualify, your teen typically needs to provide a transcript or report card showing their grades. This discount rewards responsible behavior and academic achievement.",
        },
        {
          heading: "Driver Education Discounts",
          content:
            "Completing a state-approved driver education course can result in significant discounts. Some insurers offer discounts for both classroom and behind-the-wheel training. These courses teach safe driving practices and can reduce premiums by 10-15%. Keep certificates of completion to provide to your insurer.",
        },
        {
          heading: "Safe Driving Monitoring",
          content:
            "Some insurers offer telematics programs that monitor driving behavior through a mobile app or device. Safe driving habits like obeying speed limits, avoiding hard braking, and limiting nighttime driving can earn discounts. These programs can be particularly beneficial for teens who demonstrate responsible driving.",
        },
        {
          heading: "Vehicle Choice Matters",
          content:
            "The vehicle your teen drives significantly impacts insurance costs. Avoid high-performance, sports, or luxury vehicles. Instead, choose safe, reliable vehicles with good crash test ratings and safety features. Older, less expensive vehicles often have lower insurance costs, though you'll want to ensure they have modern safety features.",
        },
        {
          heading: "Graduated Driver Licensing",
          content:
            "South Carolina's Graduated Driver Licensing (GDL) program has restrictions for teen drivers that can affect insurance. Understanding these restrictions and ensuring your teen follows them is important. Some insurers offer discounts for teens who complete GDL requirements without violations.",
        },
      ],
    },
    es: {
      title: "Seguro para Conductores Adolescentes",
      sections: [
        {
          heading: "Por Qué los Conductores Adolescentes Cuestan Más",
          content:
            "Los conductores adolescentes son estadísticamente el grupo de mayor riesgo en la carretera. Según el CDC, los conductores de 16-19 años tienen tres veces más probabilidades de estar involucrados en un choque fatal que los conductores de 20 años o más. Este mayor riesgo se traduce en primas de seguro más altas. Las compañías de seguros basan las tarifas en datos actuariales que muestran que los adolescentes tienen más accidentes, violaciones y reclamos que los conductores experimentados.",
        },
        {
          heading: "Agregar un Adolescente a Tu Póliza",
          content:
            "Cuando tu adolescente obtenga su licencia, necesitarás agregarlo a tu póliza. Esto típicamente aumenta tu prima significativamente - a menudo 50-100% o más. Sin embargo, generalmente es más asequible que obtenerle una póliza separada. Tu adolescente estará cubierto bajo tus límites de cobertura existentes, y mantienes el control sobre la póliza.",
        },
        {
          heading: "Descuentos de Buen Estudiante",
          content:
            "La mayoría de los aseguradores ofrecen descuentos de buen estudiante para adolescentes que mantienen un promedio de B o mejor. Esto puede ahorrar 10-25% en la porción del adolescente de la prima. Para calificar, tu adolescente típicamente necesita proporcionar una transcripción o boleta de calificaciones mostrando sus calificaciones. Este descuento recompensa el comportamiento responsable y el logro académico.",
        },
        {
          heading: "Descuentos de Educación para Conductores",
          content:
            "Completar un curso de educación para conductores aprobado por el estado puede resultar en descuentos significativos. Algunos aseguradores ofrecen descuentos tanto para entrenamiento en el aula como detrás del volante. Estos cursos enseñan prácticas de conducción segura y pueden reducir las primas en 10-15%. Guarda certificados de finalización para proporcionar a tu asegurador.",
        },
        {
          heading: "Monitoreo de Conducción Segura",
          content:
            "Algunos aseguradores ofrecen programas de telemática que monitorean el comportamiento de conducción a través de una aplicación móvil o dispositivo. Los hábitos de conducción segura como obedecer los límites de velocidad, evitar frenado brusco y limitar la conducción nocturna pueden ganar descuentos. Estos programas pueden ser particularmente beneficiosos para adolescentes que demuestran conducción responsable.",
        },
        {
          heading: "La Elección del Vehículo Importa",
          content:
            "El vehículo que conduce tu adolescente impacta significativamente los costos de seguro. Evita vehículos de alto rendimiento, deportivos o de lujo. En su lugar, elige vehículos seguros y confiables con buenas calificaciones de pruebas de choque y características de seguridad. Los vehículos más antiguos y menos costosos a menudo tienen costos de seguro más bajos, aunque querrás asegurar que tengan características de seguridad modernas.",
        },
        {
          heading: "Licencia de Conductor Graduada",
          content:
            "El programa de Licencia de Conductor Graduada (GDL) de Carolina del Sur tiene restricciones para conductores adolescentes que pueden afectar el seguro. Entender estas restricciones y asegurar que tu adolescente las siga es importante. Algunos aseguradores ofrecen descuentos para adolescentes que completan los requisitos de GDL sin violaciones.",
        },
      ],
    },
  },
  "insurance-fraud-prevention": {
    en: {
      title: "Insurance Fraud Prevention",
      sections: [
        {
          heading: "Understanding Insurance Fraud",
          content:
            "Insurance fraud occurs when someone intentionally deceives an insurance company for financial gain. This can include staging accidents, exaggerating claims, providing false information, or filing claims for incidents that never occurred. Fraud costs billions annually and increases premiums for all policyholders. Understanding common fraud schemes helps you protect yourself.",
        },
        {
          heading: "Common Fraud Schemes",
          content:
            "Staged accidents involve fraudsters causing intentional collisions to file false claims. Exaggerated claims involve inflating damage or injury costs. Phantom claims are filed for accidents that never happened. Identity theft involves using someone else's information to obtain insurance or file claims. Premium fraud involves providing false information to get lower rates.",
        },
        {
          heading: "Protect Yourself from Fraud",
          content:
            "Be cautious of unsolicited offers for medical treatment or legal services after an accident. Verify the credentials of any medical providers or attorneys. Be wary of repair shops that offer to waive deductibles or inflate damage estimates. Never sign blank insurance forms. Keep detailed records of all interactions and transactions related to insurance claims.",
        },
        {
          heading: "Red Flags to Watch For",
          content:
            "Warning signs include: pressure to use specific repair shops or medical providers, offers to split insurance settlements, requests to backdate policies, demands for immediate payment, and requests to provide personal information to unknown parties. If something seems too good to be true, it probably is.",
        },
        {
          heading: "Report Suspected Fraud",
          content:
            "If you suspect insurance fraud, report it to your insurance company and your state's insurance department. Most states have fraud bureaus that investigate suspicious activity. Reporting fraud helps protect the insurance system and can prevent future fraud. You may be eligible for rewards in some cases.",
        },
        {
          heading: "Verify Information",
          content:
            "Always verify the identity of anyone claiming to represent an insurance company. Call the company directly using a number from their official website or your policy documents. Be cautious of emails or calls requesting immediate action or personal information. Legitimate insurance companies won't pressure you for immediate decisions.",
        },
      ],
    },
    es: {
      title: "Prevención de Fraude en Seguros",
      sections: [
        {
          heading: "Entendiendo el Fraude de Seguros",
          content:
            "El fraude de seguros ocurre cuando alguien engaña intencionalmente a una compañía de seguros para ganancia financiera. Esto puede incluir escenificar accidentes, exagerar reclamos, proporcionar información falsa, o presentar reclamos por incidentes que nunca ocurrieron. El fraude cuesta miles de millones anualmente y aumenta las primas para todos los asegurados. Entender los esquemas comunes de fraude te ayuda a protegerte.",
        },
        {
          heading: "Esquemas Comunes de Fraude",
          content:
            "Los accidentes escenificados involucran estafadores causando colisiones intencionales para presentar reclamos falsos. Los reclamos exagerados involucran inflar costos de daños o lesiones. Los reclamos fantasma se presentan para accidentes que nunca sucedieron. El robo de identidad involucra usar la información de otra persona para obtener seguro o presentar reclamos. El fraude de primas involucra proporcionar información falsa para obtener tarifas más bajas.",
        },
        {
          heading: "Protégete del Fraude",
          content:
            "Ten cuidado con ofertas no solicitadas de tratamiento médico o servicios legales después de un accidente. Verifica las credenciales de cualquier proveedor médico o abogado. Ten cuidado con talleres de reparación que ofrecen renunciar a deducibles o inflar estimaciones de daños. Nunca firmes formularios de seguro en blanco. Mantén registros detallados de todas las interacciones y transacciones relacionadas con reclamos de seguro.",
        },
        {
          heading: "Señales de Alerta a Observar",
          content:
            "Las señales de advertencia incluyen: presión para usar talleres de reparación o proveedores médicos específicos, ofertas para dividir liquidaciones de seguro, solicitudes para antedatar pólizas, demandas de pago inmediato, y solicitudes para proporcionar información personal a partes desconocidas. Si algo parece demasiado bueno para ser cierto, probablemente lo sea.",
        },
        {
          heading: "Reporta Fraude Sospechado",
          content:
            "Si sospechas fraude de seguros, repórtalo a tu compañía de seguros y al departamento de seguros de tu estado. La mayoría de los estados tienen oficinas de fraude que investigan actividad sospechosa. Reportar fraude ayuda a proteger el sistema de seguros y puede prevenir fraude futuro. Puedes ser elegible para recompensas en algunos casos.",
        },
        {
          heading: "Verifica la Información",
          content:
            "Siempre verifica la identidad de cualquiera que afirme representar una compañía de seguros. Llama a la compañía directamente usando un número de su sitio web oficial o tus documentos de póliza. Ten cuidado con correos electrónicos o llamadas que solicitan acción inmediata o información personal. Las compañías de seguros legítimas no te presionarán para decisiones inmediatas.",
        },
      ],
    },
  },
  "when-to-review-policy": {
    en: {
      title: "When to Review Your Insurance Policy",
      sections: [
        {
          heading: "Annual Policy Review",
          content:
            "Review your policy at least once a year, ideally when it renews. Your needs and circumstances change over time, and your coverage should reflect these changes. An annual review ensures you're not overpaying for coverage you don't need or underinsured for your current situation. Set a reminder to review your policy each year.",
        },
        {
          heading: "Major Life Changes",
          content:
            "Significant life events should trigger a policy review: getting married or divorced, having children, buying a new home, changing jobs, moving to a new location, buying or selling a vehicle, or experiencing changes in income. These events can affect your coverage needs and may qualify you for discounts.",
        },
        {
          heading: "Vehicle Changes",
          content:
            "When you buy, sell, or trade a vehicle, you need to update your policy immediately. Adding a new vehicle requires adjusting coverage. Removing a vehicle should reduce your premium. If you've paid off a vehicle loan, you may want to adjust your coverage levels. Vehicle modifications or usage changes also warrant a review.",
        },
        {
          heading: "Driving Record Changes",
          content:
            "If you've had accidents or violations, your rates may increase. However, if violations or accidents drop off your record (typically after 3-5 years), you should review your policy as you may qualify for lower rates. Completing defensive driving courses can also result in discounts that warrant a policy review.",
        },
        {
          heading: "Coverage Needs Assessment",
          content:
            "Regularly assess whether your coverage limits are adequate. As your assets grow, you may need higher liability limits to protect them. If your vehicle's value has decreased significantly, you might consider adjusting or dropping collision/comprehensive coverage. Your coverage should match your current financial situation and risk tolerance.",
        },
        {
          heading: "Discount Opportunities",
          content:
            "New discounts may become available, or you may qualify for existing discounts you weren't aware of. Ask your insurer about: multi-policy discounts, safe driver discounts, good student discounts, low mileage discounts, anti-theft device discounts, and loyalty discounts. Regularly checking for available discounts can save significant money.",
        },
      ],
    },
    es: {
      title: "Cuándo Revisar Tu Póliza de Seguro",
      sections: [
        {
          heading: "Revisión Anual de Póliza",
          content:
            "Revisa tu póliza al menos una vez al año, idealmente cuando se renueva. Tus necesidades y circunstancias cambian con el tiempo, y tu cobertura debe reflejar estos cambios. Una revisión anual asegura que no estés pagando de más por cobertura que no necesitas o estés subasegurado para tu situación actual. Establece un recordatorio para revisar tu póliza cada año.",
        },
        {
          heading: "Cambios Importantes en la Vida",
          content:
            "Eventos significativos de la vida deben activar una revisión de póliza: casarse o divorciarse, tener hijos, comprar una nueva casa, cambiar de trabajo, mudarse a una nueva ubicación, comprar o vender un vehículo, o experimentar cambios en los ingresos. Estos eventos pueden afectar tus necesidades de cobertura y pueden calificarte para descuentos.",
        },
        {
          heading: "Cambios de Vehículo",
          content:
            "Cuando compras, vendes o intercambias un vehículo, necesitas actualizar tu póliza inmediatamente. Agregar un nuevo vehículo requiere ajustar la cobertura. Eliminar un vehículo debe reducir tu prima. Si has pagado un préstamo de vehículo, puedes querer ajustar tus niveles de cobertura. Las modificaciones de vehículo o cambios de uso también justifican una revisión.",
        },
        {
          heading: "Cambios en el Historial de Conducción",
          content:
            "Si has tenido accidentes o violaciones, tus tarifas pueden aumentar. Sin embargo, si las violaciones o accidentes se eliminan de tu registro (típicamente después de 3-5 años), debes revisar tu póliza ya que puedes calificar para tarifas más bajas. Completar cursos de conducción defensiva también puede resultar en descuentos que justifican una revisión de póliza.",
        },
        {
          heading: "Evaluación de Necesidades de Cobertura",
          content:
            "Evalúa regularmente si tus límites de cobertura son adecuados. A medida que tus activos crecen, puedes necesitar límites de responsabilidad más altos para protegerlos. Si el valor de tu vehículo ha disminuido significativamente, podrías considerar ajustar o eliminar la cobertura de colisión/integral. Tu cobertura debe coincidir con tu situación financiera actual y tolerancia al riesgo.",
        },
        {
          heading: "Oportunidades de Descuento",
          content:
            "Nuevos descuentos pueden estar disponibles, o puedes calificar para descuentos existentes de los que no estabas consciente. Pregunta a tu asegurador sobre: descuentos de múltiples pólizas, descuentos de conductor seguro, descuentos de buen estudiante, descuentos de bajo kilometraje, descuentos de dispositivos anti-robo, y descuentos de lealtad. Revisar regularmente los descuentos disponibles puede ahorrar dinero significativo.",
        },
      ],
    },
  },
};

import { useLanguageDetection } from "../../hooks/useLanguageDetection";

const navTranslations = {
  en: {
    home: "Home",
    about: "About",
    coverage: "Coverage",
    blog: "Resources",
    contact: "Contact",
    backToKnowledgeCenter: "Back to Knowledge Center",
    getQuote: "Get Free Quote",
    minRead: "min read",
    footer: {
      description:
        "Your trusted local agency for affordable, accessible insurance in South Carolina.",
      quickLinks: "Quick Links",
      services: "Insurance Services",
      servicesList: {
        auto: "Auto Insurance",
        motorcycle: "Motorcycle Insurance",
        commercial: "Commercial Insurance",
        workers: "Workers' Compensation",
        liability: "General Liability",
        renters: "Renters Insurance",
        homeowners: "Homeowners Insurance",
      },
      additionalServices: "Additional Services",
      additionalServicesList: {
        dmv: "DMV Services (title transfers, tags, plates, duplicates, etc.)",
        notary: "Notary Services",
      },
      contact: "Get In Touch",
      rights: "© 2025 Nova Insurance Group. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  es: {
    home: "Inicio",
    about: "Nosotros",
    coverage: "Coberturas",
    blog: "Recursos",
    contact: "Contacto",
    backToKnowledgeCenter: "Volver al Centro de Conocimiento",
    getQuote: "Cotización Gratis",
    minRead: "min de lectura",
    footer: {
      description:
        "Tu agencia local de confianza para seguros asequibles y accesibles en Carolina del Sur.",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios de Seguros",
      servicesList: {
        auto: "Seguro de Auto",
        motorcycle: "Seguro de Motocicleta",
        commercial: "Seguro Comercial",
        workers: "Compensación Laboral",
        liability: "Responsabilidad General",
        renters: "Seguro para Inquilinos",
        homeowners: "Seguro para Propietarios",
      },
      additionalServices: "Servicios Adicionales",
      additionalServicesList: {
        dmv: "Servicios del DMV (transferencias de título, etiquetas, placas, duplicados, etc.)",
        notary: "Servicios Notariales",
      },
      contact: "Contáctanos",
      rights: "© 2025 Nova Insurance Group. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  },
};

export default function TopicPageClient({ slug }: { slug: string }) {
  const { language, setLanguage } = useLanguageDetection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topic = knowledgeData.topics.find((t) => t.slug === slug);

  if (!topic) {
    useEffect(() => {
      router.push("/knowledge-center");
    }, [router]);
    return null;
  }

  const content =
    topicContent[slug] || topicContent["what-to-do-after-car-accident"];
  const Icon = iconMap[topic.icon] || FileText;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Header */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center cursor-pointer group">
              <div className="relative h-12 w-auto">
                <Image
                  src={scrolled ? "/logotipo.png" : "/Recurso 1.svg"}
                  alt="Nova Insurance Group"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#home"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {navTranslations[language].home}
              </Link>
              <Link
                href="/#about"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {navTranslations[language].about}
              </Link>
              <Link
                href="/#coverage"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {navTranslations[language].coverage}
              </Link>
              <Link
                href="/#blog"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {navTranslations[language].blog}
              </Link>
              <Link
                href="/#contact"
                className={`font-medium transition-all ${
                  scrolled
                    ? "text-gray-700 hover:text-[#295371]"
                    : "text-white hover:text-[#3a6b8a]"
                }`}
              >
                {navTranslations[language].contact}
              </Link>

              <div className="flex items-center space-x-3 border-l pl-6">
                <button
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    scrolled
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">
                    {language === "en" ? "ES" : "EN"}
                  </span>
                </button>
                <Link
                  href="/#contact"
                  className="px-6 py-2.5 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {navTranslations[language].getQuote}
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className={`p-2 rounded-lg ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Globe className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={scrolled ? "text-gray-700" : "text-white"}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="/#home"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {navTranslations[language].home}
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {navTranslations[language].about}
              </Link>
              <Link
                href="/#coverage"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {navTranslations[language].coverage}
              </Link>
              <Link
                href="/#blog"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {navTranslations[language].blog}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#295371]/10 hover:text-[#295371] rounded-lg font-medium transition-all"
              >
                {navTranslations[language].contact}
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-3 bg-[#295371] text-white rounded-lg font-semibold hover:bg-[#1e3d52] transition-all block text-center"
              >
                {navTranslations[language].getQuote}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-br from-[#1e3d52] via-[#295371] to-[#1e3d52] text-white py-16 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/knowledge-center"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {navTranslations[language].backToKnowledgeCenter}
          </Link>
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-sm text-white/80">
                  {/* @ts-ignore */}
                  {language === "en" ? topic.categoryEn : topic.categoryEs}
                </span>
                <p className="text-xs text-white/60">
                  {topic.readTime} {navTranslations[language].minRead}
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? content.en.title : content.es.title}
          </h1>
          <p className="text-xl text-white/90">
            {language === "en" ? topic.excerptEn : topic.excerpt}
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {(language === "en"
              ? content.en.sections
              : content.es.sections
            ).map((section: any, index: number) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-bold text-[#295371] mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#295371] to-[#1e3d52] text-white rounded-xl font-bold text-lg hover:from-[#1e3d52] hover:to-[#295371] transition-all transform hover:scale-105 shadow-lg"
            >
              {navTranslations[language].getQuote}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Image
                  src="/logotipo.png"
                  alt="Nova Insurance Group"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {navTranslations[language].footer.description}
              </p>
              <div className="flex items-center space-x-2 text-blue-400 mb-6">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">803-638-4779</span>
              </div>
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#295371] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#295371] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#295371] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-[#295371] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                {navTranslations[language].footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {(
                  ["home", "about", "coverage", "blog", "contact"] as const
                ).map((link) => (
                  <li key={link}>
                    {link === "about" ? (
                      <Link
                        href="/about"
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                        {navTranslations[language][link]}
                      </Link>
                    ) : (
                      <a
                        href={`/#${link}`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-1 group-hover:translate-x-1 transition-transform" />
                        {navTranslations[language][link]}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                {navTranslations[language].footer.services}
              </h3>
              <ul className="space-y-2 text-gray-400 mb-6">
                {Object.values(
                  navTranslations[language].footer.servicesList
                ).map((service: string, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-base mb-3 text-gray-300">
                {navTranslations[language].footer.additionalServices}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {Object.values(
                  navTranslations[language].footer.additionalServicesList
                ).map((service: string, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {navTranslations[language].footer.rights}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {navTranslations[language].footer.privacy}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {navTranslations[language].footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
