# HotelInfoTypeGeneralInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelType** | Pointer to **string** | The type of the Hotel. | [optional] 
**RoomCount** | Pointer to **int32** | The total number of rooms in the Hotel. | [optional] 
**BedCount** | Pointer to **int32** | The total number of beds in the Hotel. | [optional] 
**FloorCount** | Pointer to **int32** | The total number of floors of the Hotel. | [optional] 
**CheckInTime** | Pointer to **string** | The official check in time of the Hotel. | [optional] 
**CheckOutTime** | Pointer to **string** | The official check out time of the Hotel. | [optional] 
**HotelInfoWebsite** | Pointer to [**URLType**](URLType.md) |  | [optional] 
**Longitude** | Pointer to **float32** | Longitude of the hotel. | [optional] 
**Latitude** | Pointer to **float32** | Latitude of the hotel. | [optional] 
**BaseLanguage** | Pointer to **string** |  | [optional] 

## Methods

### NewHotelInfoTypeGeneralInformation

`func NewHotelInfoTypeGeneralInformation() *HotelInfoTypeGeneralInformation`

NewHotelInfoTypeGeneralInformation instantiates a new HotelInfoTypeGeneralInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInfoTypeGeneralInformationWithDefaults

`func NewHotelInfoTypeGeneralInformationWithDefaults() *HotelInfoTypeGeneralInformation`

NewHotelInfoTypeGeneralInformationWithDefaults instantiates a new HotelInfoTypeGeneralInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelType

`func (o *HotelInfoTypeGeneralInformation) GetHotelType() string`

GetHotelType returns the HotelType field if non-nil, zero value otherwise.

### GetHotelTypeOk

`func (o *HotelInfoTypeGeneralInformation) GetHotelTypeOk() (*string, bool)`

GetHotelTypeOk returns a tuple with the HotelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelType

`func (o *HotelInfoTypeGeneralInformation) SetHotelType(v string)`

SetHotelType sets HotelType field to given value.

### HasHotelType

`func (o *HotelInfoTypeGeneralInformation) HasHotelType() bool`

HasHotelType returns a boolean if a field has been set.

### GetRoomCount

`func (o *HotelInfoTypeGeneralInformation) GetRoomCount() int32`

GetRoomCount returns the RoomCount field if non-nil, zero value otherwise.

### GetRoomCountOk

`func (o *HotelInfoTypeGeneralInformation) GetRoomCountOk() (*int32, bool)`

GetRoomCountOk returns a tuple with the RoomCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCount

`func (o *HotelInfoTypeGeneralInformation) SetRoomCount(v int32)`

SetRoomCount sets RoomCount field to given value.

### HasRoomCount

`func (o *HotelInfoTypeGeneralInformation) HasRoomCount() bool`

HasRoomCount returns a boolean if a field has been set.

### GetBedCount

`func (o *HotelInfoTypeGeneralInformation) GetBedCount() int32`

GetBedCount returns the BedCount field if non-nil, zero value otherwise.

### GetBedCountOk

`func (o *HotelInfoTypeGeneralInformation) GetBedCountOk() (*int32, bool)`

GetBedCountOk returns a tuple with the BedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedCount

`func (o *HotelInfoTypeGeneralInformation) SetBedCount(v int32)`

SetBedCount sets BedCount field to given value.

### HasBedCount

`func (o *HotelInfoTypeGeneralInformation) HasBedCount() bool`

HasBedCount returns a boolean if a field has been set.

### GetFloorCount

`func (o *HotelInfoTypeGeneralInformation) GetFloorCount() int32`

GetFloorCount returns the FloorCount field if non-nil, zero value otherwise.

### GetFloorCountOk

`func (o *HotelInfoTypeGeneralInformation) GetFloorCountOk() (*int32, bool)`

GetFloorCountOk returns a tuple with the FloorCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorCount

`func (o *HotelInfoTypeGeneralInformation) SetFloorCount(v int32)`

SetFloorCount sets FloorCount field to given value.

### HasFloorCount

`func (o *HotelInfoTypeGeneralInformation) HasFloorCount() bool`

HasFloorCount returns a boolean if a field has been set.

### GetCheckInTime

`func (o *HotelInfoTypeGeneralInformation) GetCheckInTime() string`

