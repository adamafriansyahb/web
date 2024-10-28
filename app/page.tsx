import {
  TypographyH1,
  TypographyP,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
} from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import About from '@/containers/about';

export default function Home() {
  return (
    <div className="px-4 py-20">
      <About />

      {/* running */}
      <div className="mt-10">
        <TypographyH3>running</TypographyH3>

        <TypographyP>describe why you run here</TypographyP>

        <TypographyH4>events joined</TypographyH4>
        <div className="relative bg-pink-300 flex justify-center">
          <div className="-rotate-[10deg] h-[250px] w-[250px]">
            <img
              className="rounded-xl"
              src="https://img.freepik.com/premium-photo/fullcolor-betta-fish-dark-background_891817-46.jpg"
              alt=""
            />
          </div>

          <div className="-ml-52 h-[200px] w-[250px]">
            <img
              className="rounded-xl"
              src="https://www.ctvnews.ca/polopoly_fs/1.4724422!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
              alt=""
            />
          </div>
        </div>

        <TypographyH4>personal bests</TypographyH4>

        <Tabs defaultValue="5km" className="">
          <TabsList>
            <TabsTrigger value="5km">5 km</TabsTrigger>
            <TabsTrigger value="password">10 km</TabsTrigger>
            <TabsTrigger value="a">21 km</TabsTrigger>
            <TabsTrigger value="b">42 km</TabsTrigger>
          </TabsList>
          <TabsContent value="5km">
            <img
              src="https://www.ctvnews.ca/polopoly_fs/1.4724422!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg"
              alt=""
            />
            {/* summary */}
            <div className="mt-10 flex h-5 items-center justify-center space-x-4 text-center text-sm">
              <div>
                <TypographyMuted>Avg. pace</TypographyMuted>
                <TypographyP>4:57 /km</TypographyP>
              </div>
              <Separator orientation="vertical" />
              <div>
                <TypographyMuted>Time</TypographyMuted>
                <TypographyP>24:44</TypographyP>
              </div>
              <Separator orientation="vertical" />
              <div className="">
                <TypographyMuted>Fastest split</TypographyMuted>
                <TypographyP>4:50 /km</TypographyP>
              </div>
            </div>

            {/* split section */}
            <div className="mt-10">
              <TypographyP>Split</TypographyP>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[3rem]">km</TableHead>
                    <TableHead className="w-full">pace</TableHead>
                    <TableHead className="text-right">elev</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 1, 1, 1, 1].map((item, index) => (
                    <TableRow className="" key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell className="flex items-center gap-x-3">
                        <TypographyP>5:12</TypographyP>
                        <Progress value={33} />
                      </TableCell>
                      <TableCell className="text-right">1</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
