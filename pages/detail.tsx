import Typo from 'components/Typo';

interface Props {
  pondId: number;
}

export default function Detail({ pondId }: Props) {
  return <Typo>{pondId}</Typo>;
}

export async function getServerSideProps({ query }) {
  const pondId = query.pondId as string | undefined;

  if (pondId == null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pondId,
    },
  };
}
