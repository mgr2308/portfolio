import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-cream rounded-card border border-border-light overflow-hidden",
        hover && "transition-colors duration-250 ease-standard hover:border-charcoal-40",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 md:p-8", className)} {...props} />
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 md:p-8 pt-0", className)} {...props} />
}

export { Card, CardHeader, CardContent }
