'use client';
import Image from 'next/image';
import {
  PhoneIcon,
  EyeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid'; // ✅ v2 path


export default function MissionVision() {
  return (
    <main className="bg-white text-slate-900 max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 font-['Inter']">
      <section className="max-w-xl flex flex-col gap-6">
        <a className="text-blue-600 text-sm font-normal leading-5" >
          Mission and Vision
        </a>

        <h1 className="text-3xl font-semibold leading-[1.2]">
          Discover Our Mission&apos;s
          <br />
          Inception, Vision
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Learn about the inspiring beginnings and enduring goals that drive our purpose and vision,
          which direct us toward patient-centered care and healthcare excellence.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 flex gap-12 max-w-md">
          {/* Mission */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <ChartBarIcon className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col text-sm text-slate-800">
              <span className="font-semibold">Our Mission</span>
              <span className="leading-tight">Leading care with caring service.</span>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <EyeIcon className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <div className="flex flex-col text-sm text-slate-800">
              <span className="font-semibold">Our Vision</span>
              <span className="leading-tight">Creating a healthy social future.</span>
            </div>
          </div>
        </div>

        {/* Doctor info + contact */}
        <div className="flex items-center gap-6 mt-6">
          <Image
            alt="Portrait of Dr. John Smith, Cardiologist"
            className="w-10 h-10 rounded-full object-cover"
            src="/images/home/doctorTeam.jpg"
            width={40}
            height={40}
          />
          <div className="flex flex-col text-sm text-slate-800">
            <span className="font-semibold text-base leading-tight">Dr. John Smith</span>
            <span className="leading-tight">Cardiologist</span>
          </div>

          <div className="flex items-center gap-4 ml-12">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-sm text-slate-600">
              <span>Call Anytime</span>
              <span className="font-semibold text-base text-slate-900 leading-tight">
                +44 45 7200 8200
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Right-side image */}
      <section>
        <Image
          alt="Medical professionals in hallway"
          className="rounded-2xl object-cover max-w-full h-auto"
          src="/images/home/doctorTeam.jpg"
          width={480}
          height={400}
        />
      </section>
    </main>
  );
}