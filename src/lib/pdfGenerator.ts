// PDF Report Generator for Investment Portfolio

import { jsPDF } from 'jspdf';
import { UserProfile, getRiskLabel, investmentGoals } from '@/types/profile';
import { PortfolioSummary, AIRecommendation } from '@/types/profile';
import { tadawulSectors } from '@/data/tadawulStocks';

export const generatePortfolioPDF = (profile: UserProfile, portfolio: PortfolioSummary): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let y = 20;
  
  // Helper functions
  const addTitle = (text: string, size: number = 16) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', 'bold');
    doc.text(text, margin, y);
    y += size / 2 + 4;
  };
  
  const addText = (text: string, size: number = 10, indent: number = 0) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2 - indent);
    doc.text(lines, margin + indent, y);
    y += lines.length * (size / 2 + 2);
  };
  
  const addLine = () => {
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };
  
  const checkPageBreak = (neededSpace: number = 40) => {
    if (y > 270 - neededSpace) {
      doc.addPage();
      y = 20;
    }
  };
  
  // ================== COVER PAGE ==================
  doc.setFillColor(30, 41, 59); // Dark blue
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AI-Powered Investment Report', margin, 35);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Tadawul Stock Exchange Analysis', margin, 48);
  
  y = 75;
  doc.setTextColor(0, 0, 0);
  
  // Report date
  addText(`Report Generated: ${new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}`, 10);
  y += 5;
  
  addLine();
  
  // ================== YOUR PROFILE ==================
  addTitle('Your Investment Profile', 16);
  y += 2;
  
  // Profile details box
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, pageWidth - margin * 2, 55, 3, 3, 'F');
  y += 10;
  
  const goalInfo = investmentGoals.find(g => g.value === profile.investmentGoal);
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Investment Capital:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`SAR ${profile.capital.toLocaleString()}`, margin + 60, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.text('Time Horizon:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  const horizonLabels: Record<string, string> = { short: 'Short (0-6 months)', medium: 'Medium (6-24 months)', long: 'Long (24+ months)' };
  doc.text(horizonLabels[profile.timeHorizon] || profile.timeHorizon, margin + 60, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.text('Risk Tolerance:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`${getRiskLabel(profile.riskTolerance)} (${profile.riskTolerance}%)`, margin + 60, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.text('Investment Goal:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`${goalInfo?.label || profile.investmentGoal}`, margin + 60, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.text('Max Per Stock:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`SAR ${profile.maxPricePerStock?.toLocaleString() || 'No limit'}`, margin + 60, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.text('Target ROI:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  doc.text(`${profile.desiredROI}% annually`, margin + 60, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.text('Preferred Sectors:', margin + 5, y);
  doc.setFont('helvetica', 'normal');
  const sectorNames = profile.preferredSectors
    .map(id => tadawulSectors.find(s => s.id === id)?.name || id)
    .slice(0, 3)
    .join(', ');
  doc.text(sectorNames || 'All sectors', margin + 60, y);
  
  y += 20;
  addLine();
  
  // ================== PORTFOLIO SUMMARY ==================
  addTitle('Portfolio Summary', 16);
  y += 2;
  
  // Summary metrics
  const summaryData = [
    { label: 'Total Investment', value: `SAR ${portfolio.totalInvestment.toLocaleString()}` },
    { label: 'Number of Stocks', value: portfolio.stockCount.toString() },
    { label: 'Expected Annual Return', value: `${portfolio.expectedAnnualReturn.toFixed(1)}%` },
    { label: 'Estimated Dividend Income', value: `SAR ${portfolio.dividendIncome.toLocaleString()} / year` },
    { label: 'Portfolio Risk Level', value: portfolio.riskLevel.charAt(0).toUpperCase() + portfolio.riskLevel.slice(1) },
  ];
  
  doc.setFillColor(236, 253, 245); // Light green
  doc.roundedRect(margin, y, pageWidth - margin * 2, 45, 3, 3, 'F');
  y += 8;
  
  summaryData.forEach((item, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = margin + 5 + (col * 85);
    const yPos = y + (row * 12);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 100, 100);
    doc.text(item.label, x, yPos);
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(item.value, x, yPos + 5);
  });
  
  y += 52;
  addLine();
  
  // ================== SECTOR ALLOCATION ==================
  addTitle('Sector Allocation', 14);
  y += 2;
  
  portfolio.sectorDiversification.forEach(({ sector, percentage }) => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${sector}:`, margin, y);
    
    // Draw bar
    const barWidth = (percentage / 100) * 100;
    doc.setFillColor(59, 130, 246);
    doc.roundedRect(margin + 50, y - 4, barWidth, 6, 1, 1, 'F');
    
    doc.text(`${percentage.toFixed(1)}%`, margin + 155, y);
    y += 10;
  });
  
  y += 5;
  addLine();
  
  // ================== STOCK RECOMMENDATIONS ==================
  checkPageBreak(60);
  addTitle('AI Stock Recommendations', 16);
  y += 5;
  
  portfolio.recommendations.forEach((rec, index) => {
    checkPageBreak(80);
    
    // Stock header
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 20, 3, 3, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}. ${rec.ticker} - ${rec.name}`, margin + 5, y + 8);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`SAR ${rec.price.toFixed(2)}`, pageWidth - margin - 25, y + 8);
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(rec.sector, margin + 5, y + 16);
    doc.setTextColor(0, 0, 0);
    
    y += 25;
    
    // Investment details
    doc.setFontSize(10);
    const details = [
      `AI Score: ${rec.aiScore}/100`,
      `Suggested Shares: ${rec.suggestedShares}`,
      `Investment: SAR ${rec.investmentAmount.toLocaleString()}`,
      `Allocation: ${rec.suggestedAllocation.toFixed(1)}%`,
      `Expected Return: ${rec.expectedReturn.toFixed(1)}%`,
      `Dividend Yield: ${rec.dividendYield?.toFixed(1) || 'N/A'}%`,
    ];
    
    doc.setFont('helvetica', 'bold');
    doc.text('Investment Details:', margin + 5, y);
    y += 6;
    
    details.forEach((detail, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(`• ${detail}`, margin + 5 + (col * 55), y + (row * 6));
    });
    
    y += 18;
    
    // Why AI picked this
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Why This Stock:', margin + 5, y);
    y += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    rec.reasoning.slice(0, 3).forEach(reason => {
      const lines = doc.splitTextToSize(`• ${reason}`, pageWidth - margin * 2 - 15);
      doc.text(lines, margin + 10, y);
      y += lines.length * 5;
    });
    
    y += 3;
    
    // Profile fit
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(59, 130, 246);
    const fitLines = doc.splitTextToSize(rec.profileFitExplanation, pageWidth - margin * 2 - 10);
    doc.text(fitLines, margin + 5, y);
    doc.setTextColor(0, 0, 0);
    y += fitLines.length * 5 + 5;
    
    // Risk analysis
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(220, 38, 38);
    doc.text('Risk Note:', margin + 5, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const riskLines = doc.splitTextToSize(rec.riskAnalysis, pageWidth - margin * 2 - 35);
    doc.text(riskLines, margin + 28, y);
    y += riskLines.length * 5 + 10;
    
    // Separator
    doc.setDrawColor(230, 230, 230);
    doc.line(margin + 20, y, pageWidth - margin - 20, y);
    y += 8;
  });
  
  // ================== DISCLAIMER ==================
  checkPageBreak(40);
  addLine();
  
  doc.setFillColor(254, 243, 199); // Light yellow
  doc.roundedRect(margin, y, pageWidth - margin * 2, 30, 3, 3, 'F');
  y += 8;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('Important Disclaimer:', margin + 5, y);
  y += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const disclaimer = 'This report is generated by AI for educational purposes only and does not constitute financial advice. Past performance does not guarantee future results. Always conduct your own research and consult with a qualified financial advisor before making investment decisions. The Saudi stock market involves risks including potential loss of principal.';
  const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - margin * 2 - 10);
  doc.text(disclaimerLines, margin + 5, y);
  
  // ================== FOOTER ==================
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Page ${i} of ${pageCount} | AI Investment Report | Generated on ${new Date().toLocaleDateString()}`,
      pageWidth / 2,
      290,
      { align: 'center' }
    );
  }
  
  // Save the PDF
  const filename = `Tadawul_Investment_Report_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);
};
