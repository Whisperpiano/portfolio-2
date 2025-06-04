import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

export default function AvatarCard({ src }: { src: string }) {
  return (
    <Card className="col-span-12 col-start-1 row-start-1 h-full min-h-[450px] overflow-x-hidden rounded-3xl bg-transparent py-0 xl:col-span-4 2xl:col-span-3">
      <CardContent className="relative flex h-full items-center justify-center px-0">
        <Image
          src={src}
          alt="Jesus"
          fill
          className="object-cover object-top xl:object-center"
        />
      </CardContent>
    </Card>
  );
}
