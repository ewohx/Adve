import { mockLocationData } from './locationMocks';
import { mockBashniJegikalIVovnushkiData } from './locations/BashniJegikalIVovnushki';
import { mockBogdanovichskieKareryData } from './locations/BogdanovichskieKarery';
import { mockBolshojjTachData } from './locations/BolshojjTach';
import { mockBuxtaNovikData } from './locations/BuxtaNovik';
import { mockDivnogoreData } from './locations/Divnogore';
import { mockDolinaGejjzerovData } from './locations/DolinaGejjzerov';
import { mockDolinaSmertiData } from './locations/DolinaSmerti';
import { mockGamsutlData } from './locations/Gamsutl';
import { mockGoraBolshoeBogdoData } from './locations/GoraBolshoeBogdo';
import { mockGoraJelbrusData } from './locations/GoraJelbrus';
import { mockGorodMertvyxData } from './locations/GorodMertvyx';
import { mockKafedralnyjjSoborData } from './locations/KafedralnyjjSobor';
import { mockKaljazinskajaZatoplennajaKolokolnjaData } from './locations/KaljazinskajaZatoplennajaKolokolnja';
import { mockKamennyeRekiData } from './locations/KamennyeReki';
import { mockKazanskijjKremlData } from './locations/KazanskijjKreml';
import { mockKrasnajaPloshhadData } from './locations/KrasnajaPloshhad';
import { mockKrasnajaPoljanaData } from './locations/KrasnajaPoljana';
import { mockKrepostNarynKalaData } from './locations/KrepostNarynKala';
import { mockKronockijjZapovednikData } from './locations/KronockijjZapovednik';
import { mockKubanskieLotosovyePoljaData } from './locations/KubanskieLotosovyePolja';
import { mockKungurskajaPeshheraData } from './locations/KungurskajaPeshhera';
import { mockKurilskijjPrirodnyjjZapovednikData } from './locations/KurilskijjPrirodnyjjZapovednik';
import { mockKurshskajaKosaData } from './locations/KurshskajaKosa';
import { mockKurshskajaKosaLitvaData } from './locations/KurshskajaKosaLitva';
import { mockLavandovyePoljaData } from './locations/LavandovyePolja';
import { mockLotosovyePoljaData } from './locations/LotosovyePolja';
import { mockPrimorskijjOkeanariumData } from './locations/PrimorskijjOkeanarium';
import { mockVulkanyKamchatkiData } from './locations/VulkanyKamchatki';
import { mockZemljaFrancaIosifaData } from './locations/ZemljaFrancaIosifa';
import { mockZolotoeKolcoData } from './locations/ZolotoeKolco';

export async function GetLocationInfoAsync(locationUrl: string) {
	// Здесь будет запрос к методу апи, чтобы запросить локацию с url'ом locationUrl
	console.log(`GET ${locationUrl}`);

	if (locationUrl === 'VantovyeMosty') {
		return Promise.resolve({ data: mockLocationData });
	}

	if (locationUrl === 'BashniJegikalIVovnushki') {
		return Promise.resolve({ data: mockBashniJegikalIVovnushkiData });
	}

	if (locationUrl === 'BogdanovichskieKarery') {
		return Promise.resolve({ data: mockBogdanovichskieKareryData });
	}

	if (locationUrl === 'BolshojjTach') {
		return Promise.resolve({ data: mockBolshojjTachData });
	}

	if (locationUrl === 'BuxtaNovik') {
		return Promise.resolve({ data: mockBuxtaNovikData });
	}

	if (locationUrl === 'Divnogore') {
		return Promise.resolve({ data: mockDivnogoreData });
	}

	if (locationUrl === 'DolinaGejjzerov') {
		return Promise.resolve({ data: mockDolinaGejjzerovData });
	}

	if (locationUrl === 'DolinaSmerti') {
		return Promise.resolve({ data: mockDolinaSmertiData });
	}

	if (locationUrl === 'Gamsutl') {
		return Promise.resolve({ data: mockGamsutlData });
	}

	if (locationUrl === 'GoraBolshoeBogdo') {
		return Promise.resolve({ data: mockGoraBolshoeBogdoData });
	}

	if (locationUrl === 'GoraJelbrus') {
		return Promise.resolve({ data: mockGoraJelbrusData });
	}

	if (locationUrl === 'GorodMertvyx') {
		return Promise.resolve({ data: mockGorodMertvyxData });
	}

	if (locationUrl === 'KamennyeReki') {
		return Promise.resolve({ data: mockKamennyeRekiData });
	}

	if (locationUrl === 'LotosovyePolja') {
		return Promise.resolve({ data: mockLotosovyePoljaData });
	}

	if (locationUrl === 'VulkanyKamchatki') {
		return Promise.resolve({ data: mockVulkanyKamchatkiData });
	}

	if (locationUrl === 'ZemljaFrancaIosifa') {
		return Promise.resolve({ data: mockZemljaFrancaIosifaData });
	}

	if (locationUrl === 'KazanskijjKreml') {
		return Promise.resolve({ data: mockKazanskijjKremlData });
	}

	if (locationUrl === 'KaljazinskajaZatoplennajaKolokolnja') {
		return Promise.resolve({
			data: mockKaljazinskajaZatoplennajaKolokolnjaData,
		});
	}

	if (locationUrl === 'KafedralnyjjSobor') {
		return Promise.resolve({ data: mockKafedralnyjjSoborData });
	}

	if (locationUrl === 'KrasnajaPloshhad') {
		return Promise.resolve({ data: mockKrasnajaPloshhadData });
	}

	if (locationUrl === 'KronockijjZapovednik') {
		return Promise.resolve({ data: mockKronockijjZapovednikData });
	}

	if (locationUrl === 'KurilskijjPrirodnyjjZapovednik') {
		return Promise.resolve({ data: mockKurilskijjPrirodnyjjZapovednikData });
	}

	if (locationUrl === 'PrimorskijjOkeanarium') {
		return Promise.resolve({ data: mockPrimorskijjOkeanariumData });
	}

	if (locationUrl === 'KrasnajaPoljana') {
		return Promise.resolve({ data: mockKrasnajaPoljanaData });
	}

	if (locationUrl === 'KrepostNarynKala') {
		return Promise.resolve({ data: mockKrepostNarynKalaData });
	}

	if (locationUrl === 'KungurskajaPeshhera') {
		return Promise.resolve({ data: mockKungurskajaPeshheraData });
	}

	if (locationUrl === 'LavandovyePolja') {
		return Promise.resolve({ data: mockLavandovyePoljaData });
	}

	if (locationUrl === 'KubanskieLotosovyePolja') {
		return Promise.resolve({ data: mockKubanskieLotosovyePoljaData });
	}

	if (locationUrl === 'KurshskajaKosa') {
		return Promise.resolve({ data: mockKurshskajaKosaData });
	}

	if (locationUrl === 'KurshskajaKosaLitva') {
		return Promise.resolve({ data: mockKurshskajaKosaLitvaData });
	}

	if (locationUrl === 'ZolotoeKolco') {
		return Promise.resolve({ data: mockZolotoeKolcoData });
	}

	return Promise.resolve({ data: null });
}
