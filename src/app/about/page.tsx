import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data/personal-info";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="关于我"
          description="了解我的背景、经历和技能"
        />

        {/* Avatar & basic info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 p-8 rounded-2xl bg-white border border-gray-100">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
            {personalInfo.name.charAt(0)}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {personalInfo.name}
            </h1>
            <p className="text-gray-500 mb-3">{personalInfo.title}</p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400 mb-4">
              <MapPin size={14} />
              {personalInfo.location}
            </div>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              {personalInfo.bio}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.social.email}`}
                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={20} className="text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">教育背景</h2>
            </div>
            <div className="space-y-6">
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-blue-100">
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[5px]" />
                  <span className="text-xs text-blue-600 font-medium">
                    {edu.period}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-0.5">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-500">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={20} className="text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">工作经历</h2>
            </div>
            <div className="space-y-6">
              {personalInfo.experience.map((exp, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-purple-100">
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-purple-500 -translate-x-[5px]" />
                  <span className="text-xs text-purple-600 font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
