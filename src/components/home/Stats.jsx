import { useEffect, useRef, useState } from "react";
import { Users, Award, HeartPulse, Star } from "lucide-react";

const stats = [
  {
    icon: <Award size={34} />,
    label: "Years of Experience",
    end: 20,
    suffix: "+",
  },
  {
    icon: <Users size={34} />,
    label: "Happy Patients",
    end: 50000,
    suffix: "+",
  },
  {
    icon: <HeartPulse size={34} />,
    label: "Conditions Treated",
    end: 50,
    suffix: "+",
  },
  {
    icon: <Star size={34} />,
    label: "Patient Rating",
    end: 4.9,
    suffix: "/5",
    decimals: 1,
  },
];

function Counter({
  end,
  suffix = "",
  decimals = 0,
  startAnimation,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startAnimation, end]);

  return (
    <>
      {decimals
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString()}
      {suffix}
    </>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <div className="text-emerald-600 flex justify-center mb-5">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              <Counter
                end={item.end}
                suffix={item.suffix}
                decimals={item.decimals || 0}
                startAnimation={animate}
              />
            </h2>

            <p className="text-gray-500 mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}