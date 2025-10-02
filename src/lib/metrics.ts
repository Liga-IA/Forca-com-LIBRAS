
interface GameMetrics {
    data: Date; 
    total_played: number;
}

const setMetrics = () => {
    const currentMetrics = localStorage.getItem("gameMetrics");
    let metricsArray: GameMetrics[] = [];
    
    if (currentMetrics) {
        metricsArray = JSON.parse(currentMetrics);
        // Converter strings de data de volta para objetos Date
        metricsArray = metricsArray.map(metric => ({
            ...metric,
            data: new Date(metric.data)
        }));
    }
    
    const today = new Date();
    const todayString = today.toDateString();
    
    // Procurar se já existe uma entrada para hoje
    const todayMetricIndex = metricsArray.findIndex(
        metric => metric.data.toDateString() === todayString
    );
    
    if (todayMetricIndex !== -1) {
        // Se existe, incrementar o contador
        metricsArray[todayMetricIndex].total_played += 1;
    } else {
        // Se não existe, criar nova entrada
        metricsArray.push({
            data: today,
            total_played: 1
        });
    }
    
    localStorage.setItem("gameMetrics", JSON.stringify(metricsArray));
}

const getMetrics = (): GameMetrics[] => {
    const currentMetrics = localStorage.getItem("gameMetrics");
    if (currentMetrics) {
        const metricsArray = JSON.parse(currentMetrics);
        // Converter strings de data de volta para objetos Date
        return metricsArray.map((metric: GameMetrics) => ({
            ...metric,
            data: new Date(metric.data)
        }));
    }
    return [];
}

const getTotalGamesPlayed = (): number => {
    const metrics = getMetrics();
    return metrics.reduce((total, metric) => total + metric.total_played, 0);
}

const getTodayGamesPlayed = (): number => {
    const metrics = getMetrics();
    const today = new Date().toDateString();
    const todayMetric = metrics.find(metric => metric.data.toDateString() === today);
    return todayMetric ? todayMetric.total_played : 0;
}

export { getMetrics, getTodayGamesPlayed, getTotalGamesPlayed, setMetrics };

