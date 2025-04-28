import { HomepageSection } from "@/components/homepage/section";
import { NewsContainer } from "@/components/news-container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-stretch justify-center gap-10 overflow-hidden py-8">
      <NewsContainer />
      <HomepageSection heading="O wydarzeniu">
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
            vehicula pellentesque.
          </p>
          <p>
            Sed nec nulla at leo porta tempus. Praesent at libero ex. Phasellus
            ornare justo diam, a ultrices felis mollis vel. Curabitur a
            sollicitudin odio, Etiam non consectetur mi,
          </p>
          <p>
            Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
            id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt iaculis
            eu, tempor eu metus. hendrerit.
          </p>
        </div>
      </HomepageSection>
      <HomepageSection variant="secondary" heading="Profilaktyka">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
              vehicula pellentesque.
            </p>
            <p>
              Sed nec nulla at leo porta tempus. Praesent at libero ex.
              Phasellus ornare justo diam, a ultrices felis mollis vel.
              Curabitur a sollicitudin odio, Etiam non consectetur mi,
            </p>
            <p>
              Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
              id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt
              iaculis eu, tempor eu metus. hendrerit.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
              vehicula pellentesque.
            </p>
            <p>
              Sed nec nulla at leo porta tempus. Praesent at libero ex.
              Phasellus ornare justo diam, a ultrices felis mollis vel.
              Curabitur a sollicitudin odio, Etiam non consectetur mi,
            </p>
            <p>
              Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
              id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt
              iaculis eu, tempor eu metus. hendrerit.
            </p>
          </div>
        </div>
      </HomepageSection>
      <HomepageSection heading="Wyniki badań">
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
            vehicula pellentesque.
          </p>
          <p>
            Sed nec nulla at leo porta tempus. Praesent at libero ex. Phasellus
            ornare justo diam, a ultrices felis mollis vel. Curabitur a
            sollicitudin odio, Etiam non consectetur mi,
          </p>
          <p>
            Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
            id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt iaculis
            eu, tempor eu metus. hendrerit.
          </p>
        </div>
      </HomepageSection>
    </div>
  );
}
