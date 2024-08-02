import SearchLayout from "./SearchLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
    }) {
    
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
          <nav className="h-fit mt-4 mb-10 px-5">
            <SearchLayout />
      </nav>

      {children}
    </section>
  );
}
