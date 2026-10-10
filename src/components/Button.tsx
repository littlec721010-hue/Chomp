import { Pressable, StyleSheet, Text } from 'react-native'
import type { PressableProps } from 'react-native'
import { theme } from '../styles/theme'
export type ButtonVariant = 'primary' | 'secondary' | 'soft'
type Props = Omit<PressableProps, 'children'> & { label: string; variant?: ButtonVariant }
export function Button({ label, variant = 'primary', disabled, style, ...props }: Props) {
  return <Pressable {...props} disabled={disabled} accessibilityRole="button" accessibilityState={{ disabled: !!disabled }}
    style={state => [styles.base, { backgroundColor: variant === 'secondary' ? theme.colors.secondary : variant === 'soft' ? theme.colors.soft : theme.colors.primary }, state.pressed && styles.pressed, disabled && styles.disabled, typeof style === 'function' ? style(state) : style]}>
    <Text style={[styles.label, { color: variant === 'secondary' ? '#fff' : theme.colors.onPrimary }]}>{label}</Text>
  </Pressable>
}
const styles = StyleSheet.create({
  base: { minHeight: 48, paddingHorizontal: 20, paddingVertical: 12, borderRadius: theme.radius.pill, alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: theme.fonts.bold, fontSize: 15, lineHeight: 20, textAlign: 'center' },
  pressed: { opacity: .8 }, disabled: { opacity: .5 },
})
