import type { DayNightSwitchProps } from '~/typings'

function DayNightSwitch(props: DayNightSwitchProps) {
  const { checked, handleToggle } = props

  return (
    <div className="wrapper mt-6 mb-6">
      <div className="toggle">
        <input className="toggle-input" type="checkbox" checked={checked} onChange={handleToggle} />
        <div className="toggle-bg" />
        <div className="toggle-switch">
          <div className="toggle-switch-figure"></div>
          <div className="toggle-switch-figureAlt"></div>
        </div>
      </div>
    </div>
  )
}

export default DayNightSwitch
