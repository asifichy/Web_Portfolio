import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-tertiary dark:via-secondary/40 to-orange-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="glass rounded-3xl p-12 xl:p-20 text-center max-w-4xl mx-auto border border-border/50">
          <h2 className="h2 max-w-2xl mx-auto mb-6">
            Ready to transform your{" "}
            <span className="text-gradient">cloud infrastructure</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Let's collaborate to architect scalable solutions, automate your deployments, 
            and accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-x-2 group text-base">
                Start a Conversation
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a
              href="/resume/Md__Asif_Imtiyaj_Chowdhury_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-x-2 group text-base border-primary/20 hover:bg-primary/5">
                View Resume
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
