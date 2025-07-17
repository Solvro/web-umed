import { HeroSection } from "@/components/hero";
import { PAGE_PATHS } from "@/config/constants";

export default function AboutPage() {
  return (
    <div>
      <HeroSection>{PAGE_PATHS.about}</HeroSection>
      <div className="space-y-4 p-5 sm:p-15 lg:p-30">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est
          urna, vulputate et justo vel, tempor dignissim tortor. Donec nisl
          lorem, rutrum ac laoreet at, pellentesque eu urna. Donec non augue nec
          ipsum sollicitudin lacinia. Quisque euismod libero libero, non posuere
          enim gravida eu. Curabitur efficitur porttitor enim, a rutrum tellus
          faucibus id. Phasellus porta enim ut velit cursus egestas. Nunc
          elementum risus sed laoreet congue. Pellentesque tristique bibendum
          placerat. Suspendisse bibendum, neque elementum aliquam commodo, est
          magna vehicula turpis, sit amet rutrum mi arcu sit amet turpis.
          Curabitur dapibus arcu eros, a bibendum metus laoreet ac. Etiam
          elementum quam elit, quis tincidunt ipsum pellentesque ut. In hac
          habitasse platea dictumst. In feugiat, arcu quis tincidunt porttitor,
          arcu mauris hendrerit risus, sit amet tincidunt lacus nibh nec libero.
          Vestibulum sed imperdiet mauris. Proin at purus mi.
        </p>
        <p>
          Nullam vel justo tincidunt, efficitur libero ut, facilisis neque.
          Suspendisse tempus, lectus eget hendrerit auctor, augue turpis
          venenatis leo, id pharetra magna nulla nec elit. Maecenas vel augue ac
          nisl lobortis elementum. Praesent consectetur dolor ut congue
          vehicula. Donec in lobortis eros. Praesent ut ante non mi bibendum
          porta vitae et odio. Quisque congue, mi non facilisis dapibus, nisi
          libero dictum arcu, eu convallis neque eros non leo. Aliquam tincidunt
          volutpat dictum. Quisque vitae sapien urna. Nullam commodo arcu massa,
          id sollicitudin mauris vehicula quis. Vestibulum est metus, tristique
          id eleifend eget, imperdiet sit amet nibh.
        </p>
      </div>
    </div>
  );
}
