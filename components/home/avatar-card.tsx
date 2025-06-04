import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

export default function AvatarCard({ src }: { src: string }) {
  return (
    <Card className="col-span-2 h-full overflow-x-hidden rounded-3xl bg-transparent py-0">
      <CardContent className="relative flex h-full items-center justify-center px-0">
        <Image src={src} alt="Jesus" fill className="object-cover" />
      </CardContent>
    </Card>
  );
}
