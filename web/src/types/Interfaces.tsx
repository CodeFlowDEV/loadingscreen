export interface ITranslation {
    loading: string;
    tips: string,
    news: string,
    keyboard: string,
    version: string,
}

export interface IConfig {
    useParticles: boolean,
    particleColor: string,
    IsLogoImage: boolean;
    LogoSource: string;
    LogoText: string;
    textShadow: boolean;
    shadowStrength: number;
    overlayOpacity: number;

    music: Array<string>;
    volume: number;

    socials: {
        youtube: string;
        tiktok: string;
        instagram: string;
        twitter: string;
        facebook: string;
    };

    tips: Array<string>;
    newsVersion: number,
    news: Array<string>;
    tipsTimer: number;
}

type KeyDefinition = {
  key: string;
  width: string;
  height: string;
  text: string;
  fontSize: string;
};

export type IKeyboard = {
  layout: Array<KeyDefinition>;
  keyInfo: {
    [key: string]: string;
  };
};