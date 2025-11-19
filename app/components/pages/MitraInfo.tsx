import Image from "next/image";
import type { PartnerData } from "@/types/mitra";
import FacebookIcon from "../icons/Facebook";
import TwitterIcon from "../icons/Twitter";
import InstagramIcon from "../icons/Instagram";
import TelegramIcon from "../icons/Telegram";

interface MitraInfoProps {
  partner: PartnerData;
}

export default function MitraInfo({ partner }: MitraInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-start gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={partner.logo_url}
            alt={partner.name}
            width={120}
            height={120}
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#212121] mb-2">{partner.name}</h1>
          
          {partner.province_name && (
            <p className="text-gray-600 mb-3">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {partner.province_name}
              </span>
            </p>
          )}

          {partner.vision && (
            <p className="text-gray-700 mb-4">{partner.vision}</p>
          )}

          {partner.address && (
            <p className="text-sm text-gray-600 mb-4">
              <strong>Alamat:</strong> {partner.address}
            </p>
          )}

          {/* Social Media */}
          {partner.social_media && (
            <div className="flex gap-3">
              {partner.social_media.facebook && (
                <a
                  href={partner.social_media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
              )}
              {partner.social_media.twitter && (
                <a
                  href={partner.social_media.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon size={20} />
                </a>
              )}
              {partner.social_media.instagram && (
                <a
                  href={partner.social_media.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
              )}
              {partner.social_media.telegram && (
                <a
                  href={partner.social_media.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Telegram"
                >
                  <TelegramIcon size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Code of Ethics */}
      {partner.code_of_ethics && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-bold text-[#212121] mb-2">Kode Etik</h3>
          <p className="text-sm text-gray-700">{partner.code_of_ethics}</p>
        </div>
      )}
    </div>
  );
}
