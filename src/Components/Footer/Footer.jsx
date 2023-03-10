import FaceBookIcon from "../Icons/FaceBookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import GitHubIcon from "../Icons/GitHubIcon";
import HomeIcon from "../Icons/HomeIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import FaxIcon from "../Icons/FaxIcon";

export default function Footer() {
  return (
    <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div class="flex items-center justify-center border-b-2 border-neutral-200 p-2 dark:border-neutral-500 lg:justify-between">
        <div class="mr-8 hidden md:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div class="flex justify-center">
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaceBookIcon />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <TwitterIcon />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <GoogleIcon />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <InstagramIcon />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <LinkedInIcon />
          </a>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div class="mx-6 py-3 text-center md:justify-between">
        <div class="grid-1 grid gap-8 md:grid-cols-2">
          <div class="">
            <h6 class="mb-2 flex justify-center font-semibold uppercase">
              Useful links
            </h6>
            <p class="mb-2">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Pricing
              </a>
            </p>
            <p class="mb-2">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Settings
              </a>
            </p>
            <p class="mb-2">
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                Help
              </a>
            </p>
          </div>
          <div>
            <h6 class="mb-2 flex justify-center font-semibold uppercase">
              Contact
            </h6>
            <p class="mb-2 flex items-center justify-center">
              <HomeIcon />
              New York, NY 10012, US
            </p>
            <p class="mb-2 flex items-center justify-center">
              <MailIcon />
              info@example.com
            </p>
            <p class="mb-2 flex items-center justify-center">
              <PhoneIcon />+ 01 234 567 88
            </p>
            <p class="flex items-center justify-center">
              <FaxIcon />+ 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div class="bg-neutral-200 p-4 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          class="font-semibold text-neutral-600 dark:text-neutral-400"
          href="/"
        >
          {" "}
          Denny & Boulton
        </a>
      </div>
    </footer>
  );
}
