import { memo, useMemo } from "react";

const ArrayItem = memo(({ value }) => {
  return <div>{value}</div>;
});

const ArrayList = ({ numbers }) => {
  const doubled = useMemo(() => {
    return numbers.map(num => num * 2);
  }, [numbers]);

  return (
    <div>
      {doubled.map((num, index) => (
        <ArrayItem key={index} value={num} />
      ))}
    </div>
  );
}
