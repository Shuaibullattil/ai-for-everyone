import React from 'react';
import avatar1 from '../assets/avatar/1.svg';
import avatar2 from '../assets/avatar/2.svg';
import avatar3 from '../assets/avatar/3.svg';
import avatar4 from '../assets/avatar/4.svg';

const WhyAILiteracy = () => {
  const reasons = [
    {
      title: "Students are graduating without essential AI understanding.",
      description: "Many young people leave school without skills that will become foundational in future careers.",
      avatar: avatar1,
      bgColor: "bg-[#D9D9D9]",
      imagePosition: "right",
      avatarSize: { width: 200, height: 200 }, // Customize size
      avatarOffset: { x: 60, y: 47 } // Customize position (x: horizontal, y: vertical)
    },
    {
      title: "Automation is transforming jobs.",
      description: "Rapid workplace changes are putting young professionals and entry-level roles at risk.",
      avatar: avatar2,
      bgColor: "bg-[#ECECEC]",
      imagePosition: "left",
      avatarSize: { width: 200, height: 200 },
      avatarOffset: { x: -80, y: 47 }
    },
    {
      title: "Deepfakes, scams, and misinformation are rising.",
      description: "These disproportionately affect elders and vulnerable communities who need awareness and protection.",
      avatar: avatar3,
      bgColor: "bg-[#D9D9D9]",
      imagePosition: "right",
      avatarSize: { width: 190, height: 190 },
      avatarOffset: { x: -55, y: 10 }
    },
    {
      title: "Cultural identities can be misrepresented by biased AI.",
      description: "Without local datasets and creators, AI risks overlooking local languages, contexts, and values.",
      avatar: avatar4,
      bgColor: "bg-[#ECECEC]",
      imagePosition: "left",
      avatarSize: { width: 200, height: 200 },
      avatarOffset: { x: -60, y: -10 }
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Why Kerala Needs<br />AI Literacy Now
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Kerala pioneered digital literacy — and today, we have the same opportunity with AI. But new challenges demand a new kind of learning.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`${reason.bgColor} relative w-full max-w-3xl rounded-2xl overflow-visible`}
          >
            <div className="px-6 md:px-8 py-8 md:py-12 overflow-visible">
              <div className={`flex flex-col ${reason.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8 overflow-visible`}>
                {/* Text Content */}
                <div className={`flex-1 ${reason.imagePosition === 'right' ? 'md:pr-4' : 'md:pl-4'} z-10`}>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {reason.description}
                  </p>
                </div>

                {/* Avatar Image - positioned to overflow */}
                <div 
                  className="flex-shrink-0 z-20 relative"
                  style={{
                    transform: `translate(${reason.avatarOffset.x}px, ${reason.avatarOffset.y}px)`
                  }}
                >
                  <img
                    src={reason.avatar}
                    alt={`Avatar ${index + 1}`}
                    style={{
                      width: `${reason.avatarSize.width}px`,
                      height: `${reason.avatarSize.height}px`
                    }}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAILiteracy;