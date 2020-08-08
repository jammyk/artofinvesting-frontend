// base names
export const stockPrice = 'historicStockPrice';
export const financialStatements = 'financialStatements';
export const metrics = 'metrics';
export const shares = 'shares';


// tooltips
export const stockPriceTooltip = stockPrice + 'Tooltip';
export const financialStatementsTooltip = financialStatements + 'Tooltip';
export const metricsTooltip = metrics + 'Tooltip';
export const sharesTooltip = shares + 'Tooltip';


// section names
export const stockPriceSection = stockPrice + 'Section';
export const financialStatementsSection = financialStatements + 'Section';
export const metricsSection = metrics + 'Section';
export const sharesSection = shares + 'Section';


// section id reference
export const stockPriceSectionHREF = '#' + stockPriceSection;
export const financialStatementsSectionHREF = '#' + financialStatementsSection;
export const metricsSectionHREF = '#' + metricsSection;
export const sharesSectionHREF = '#' + sharesSection;


// used to extract basenaem from section id
//  ** NOTE when changing section id / base name update this constant accordingly
export const classSectionCharDiffCount = -7;


export function getBaseNameFromSectionHREF(href) {
    return href.slice(1, classSectionCharDiffCount);
}


export function getSectionHREFFromBaseName(baseName) {
    return '#' + baseName + 'Section';
}

export function getTooltipFromBaseName(baseName) {
    return baseName + 'Tooltip';
}