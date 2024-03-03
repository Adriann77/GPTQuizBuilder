import styles from './MainLayout.module.scss';

import React from 'react';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
	return <div className={styles.mainLayout}>{children}</div>;
};
