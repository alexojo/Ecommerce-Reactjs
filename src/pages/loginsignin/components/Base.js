import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'
import Logo_UwUnsaac from '../../../assets/images/Logo_UwUnsaac.svg'
export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  errorMsg,
  button_title,
  footer_content
}) {
  return (
    <div className={styles.outbox}>
      <div className={styles.logo}>
      <img alt = 'logo' src={Logo_UwUnsaac}/>
      </div>
      <div className={styles.title_style}>{title}</div>
      <div className={styles.border_style}></div>
      {
        inputs.map(({ title,name, validations }) =>
          <FormInput
            key={name}
            name={name}
            title={title}
            validations={validations}
            errorMessage={errorMsg[name].errorMsg}
            onChange={onInputChange}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
          />
        )
      }
      <Button button_title={button_title} onClick={onSubmit} />
      <Footer content={footer_content} />
    </div>
  )
}


