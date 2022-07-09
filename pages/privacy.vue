<template>
  <div>
    <Navbar :isHome="false"/>
    <div class="wrapper">
      <h2>Datenschutzerklärung</h2>
      <section>
        Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden
        von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
        Bereitstellung eines funktionsfähigen und nutzerfreundlichen
        Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
        Leistungen, verarbeitet. Gemäß Art. 4 Ziffer 1. der Verordnung (EU)
        2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“
        genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe
        automatisierter Verfahren ausgeführter Vorgang oder jede solche
        Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das
        Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung,
        die Anpassung oder Veränderung, das Auslesen, das Abfragen, die
        Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine
        andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die
        Einschränkung, das Löschen oder die Vernichtung.
      </section>
      <h3>Verantwortliche:</h3>
      <section>
        <p>
          Informationen über uns als Verantwortliche Verantwortlicher Anbieter
          dieses Internetauftritts im datenschutzrechtlichen Sinne ist:
        </p>
        <address class="contact-data">
          <div>{{ content.name }}</div>
          <div>
            {{ content.address.street }} {{ content.address.streetNumber }}
          </div>
          <div>{{ content.address.zipCode }} {{ content.address.city }}</div>
        </address>
      </section>
      <h3>Rechte der Nutzer und Betroffenen:</h3>
      <section>
        Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
        haben die Nutzer und Betroffenen das Recht auf Bestätigung, ob sie
        betreffende Daten verarbeitet werden, auf Auskunft über die
        verarbeiteten Daten, auf weitere Informationen über die
        Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);
        auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger
        Daten (vgl. auch Art. 16 DSGVO); auf unverzügliche Löschung der sie
        betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit
        eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist,
        auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO; auf
        Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf
        Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch
        Art. 20 DSGVO); auf Beschwerde gegenüber der Aufsichtsbehörde, sofern
        sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter
        unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet
        werden (vgl. auch Art. 77 DSGVO). Darüber hinaus ist der Anbieter dazu
        verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter
        offengelegt worden sind, über jedwede Berichtigung oder Löschung von
        Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel
        16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung
        besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem
        unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der
        Nutzer ein Recht auf Auskunft über diese Empfänger. Ebenfalls haben die
        Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch
        gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die
        Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO
        verarbeitet werden. Insbesondere ist ein Widerspruch gegen die
        Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
      </section>
      <h3>Informationen zur Datenverarbeitung:</h3>
      <section>
        Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
        gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
        Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen und nachfolgend keine anderslautenden Angaben zu
        einzelnen Verarbeitungsverfahren gemacht werden.

        <h4>Kontaktanfragen / Kontaktmöglichkeit</h4>
        Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten,
        werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer
        Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und
        Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung
        können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.
        Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.
        Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet
        worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen, wie bspw. bei einer sich etwaig anschließenden
        Vertragsabwicklung.
      </section>
    </div>
    <Footer
      :name="content.name"
      :address="content.address"
      :telephone="content.telephone"
      :mail="content.mail"
    />
  </div>
</template>

<script>
import content from "../content";
export default {
  data() {
    return {
      content: content,
    };
  },
};
</script>

<style lang="scss" scoped>

h1 {
  font-size: $fs-huge;
}

h2 {
  font-size: $fs-large;
}

section {
  color: $secondary-font-color;
  font-weight: $fw-light;
  line-height: 1.6rem;
  margin-bottom: $margin-large;
}

.wrapper {
  margin-bottom: $margin-huge;
}

@media only screen and (min-width: 800px) {
  .wrapper {
    padding: 0 $margin-huge;
  }
}
</style>
