type DayNightSwitchProps = {
  handleToggle: () => void
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'checked'>

export type { DayNightSwitchProps }