GetCheckInTime returns the CheckInTime field if non-nil, zero value otherwise.

### GetCheckInTimeOk

`func (o *HotelInfoTypeGeneralInformation) GetCheckInTimeOk() (*string, bool)`

GetCheckInTimeOk returns a tuple with the CheckInTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInTime

`func (o *HotelInfoTypeGeneralInformation) SetCheckInTime(v string)`

SetCheckInTime sets CheckInTime field to given value.

### HasCheckInTime

`func (o *HotelInfoTypeGeneralInformation) HasCheckInTime() bool`

HasCheckInTime returns a boolean if a field has been set.

### GetCheckOutTime

`func (o *HotelInfoTypeGeneralInformation) GetCheckOutTime() string`

GetCheckOutTime returns the CheckOutTime field if non-nil, zero value otherwise.

### GetCheckOutTimeOk

`func (o *HotelInfoTypeGeneralInformation) GetCheckOutTimeOk() (*string, bool)`

GetCheckOutTimeOk returns a tuple with the CheckOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutTime

`func (o *HotelInfoTypeGeneralInformation) SetCheckOutTime(v string)`

SetCheckOutTime sets CheckOutTime field to given value.

### HasCheckOutTime

`func (o *HotelInfoTypeGeneralInformation) HasCheckOutTime() bool`

HasCheckOutTime returns a boolean if a field has been set.

### GetHotelInfoWebsite

`func (o *HotelInfoTypeGeneralInformation) GetHotelInfoWebsite() URLType`

GetHotelInfoWebsite returns the HotelInfoWebsite field if non-nil, zero value otherwise.

### GetHotelInfoWebsiteOk

`func (o *HotelInfoTypeGeneralInformation) GetHotelInfoWebsiteOk() (*URLType, bool)`

GetHotelInfoWebsiteOk returns a tuple with the HotelInfoWebsite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInfoWebsite

`func (o *HotelInfoTypeGeneralInformation) SetHotelInfoWebsite(v URLType)`

SetHotelInfoWebsite sets HotelInfoWebsite field to given value.

### HasHotelInfoWebsite

`func (o *HotelInfoTypeGeneralInformation) HasHotelInfoWebsite() bool`

HasHotelInfoWebsite returns a boolean if a field has been set.

### GetLongitude

`func (o *HotelInfoTypeGeneralInformation) GetLongitude() float32`

GetLongitude returns the Longitude field if non-nil, zero value otherwise.

### GetLongitudeOk

`func (o *HotelInfoTypeGeneralInformation) GetLongitudeOk() (*float32, bool)`

GetLongitudeOk returns a tuple with the Longitude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongitude

`func (o *HotelInfoTypeGeneralInformation) SetLongitude(v float32)`

SetLongitude sets Longitude field to given value.

### HasLongitude

`func (o *HotelInfoTypeGeneralInformation) HasLongitude() bool`

HasLongitude returns a boolean if a field has been set.

### GetLatitude

`func (o *HotelInfoTypeGeneralInformation) GetLatitude() float32`

GetLatitude returns the Latitude field if non-nil, zero value otherwise.

### GetLatitudeOk

`func (o *HotelInfoTypeGeneralInformation) GetLatitudeOk() (*float32, bool)`

GetLatitudeOk returns a tuple with the Latitude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatitude

`func (o *HotelInfoTypeGeneralInformation) SetLatitude(v float32)`

SetLatitude sets Latitude field to given value.

### HasLatitude

`func (o *HotelInfoTypeGeneralInformation) HasLatitude() bool`

HasLatitude returns a boolean if a field has been set.

### GetBaseLanguage

`func (o *HotelInfoTypeGeneralInformation) GetBaseLanguage() string`

GetBaseLanguage returns the BaseLanguage field if non-nil, zero value otherwise.

### GetBaseLanguageOk

`func (o *HotelInfoTypeGeneralInformation) GetBaseLanguageOk() (*string, bool)`

GetBaseLanguageOk returns a tuple with the BaseLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseLanguage

`func (o *HotelInfoTypeGeneralInformation) SetBaseLanguage(v string)`

SetBaseLanguage sets BaseLanguage field to given value.

### HasBaseLanguage

`func (o *HotelInfoTypeGeneralInformation) HasBaseLanguage() bool`

HasBaseLanguage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


