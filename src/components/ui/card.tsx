import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-sm border border-sand/60 overflow-hidden",
        hover && "transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5",
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
