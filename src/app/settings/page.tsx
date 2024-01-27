import React from "react"
import { getAppSettings } from "../lib/settings";

async function Settings() {

  const { theme, language } = await getAppSettings()
  return (
    <div className="border border-dashed">
      <p>Theme: {theme}</p>
      <p>Language: {language}</p>
    </div>
  )
}

export default Settings;  