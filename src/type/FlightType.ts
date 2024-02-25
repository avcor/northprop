export type flightApiResponse  = {
    data: {
      result: flightDataModel[];
    };
    message: string;
};

export type flightDataModel = {
    id: string;
    fare: number;
    displayData: {
      source: {
        airport: {
          cityCode: string;
          cityName: string;
          terminal: string;
          airportCode: string;
          airportName: string;
          countryCode: string;
          countryName: string;
        };
        depTime: string;
      };
      airlines: {
        airlineCode: string;
        airlineName: string;
        flightNumber: string;
      }[];
      stopInfo: string;
      destination: {
        airport: {
          cityCode: string;
          cityName: string;
          terminal: string;
          airportCode: string;
          airportName: string;
          countryCode: string;
          countryName: string;
        };
        arrTime: string;
      };
      totalDuration: string;
    };
  };