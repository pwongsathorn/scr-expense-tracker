import type { VTextField } from 'vuetify/lib/components/VTextField/index.mjs'
type VTextFieldProps = InstanceType<typeof VTextField>['$props']
enum TEXT_INPUT_TYPE_ENUM {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Hidden = 'hidden',
  Number = 'number',
  Search = 'search',
  Tel = 'tel',
  Url = 'url',
}

type TextInputTypes = `${TEXT_INPUT_TYPE_ENUM}`

export interface InputProps extends VTextFieldProps {
  type: TextInputTypes
}
