/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cn from 'classnames';

import section1Styles from './Mybio_section1.module.scss';
import styles from './Mybio.module.scss';

function renderSection1(props) {
  return (
    <section className={cn(section1Styles.section1, section1Styles.section1_layout)}>
      /*This group structure is not ready for flow layout, please resolve the 🐞 unready structure in pxCode editor.*/
    </section>
  );
}

export default function Mybio(props) {
  return (
    <div className={cn('mybio', styles.group, styles.group_layout1)}>
      <div className={cn(styles.group, styles.group_layout)}>
        <div className={cn(styles.group, styles.group_layout)}>
          <div className={cn(styles.group, styles.group_layout)}>
            <main className={cn(styles.main, styles.main_layout)}>
              <div className={styles.main_spacer} />
              <div className={styles.main_spacer} />
              <div className={styles.main_spacer} />
            </main>

            <div
              style={{ '--src': `url(${require('assets/f21d4a87886fc6208befc24232cc1eaf.png').default})` }}
              className={cn(styles.block14, styles.block14_layout)}
            />
            {renderSection1(props)}
          </div>
        </div>

        <div className={cn(styles.group1, styles.group1_layout)} />
      </div>

      <h4 className={cn(styles.highlights12, styles.highlights12_layout)}>{'Joined several design works.'}</h4>
    </div>
  );
}

Mybio.inStorybook = true;
