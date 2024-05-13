import GITHUB_ICON from '../../assets/github-mark.png';
import LINKEDIN_ICON from '../../assets/linkedin.svg';

export const Footer = () => {
  return (
    <footer
      className="footer footer-center  h-[7vh]
         bg-[#1A202C]  text-xs text-[#fff]  "
    >
      <aside>
        <ul className="flex  gap-11 ">
          <li className="w-[30px] rounded-full border-2 bg-white">
            <a target="_blank" href="https://github.com/Adriann77">
              <img src={GITHUB_ICON} alt="github_icon" />
            </a>
          </li>
          <li className="w-[30px] ">
            <a target="_blank" href="https://www.linkedin.com/in/adrian-klimas-87b169281/">
              <img src={LINKEDIN_ICON} alt="github_icon" />
            </a>
          </li>
        </ul>

      </aside>
    </footer>
  );
};
