import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { personalInfo } from "@/data/personal-info";
import { Mail, MapPin, FileText, BookOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="联系我"
          description="有问题或合作意向？欢迎随时联系"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 space-y-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                联系方式
              </h3>

              <a
                href={`mailto:${personalInfo.social.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">邮箱</p>
                  <p className="text-sm font-medium">{personalInfo.social.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <FaGithub size={18} className="text-gray-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">GitHub</p>
                  <p className="text-sm font-medium">@wwwkki</p>
                </div>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <FaLinkedin size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">LinkedIn</p>
                  <p className="text-sm font-medium">@wwwkki</p>
                </div>
              </a>

              <a
                href={personalInfo.social.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <BookOpen size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">arXiv</p>
                  <p className="text-sm font-medium">预印本主页</p>
                </div>
              </a>

              <a
                href={personalInfo.social.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <FileText size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Google Scholar</p>
                  <p className="text-sm font-medium">学术主页</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <MapPin size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">所在地</p>
                  <p className="text-sm font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-6 rounded-2xl bg-white border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              发送消息
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
