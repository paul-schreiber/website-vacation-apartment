<template>
  <div>
    <Navbar :isHome="false" />
    <div class="wrapper">
      <h2>Impressum</h2>
      <div>
        <h3>Angaben gemäß § 5 TMG:</h3>
        <section>
          <address class="contact-data">
            <div>{{ content.name }}</div>
            <div>
              {{ content.address.street }} {{ content.address.streetNumber }}
            </div>
            <div>{{ content.address.zipCode }} {{ content.address.city }}</div>

            <div class="mt-s">
              {{ content.mail }}
            </div>
          </address>
        </section>
        <h3>Haftung für Inhalte</h3>

        <section>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </section>

        <h3>Haftung für Links</h3>
        <section>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </section>

        <h3>Urheberrecht</h3>
        <section>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </section>
      </div>
    </div>
    <Footer :name="content.name" :address="content.address" :telephone="content.telephone" :mail="content.mail" />
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
  head() {
    return {
      title: 'Impressum',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: `Impressum von ${content.name}`
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: $light-background-color;

  h1 {
    font-size: $fs-huge;
    touch-action: manipulation;
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
}
</style>
