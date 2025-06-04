import { SOCIALS } from '@/lib/data/socials';
import { Card, CardContent } from '../../ui/card';
import SocialLink from './social-link';

export default function SocialGrid() {
  return (
    <div className="col-span-12 col-start-1 row-start-2 flex flex-col gap-4 xl:col-span-8 xl:col-start-5 xl:row-start-1 2xl:col-span-4 2xl:col-start-9 2xl:row-start-1">
      <Card className="h-full border-0 bg-transparent py-0">
        <CardContent className="grid h-full grid-cols-3 gap-4 rounded-3xl p-0">
          {SOCIALS.map((social) => (
            <SocialLink key={social.name} social={social} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
