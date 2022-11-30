import * as React from 'react';
//import styles from './SolicitacaoFerias.module.scss';
import { ISolicitacaoFeriasProps } from './ISolicitacaoFeriasProps';
//import { escape } from '@microsoft/sp-lodash-subset';

import Button from './Button'

export default class SolicitacaoFerias extends React.Component<ISolicitacaoFeriasProps, {}> {
  public render(): React.ReactElement<ISolicitacaoFeriasProps> {
    return (
      <section >
        <div>
          <Button displayText='teste'/>
        </div>
      </section>
    );
  }
}
