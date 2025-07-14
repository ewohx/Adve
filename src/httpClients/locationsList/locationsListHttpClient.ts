import { mockLocationsList } from "./locationsListMock";

export async function GetLocationsListAsync() {
    // Здесь будет запрос к методу апи, чтобы запросить локацию с url'ом locationUrl
    
    return Promise.resolve({ data: mockLocationsList });
}