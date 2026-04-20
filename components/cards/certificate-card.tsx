'use client';

import { Certificate } from '@/types';
import { ExternalLink, Award, Calendar, Building2 } from 'lucide-react';
import Link from 'next/link';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative p-6 sm:p-8">
        {/* Icon with hover effect */}
        <div className="mb-4 flex items-start justify-between">
          <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
            <Award className="w-6 h-6 text-[#7cff92]" />
          </div>
          {certificate.url && (
            <Link
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#7cff92]/60 hover:text-[#7cff92] hover:bg-[#7cff92]/10 transition-all duration-200 opacity-0 group-hover:opacity-100"
              title="View Certificate"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
          {certificate.title}
        </h3>

        {/* Organization */}
        <div className="flex items-center gap-2 mb-4">
          <Building2 size={16} className="text-muted-foreground group-hover:text-[#7cff92] transition-colors duration-200" />
          <p className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200">
            {certificate.organization}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={16} className="text-muted-foreground group-hover:text-[#7cff92] transition-colors duration-200" />
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
            {certificate.date}
          </p>
        </div>

        {/* CTA Button */}
        {certificate.url && (
          <Link
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-background bg-[#7cff92] rounded-lg hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all duration-200 group-hover:scale-105"
          >
            <span>View Certificate</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        )}

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
}
