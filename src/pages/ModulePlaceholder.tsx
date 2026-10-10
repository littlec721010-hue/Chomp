import { StyleSheet, Text } from 'react-native'
import { AppLayout } from '../layouts/AppLayout'
import { Button } from '../components/Button'
import type { ButtonVariant } from '../components/Button'
import { theme } from '../styles/theme'
import { View } from 'react-native'
export type PageAction = { label: string; onPress: () => void; variant?: ButtonVariant }
type Props = { title: string; description?: string; actions?: PageAction[]; onBack?: () => void }
export function ModulePlaceholder({ title, description, actions = [], onBack }: Props) {
  return <AppLayout>
    {onBack && <Button label="‹ Back" variant="soft" onPress={onBack} style={styles.back} />}
    <Text accessibilityRole="header" style={styles.title}>{title}</Text>
    {description && <Text style={styles.description}>{description}</Text>}
    <View style={styles.card}>
      <Text style={styles.badge}>Coming soon</Text>
      <Text style={styles.cardTitle}>Your next Chomp starts here.</Text>
      <Text style={styles.body}>This page is being prepared.</Text>
    </View>
    {actions.map(action => <Button key={action.label} label={action.label} variant={action.variant} onPress={action.onPress} />)}
  </AppLayout>
}
const styles = StyleSheet.create({
  title: { fontFamily: theme.fonts.extrabold, fontSize: 32, lineHeight: 34, letterSpacing: -1.2, color: theme.colors.ink },
  description: { fontFamily: theme.fonts.regular, fontSize: 14, lineHeight: 23, color: theme.colors.ink, marginTop: -8 },
  card: { backgroundColor: theme.colors.surface, borderRadius: theme.radius.card, padding: 24, gap: 12, marginTop: 8 },
  badge: { fontFamily: theme.fonts.bold, fontSize: 11, alignSelf: 'flex-start', backgroundColor: theme.colors.primary, color: theme.colors.onPrimary, borderRadius: 99, paddingHorizontal: 10, paddingVertical: 3 },
  cardTitle: { fontFamily: theme.fonts.bold, fontSize: 24, lineHeight: 32, letterSpacing: -.6, color: theme.colors.ink },
  body: { fontFamily: theme.fonts.regular, fontSize: 14, lineHeight: 23, color: theme.colors.muted },
  back: { alignSelf: 'flex-start' },
})
