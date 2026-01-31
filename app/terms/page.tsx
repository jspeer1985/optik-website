/**
 * Terms of Service Page
 */

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold optik-gradient-text mb-8">Terms of Service</h1>

        <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the OPTIK platform, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use OPTIK services for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
            <p className="mb-2">
              The materials on OPTIK's platform are provided on an 'as is' basis. OPTIK makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of intellectual property or
              other violation of rights.
            </p>
            <p className="font-semibold text-yellow-400">
              ⚠️ Cryptocurrency trading involves significant risk. Never invest more than you can
              afford to lose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
            <p>
              In no event shall OPTIK or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising
              out of the use or inability to use OPTIK's platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on OPTIK's platform could include technical, typographical, or
              photographic errors. OPTIK does not warrant that any of the materials on its platform
              are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of
              the jurisdiction in which OPTIK operates.
            </p>
          </section>

          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500">
              Last updated: 2026-01-31<br />
              For questions about these Terms, contact: legal@optik.io
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
