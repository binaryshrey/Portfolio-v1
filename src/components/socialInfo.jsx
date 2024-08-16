import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import db from "../data/db.json";
import { FaHashnode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaSpotify } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import * as styles from "../styles/app.module.css";

const SocialInfo = () => {
	React.useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<div className={styles.socialContainer}>
				<div
					data-aos="zoom-in"
					data-aos-duration="500"
					className={styles.socialPadding}
				>
					<a
						href={db.socials.LinkedIn}
						className="text-zinc-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={20} />
					</a>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="600"
					className={styles.socialPadding}
				>
					<a
						href={db.socials.Github}
						className="text-zinc-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size={20} />
					</a>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="700"
					className={styles.socialPadding}
				>
					<a
						href={db.socials.Twitter}
						className="text-zinc-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter size={20} />
					</a>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="800"
					className={styles.socialPadding}
				>
					<a
						href={db.socials.Spotify}
						className="text-zinc-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaSpotify size={20} />
					</a>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="800"
					className={styles.socialPadding}
				>
					<a
						href={db.socials.Hashnode}
						className="text-zinc-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaHashnode size={20} />
					</a>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="900"
					className={styles.socialPadding}
				>
					<a
						href={db.socials.Substack}
						className="text-zinc-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiSubstack size={20} />
					</a>
				</div>
			</div>
		</>
	);
};

export default SocialInfo;
