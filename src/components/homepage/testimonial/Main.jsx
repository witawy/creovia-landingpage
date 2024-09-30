import StatBox from "./StatboxCSR"
import NoScriptStatBox from "./StatboxSSR"

export const stats = {
  users: "2000+",
  schools: "30+",
  students: "25,000"
}


export default function Home() {
  return (
      <div id="testimonial" className="flex flex-col items-center">
        <h4 className="text-primary-600 py-2">The Creovia Difference</h4>
        <h2 className="text-5xl font-bold py-6">30 schools, 30 success stories</h2>
        <p className="py-2">See how our software is shaping the way schools educate, engage, and excel</p>
        <div className="py-8">
          <StatBox stats={stats}/>
          <noscript>
            <NoScriptStatBox stats={stats}/>
          </noscript>
        </div>
      </div>
  );
}