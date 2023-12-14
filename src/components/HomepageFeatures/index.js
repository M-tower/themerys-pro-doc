import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/utilisation-facile.svg').default,
    description: (
      <>
        THEMERYS Pro a été pensé pour que vous puissiez l'utiliser sans aucune formation préalable.
        En plus de cette documentation bien fournie, vous trouverez de l'aide sous
        diverses formes un peu partout dans l'interface.
      </>
    ),
  },
  {
    title: 'Restez focus',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        Avec sa gestion efficace de la facturation, des dépenses, des stocks et des relations externes, THEMERYS pro
        vous assure la recherche et la manipulation de vos données avec aisance à tout moments et sur tous les supports connectés.
      </>
    ),
  },
  {
    title: 'Vos documents à votre image',
    Svg: require('@site/static/img/a-votre-image.svg').default,
    description: (
      <>
        THEMERYS Pro dispose d'un module de personnalisation simple et intuitif pour les documments générés (factures, devis, et bons).
        En plus vous pouvez personnaliser le séquençage des numéros.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
