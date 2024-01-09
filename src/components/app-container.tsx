interface Props {
  children: React.ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <div className="h-screen w-screen  bg-gradient-to-br from-indigo-950 to-neutral-950">
      {children}
    </div>
  );
}
