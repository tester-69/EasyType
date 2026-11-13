import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getVersion } from "@tauri-apps/api/app";
import { openUrl } from "@tauri-apps/plugin-opener";
import { SettingsGroup } from "../../ui/SettingsGroup";
import { SettingContainer } from "../../ui/SettingContainer";
import { Button } from "../../ui/Button";
import { AppDataDirectory } from "../AppDataDirectory";
import { AppLanguageSelector } from "../AppLanguageSelector";
import { ShowWhatsNewOnUpdate } from "../ShowWhatsNewOnUpdate";
import { ThemeSelector } from "../ThemeSelector";
import { LogDirectory } from "../debug";

export const AboutSettings: React.FC = () => {
  const { t } = useTranslation();
  const [version, setVersion] = useState("");

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const appVersion = await getVersion();
        setVersion(appVersion);
      } catch (error) {
        console.error("Failed to get app version:", error);
        setVersion("0.1.2");
      }
    };

    fetchVersion();
  }, []);

  return (
    <div className="max-w-3xl w-full mx-auto space-y-6">
      <SettingsGroup title={t("settings.about.title")}>
        <AppLanguageSelector descriptionMode="tooltip" grouped={true} />
        <ThemeSelector descriptionMode="tooltip" grouped={true} />
        <SettingContainer
          title={t("settings.about.version.title")}
          description={t("settings.about.version.description")}
          grouped={true}
        >
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <span className="text-sm font-mono">v{version}</span>
        </SettingContainer>

        <ShowWhatsNewOnUpdate descriptionMode="tooltip" grouped={true} />

        {/* eslint-disable i18next/no-literal-string */}
        <SettingContainer
          title="EasyType"
          description="Made by Sefat Khan (@sefat371)"
          grouped={true}
        >
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => openUrl("https://sefat-371.netlify.app/")}
            >
              Website
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => openUrl("https://www.instagram.com/sefat.371/")}
            >
              Instagram
            </Button>
          </div>
        </SettingContainer>
        {/* eslint-enable i18next/no-literal-string */}

        <SettingContainer
          title={t("settings.about.sourceCode.title")}
          description={t("settings.about.sourceCode.description")}
          grouped={true}
        >
          <Button
            variant="secondary"
            size="md"
            onClick={() => openUrl("https://github.com/cjpais/Handy")}
          >
            {t("settings.about.sourceCode.button")}
          </Button>
        </SettingContainer>

        <AppDataDirectory descriptionMode="tooltip" grouped={true} />
        <LogDirectory grouped={true} />
      </SettingsGroup>

      <SettingsGroup title={t("settings.about.acknowledgments.title")}>
        <SettingContainer
          title={t("settings.about.acknowledgments.ggml.title")}
          description={t("settings.about.acknowledgments.ggml.description")}
          grouped={true}
          layout="stacked"
        >
          <div className="text-sm text-ink-3">
            {t("settings.about.acknowledgments.ggml.details")}
          </div>
        </SettingContainer>
        {/* eslint-disable i18next/no-literal-string */}
        <SettingContainer
          title="Handy"
          description="EasyType is built on Handy by CJ Pais, released under the MIT License."
          grouped={true}
          layout="stacked"
        >
          <div className="text-sm text-ink-3">
            Copyright (c) 2025 CJ Pais. Modifications and EasyType branding (c)
            2026 Sefat Khan.
          </div>
        </SettingContainer>
        {/* eslint-enable i18next/no-literal-string */}
      </SettingsGroup>
    </div>
  );
};
