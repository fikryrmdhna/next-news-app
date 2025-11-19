import FacebookIcon from "@/app/components/icons/Facebook";
import TwitterIcon from "@/app/components/icons/Twitter";
import InstagramIcon from "@/app/components/icons/Instagram";
import TelegramIcon from "@/app/components/icons/Telegram";
import TikTokIcon from "@/app/components/icons/TikTok";

interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  telegram?: string;
  tiktok?: string;
}

interface SocialMediaMitraProps {
  socialMedia: SocialMediaLinks;
  partnerName: string;
}

export default function SocialMediaMitra({ socialMedia, partnerName }: SocialMediaMitraProps) {
  if (!socialMedia) return null;

  const hasAnySocial = Object.values(socialMedia).some(link => link);
  if (!hasAnySocial) return null;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">Ikuti kami:</span>
      <div className="flex gap-2">
        {socialMedia.facebook && (
          <a
            href={socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            aria-label={`${partnerName} di Facebook`}
          >
            <FacebookIcon size={16} />
          </a>
        )}
        {socialMedia.twitter && (
          <a
            href={socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
            aria-label={`${partnerName} di Twitter`}
          >
            <TwitterIcon size={16} />
          </a>
        )}
        {socialMedia.instagram && (
          <a
            href={socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            aria-label={`${partnerName} di Instagram`}
          >
            <InstagramIcon size={16} />
          </a>
        )}
        {socialMedia.telegram && (
          <a
            href={socialMedia.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            aria-label={`${partnerName} di Telegram`}
          >
            <TelegramIcon size={16} />
          </a>
        )}
        {socialMedia.tiktok && (
          <a
            href={socialMedia.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            aria-label={`${partnerName} di TikTok`}
          >
            <TikTokIcon size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
