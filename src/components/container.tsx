interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <main className="flex h-[95%] items-center justify-center">{children}</main>
  );
}
