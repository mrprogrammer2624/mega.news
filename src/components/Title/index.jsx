import clsx from "clsx";

export const Title = ({ children, className, spacing }) => {
  return (
    <div
      className={clsx(
        className,
        {
          ["mb-5"]: spacing == true,
          ["mb-0"]: spacing == false,
        },
        "flex gap-2 items-center"
      )}
    >
      <span className="flex w-1 h-3 rounded-2xl bg-primary"></span>
      <h4 className="font-medium capitalize">{children}</h4>
    </div>
  );
};
