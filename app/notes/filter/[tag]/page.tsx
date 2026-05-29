type Props = {
  params: Promise<{
    tag: string;
  }>;
};

const FilterPage = async ({ params }: Props) => {
  const { tag } = await params;

  return <h1>{tag}</h1>;
};

export default FilterPage;
