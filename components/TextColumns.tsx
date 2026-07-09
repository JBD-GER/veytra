type TextColumn = {
  title: string;
  body: string;
};

type TextColumnsProps = {
  columns: TextColumn[];
};

export function TextColumns({ columns }: TextColumnsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {columns.map((column, index) => (
        <article
          key={column.title}
          data-reveal="slide"
          data-reveal-delay={`${index * 80}ms`}
          className="border-t border-neutral-200 pt-6"
        >
          <h3 className="text-xl font-semibold text-neutral-950">{column.title}</h3>
          <p className="mt-4 text-base leading-8 text-neutral-600">{column.body}</p>
        </article>
      ))}
    </div>
  );
}
