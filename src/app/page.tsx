import { redirect } from 'next/navigation';
export default function Home({}) {
  redirect('lib/admin/default');
}
