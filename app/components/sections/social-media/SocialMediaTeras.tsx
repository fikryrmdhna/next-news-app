import FacebookIcon from "@/app/components/icons/Facebook";
import TwitterIcon from "@/app/components/icons/Twitter";
import InstagramIcon from "@/app/components/icons/Instagram";
import TelegramIcon from "@/app/components/icons/Telegram";
import TikTokIcon from "@/app/components/icons/TikTok";

export default function SocialMediaTeras() {
  const socialLinks = {
    facebook: 'https://facebook.com/news.id',
    twitter: 'https://twitter.com/news_id',
    instagram: 'https://instagram.com/news.id',
    telegram: 'https://t.me/newsid',
    tiktok: 'https://tiktok.com/@news.id',
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Ikuti News.id:</span>
      <div className="flex gap-2">
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="News.id di Facebook"
        >
          <FacebookIcon size={16} />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
          aria-label="News.id di Twitter"
        >
          <TwitterIcon size={16} />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
          aria-label="News.id di Instagram"
        >
          <InstagramIcon size={16} />
        </a>
        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          aria-label="News.id di Telegram"
        >
          <TelegramIcon size={16} />
        </a>
        <a
          href={socialLinks.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          aria-label="News.id di TikTok"
        >
          <TikTokIcon size={16} />
        </a>
      </div>
    </div>
  );
}
