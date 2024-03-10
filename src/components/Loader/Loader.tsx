import styles from "./Loader.module.scss"

export const Loader = () => {
	return (
		<div className={styles.loading}>
			<span>Loading</span>
		</div>
	);
};
