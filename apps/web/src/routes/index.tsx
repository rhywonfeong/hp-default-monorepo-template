import { createFileRoute } from "@tanstack/react-router";

import AreaChartDemo from "@/components/area-chart-demo";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <div className="grid gap-6">
        <AreaChartDemo />
      </div>
    </div>
  );
}