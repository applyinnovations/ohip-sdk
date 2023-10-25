# SearchPropertyRequestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Corporate ID | [optional] 
**ArrivalDate** | **string** | Arrival/Check-in Date | 
**DepartureDate** | **string** | Departure/Check-out Date | 
**HotelIds** | Pointer to **[]string** | List of hotelIds for search criteria. | [optional] 
**IncludePublicRates** | Pointer to **bool** |  | [optional] [default to false]
**Limit** | Pointer to **int32** | number of records to be fetched in one request | [optional] 
**MinRate** | Pointer to **float32** | Minimum base rate in an offer | [optional] 
**Offset** | Pointer to **int32** | offset of record | [optional] 
**Rooms** | Pointer to [**[]SearchRoomClassificationType**](SearchRoomClassificationType.md) |  | [optional] 
**SortBy** | Pointer to [**SortByType**](SortByType.md) |  | [optional] [default to SORTBYTYPE_NONE]

## Methods

### NewSearchPropertyRequestType

`func NewSearchPropertyRequestType(arrivalDate string, departureDate string, ) *SearchPropertyRequestType`

NewSearchPropertyRequestType instantiates a new SearchPropertyRequestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchPropertyRequestTypeWithDefaults

`func NewSearchPropertyRequestTypeWithDefaults() *SearchPropertyRequestType`

NewSearchPropertyRequestTypeWithDefaults instantiates a new SearchPropertyRequestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *SearchPropertyRequestType) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *SearchPropertyRequestType) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *SearchPropertyRequestType) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *SearchPropertyRequestType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetArrivalDate

`func (o *SearchPropertyRequestType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *SearchPropertyRequestType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *SearchPropertyRequestType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.


### GetDepartureDate

`func (o *SearchPropertyRequestType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *SearchPropertyRequestType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *SearchPropertyRequestType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.


### GetHotelIds

`func (o *SearchPropertyRequestType) GetHotelIds() []string`

GetHotelIds returns the HotelIds field if non-nil, zero value otherwise.

### GetHotelIdsOk

`func (o *SearchPropertyRequestType) GetHotelIdsOk() (*[]string, bool)`

GetHotelIdsOk returns a tuple with the HotelIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelIds

`func (o *SearchPropertyRequestType) SetHotelIds(v []string)`

SetHotelIds sets HotelIds field to given value.

### HasHotelIds

`func (o *SearchPropertyRequestType) HasHotelIds() bool`

HasHotelIds returns a boolean if a field has been set.

### GetIncludePublicRates

`func (o *SearchPropertyRequestType) GetIncludePublicRates() bool`

GetIncludePublicRates returns the IncludePublicRates field if non-nil, zero value otherwise.

### GetIncludePublicRatesOk

`func (o *SearchPropertyRequestType) GetIncludePublicRatesOk() (*bool, bool)`

GetIncludePublicRatesOk returns a tuple with the IncludePublicRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludePublicRates

`func (o *SearchPropertyRequestType) SetIncludePublicRates(v bool)`

SetIncludePublicRates sets IncludePublicRates field to given value.

### HasIncludePublicRates

`func (o *SearchPropertyRequestType) HasIncludePublicRates() bool`

HasIncludePublicRates returns a boolean if a field has been set.

### GetLimit

`func (o *SearchPropertyRequestType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *SearchPropertyRequestType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *SearchPropertyRequestType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *SearchPropertyRequestType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetMinRate

`func (o *SearchPropertyRequestType) GetMinRate() float32`

GetMinRate returns the MinRate field if non-nil, zero value otherwise.

### GetMinRateOk

`func (o *SearchPropertyRequestType) GetMinRateOk() (*float32, bool)`

GetMinRateOk returns a tuple with the MinRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinRate

`func (o *SearchPropertyRequestType) SetMinRate(v float32)`

SetMinRate sets MinRate field to given value.

### HasMinRate

`func (o *SearchPropertyRequestType) HasMinRate() bool`

HasMinRate returns a boolean if a field has been set.

### GetOffset

`func (o *SearchPropertyRequestType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *SearchPropertyRequestType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *SearchPropertyRequestType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *SearchPropertyRequestType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRooms

`func (o *SearchPropertyRequestType) GetRooms() []SearchRoomClassificationType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *SearchPropertyRequestType) GetRoomsOk() (*[]SearchRoomClassificationType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *SearchPropertyRequestType) SetRooms(v []SearchRoomClassificationType)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *SearchPropertyRequestType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetSortBy

`func (o *SearchPropertyRequestType) GetSortBy() SortByType`

GetSortBy returns the SortBy field if non-nil, zero value otherwise.

### GetSortByOk

`func (o *SearchPropertyRequestType) GetSortByOk() (*SortByType, bool)`

GetSortByOk returns a tuple with the SortBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSortBy

`func (o *SearchPropertyRequestType) SetSortBy(v SortByType)`

SetSortBy sets SortBy field to given value.

### HasSortBy

`func (o *SearchPropertyRequestType) HasSortBy() bool`

HasSortBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


