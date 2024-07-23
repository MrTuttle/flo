// import { cn } from "@/lib/utils/classes";
import { cn } from "@/lib/utils";

function SkeletonAria({
  className,
  show = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  show?: boolean;
}) {
  if (!show) return props.children;
  return (
    <span
      className={cn(
        "relative block h-6 animate-pulse rounded-md bg-bg-muted",
        props.children && "h-auto *:invisible",
        className
      )}
      {...props}
    />
  );
}

export { SkeletonAria };

// EXAMPLE
{
  /* <Skeleton className="h-44 w-64" />
<div>
  <Skeleton className="size-10 rounded-full" />
  <div>
    <Skeleton className="h-4 w-44" />
    <Skeleton className="h-4 w-36" />
  </div>
</div> */
}
