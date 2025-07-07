// app/manage-plan/page.tsx
import SchematicComponent from '@/components/sechematic/SchematicComponent';
import { getTemporaryAccessToken } from '@/actions/getTemporaryAccessToken';

export default async function ManagePlan() {
  const accessToken = await getTemporaryAccessToken();
  const componentId = process.env.NEXT_PUBLIC_SCHEMATIC_CUSTOMER_PORTAL_COMPONENT_ID;

  if (!accessToken) return <div>Error: No access token</div>;

  return (
    <div className=' container xl:max-w-5xl mx-auto p-4 md:p-0'>
      <h1 className=' text-2xl font-bold mb-4 my-8'>Manage your Plan</h1>
      <p className=' text-gray-600 mb-8'></p>
      <SchematicComponent accessToken={accessToken} componentId={componentId} />
    </div>
  );
}
