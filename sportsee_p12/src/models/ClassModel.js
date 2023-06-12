export default class ClassModel {
	
    formatData(data) {
        const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        const formattedData = data.sessions.map((session, index) => ({
        day: weekDays[index],
        sessionLength: session.sessionLength,
        }))
        return formattedData;
    }

    formatPerf(data) {
        const frenchLabel = {
            intensity: 'Intensité',
            speed: 'Vitesse',
            cardio: 'Cardio',
            endurance: 'Endurance',
            strength: 'Force',
            energy: 'Energie',
            };
        return data.data.map((e) => ({
            subject: frenchLabel[data.kind[e.kind]],
            value: e.value,
        }));
    }

      formatDaily(data) {
        return data.sessions.map((e, i) => ({
          day: i + 1,
          date: e.day,
          weight: e.kilogram,
          cal: e.calories,
        }));
      }
}