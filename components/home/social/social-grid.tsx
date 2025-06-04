import { SOCIALS } from '@/lib/data/socials';
import { Card, CardContent } from '../../ui/card';
import SocialLink from './social-link';

export default function SocialGrid() {
  return (
    <div className="col-span-3 flex flex-col gap-4">
      <Card className="col-span-2 border-0 bg-transparent py-0">
        <CardContent className="grid grid-cols-3 gap-4 rounded-3xl p-0">
          {SOCIALS.map((social) => (
            <SocialLink key={social.name} social={social} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
