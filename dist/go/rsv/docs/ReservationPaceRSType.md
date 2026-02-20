# ReservationPaceRSType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**BusinessDate** | Pointer to **string** |  | [optional] 
**DailyPaceStats** | Pointer to [**[]DailyPaceStatType**](DailyPaceStatType.md) | a collection of reservation pace statistics. | [optional] 

## Methods

### NewReservationPaceRSType

`func NewReservationPaceRSType() *ReservationPaceRSType`

NewReservationPaceRSType instantiates a new ReservationPaceRSType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationPaceRSTypeWithDefaults

`func NewReservationPaceRSTypeWithDefaults() *ReservationPaceRSType`

NewReservationPaceRSTypeWithDefaults instantiates a new ReservationPaceRSType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationPaceRSType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationPaceRSType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationPaceRSType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationPaceRSType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBusinessDate

`func (o *ReservationPaceRSType) GetBusinessDate() string`

GetBusinessDate returns the BusinessDate field if non-nil, zero value otherwise.

### GetBusinessDateOk

`func (o *ReservationPaceRSType) GetBusinessDateOk() (*string, bool)`

GetBusinessDateOk returns a tuple with the BusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessDate

`func (o *ReservationPaceRSType) SetBusinessDate(v string)`

SetBusinessDate sets BusinessDate field to given value.

### HasBusinessDate

`func (o *ReservationPaceRSType) HasBusinessDate() bool`

HasBusinessDate returns a boolean if a field has been set.

### GetDailyPaceStats

`func (o *ReservationPaceRSType) GetDailyPaceStats() []DailyPaceStatType`

GetDailyPaceStats returns the DailyPaceStats field if non-nil, zero value otherwise.

### GetDailyPaceStatsOk

`func (o *ReservationPaceRSType) GetDailyPaceStatsOk() (*[]DailyPaceStatType, bool)`

GetDailyPaceStatsOk returns a tuple with the DailyPaceStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyPaceStats

`func (o *ReservationPaceRSType) SetDailyPaceStats(v []DailyPaceStatType)`

SetDailyPaceStats sets DailyPaceStats field to given value.

### HasDailyPaceStats

`func (o *ReservationPaceRSType) HasDailyPaceStats() bool`

HasDailyPaceStats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


