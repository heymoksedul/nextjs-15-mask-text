import MaskText from "@/utils/maskText";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-[200px]">
        <MaskText>
          <p className="text-5xl">
            A visual designer - with skills that been replaced by A.I (yet) -
            making good shit only if the paycheck is equally good.
          </p>
        </MaskText>
      </div>
      <div className="mt-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi
        iusto pariatur libero repudiandae recusandae dignissimos tempora at
        voluptatem doloribus.
      </div>
    </div>
  );
}
