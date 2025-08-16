import { Shield, Target, FileText, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

const testingTypes = [
  'Web Application Testing',
  'API Security Assessment',
  'External/Internal Network',
  'Cloud Configuration Review',
  'Social Engineering (by agreement)',
  'Mobile Application Testing'
];

const methodology = [
  { step: 'Scoping & ROE', desc: 'Define targets and rules of engagement', icon: Target },
  { step: 'Reconnaissance', desc: 'Information gathering and enumeration', icon: Target },
  { step: 'Exploitation', desc: 'Vulnerability validation and impact assessment', icon: AlertTriangle },
  { step: 'Post-Exploitation', desc: 'Privilege escalation and lateral movement', icon: Shield },
  { step: 'Reporting', desc: 'Risk-rated findings with remediation steps', icon: FileText },
  { step: 'Retest', desc: 'Validation of implemented fixes', icon: CheckCircle }
];

const tools = [
  'Burp Suite Pro',
  'Nmap',
  'sqlmap',
  'nuclei',
  'ffuf',
  'BloodHound',
  'CrackMapExec',
  'Kiterunner',
  'kube-bench',
  'Custom scripts'
];

const deliverables = [
  'Executive summary with risk overview',
  'Technical findings with CVSS scoring',
  'Proof-of-concept exploitation steps',
  'MITRE ATT&CK technique mapping',
  'Prioritized remediation roadmap',
  'Compliance gap analysis (if applicable)',
  'Retest validation letter'
];

export function PenetrationTestingService() {
  return (
    <section id="penetration-testing" className="section bg-[#101826]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <Shield className="inline h-10 w-10 text-[#A78BFA] mr-4" />
            Penetration Testing
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Web, API, cloud & network. MITRE ATT&CK mapping, retests, executive & technical reports.
          </p>
        </div>

        {/* Testing Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#A78BFA]">Testing Types</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {testingTypes.map((type, index) => (
                <div key={index} className="p-3 bg-[#0B1220] rounded-lg border border-gray-700 hover:border-[#A78BFA] transition-colors duration-200">
                  <div className="w-2 h-2 bg-[#A78BFA] rounded-full mb-2"></div>
                  <span className="text-gray-300 text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#22C55E]">Tooling</h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center p-2 bg-[#0B1220] rounded border border-gray-700">
                  <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm font-mono">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Testing Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection line for desktop */}
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-gradient-to-r from-[#66E3FF] to-[#A78BFA] z-0"></div>
                  )}
                  
                  <div className="card relative z-10 text-center hover:scale-105 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-full bg-[#66E3FF]/10 border border-[#66E3FF]/20 mb-4">
                      <Icon className="h-6 w-6 text-[#66E3FF]" />
                    </div>
                    
                    <h4 className="font-bold text-white mb-2">{phase.step}</h4>
                    <p className="text-sm text-gray-400">{phase.desc}</p>
                    
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#A78BFA] text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deliverables */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Report Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-[#0B1220] rounded-lg border border-gray-700">
                <FileText className="h-5 w-5 text-[#A78BFA] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Compliance Note */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-900/20 to-yellow-900/20 border border-red-700/50 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-400 mb-1">Legal Requirements</h4>
                <p className="text-sm text-gray-300">
                  All testing requires written authorization and follows strict Rules of Engagement. 
                  Safe-testing practices ensure no disruption to production systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}