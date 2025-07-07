"use client";

import { EmbedProvider, SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";

export default function SchematicComponent({
  accessToken,
  componentId,
}: {
  accessToken: string;
  componentId?: string;
}) {
  if (!componentId) return null;

  return (
    <EmbedProvider>
      <SchematicEmbedComponent accessToken={accessToken} id={componentId} />
    </EmbedProvider>
  );
}
