import { prisma } from "./prisma";

interface GeolocationData {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

interface IPData {
  ip: string;
}

export class GeolocationService {
  static async getCityIP(): Promise<string | null> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: IPData = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Erro ao obter IP do usuário:", error);
      return null;
    }
  }

  static async getLocationByIP(ip: string): Promise<GeolocationData | null> {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: GeolocationData = await response.json();

      if (data.status === "success") {
        return data;
      } else {
        console.warn("API retornou status de falha:", data);
        return null;
      }
    } catch (error) {
      console.error("Erro ao obter dados de geolocalização:", error);
      return null;
    }
  }

  static async saveLocation(cityIp: string, location: GeolocationData | null) {
    try {
      if (!location) {
        console.warn("Dados de geolocalização inválidos:", location);
        return null;
      }

      const foundRegion = await prisma.analytics.findUnique({
        where: { region: location.city },
      });

      if (foundRegion) {
        console.log("Região já existe no banco de dados:", location.city);
        return;
      }

      await prisma.analytics.create({
        data: {
          cityIp: cityIp,
          country: location.country,
          state: location?.regionName,
          region: location?.city,
        },
      });
      return location;
    } catch (error) {
      console.error("Erro ao salvar dados de geolocalização:", error);
      return null;
    }
  }
}
