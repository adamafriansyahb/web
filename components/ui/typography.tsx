import React from 'react';
import { cn } from '@/lib/utils';

export function TypographyH1({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        className,
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        className,
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        className,
        'scroll-m-20 text-2xl font-semibold tracking-tight',
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        className,
        'scroll-m-20 text-xl font-semibold tracking-tight',
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      // className={cn(className, 'leading-7 [&:not(:first-child)]:mt-6')}
      className={cn(className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(className, 'mt-6 border-l-2 pl-6 italic')}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function TypographyMuted({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={cn(className, 'text-sm text-muted-foreground')} {...props}>
      {children}
    </p>
  );
}

export function TypographyLarge({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={cn(className, 'text-lg font-semibold')} {...props}>
      {children}
    </p>
  );
}
