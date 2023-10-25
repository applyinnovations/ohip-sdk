# RateSeasonType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the rate season. | [optional] 
**HotelId** | Pointer to **string** | Hotel code that the rate season belongs to. | [optional] 
**ReservedForRateCode** | Pointer to **string** | Rate code associated with the rate season. When a rate code is provided, the season code is reserved exclusively for this rate code and cannot be used in other rate codes. | [optional] 
**SeasonCode** | Pointer to **string** | Season code to identify the rate season. | [optional] 

## Methods

### NewRateSeasonType

`func NewRateSeasonType() *RateSeasonType`

NewRateSeasonType instantiates a new RateSeasonType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateSeasonTypeWithDefaults

`func NewRateSeasonTypeWithDefaults() *RateSeasonType`

NewRateSeasonTypeWithDefaults instantiates a new RateSeasonType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateRange

`func (o *RateSeasonType) GetDateRange() TimeSpanType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *RateSeasonType) GetDateRangeOk() (*TimeSpanType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *RateSeasonType) SetDateRange(v TimeSpanType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *RateSeasonType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetDescription

`func (o *RateSeasonType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RateSeasonType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RateSeasonType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RateSeasonType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *RateSeasonType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RateSeasonType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RateSeasonType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RateSeasonType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservedForRateCode

`func (o *RateSeasonType) GetReservedForRateCode() string`

GetReservedForRateCode returns the ReservedForRateCode field if non-nil, zero value otherwise.

### GetReservedForRateCodeOk

`func (o *RateSeasonType) GetReservedForRateCodeOk() (*string, bool)`

GetReservedForRateCodeOk returns a tuple with the ReservedForRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservedForRateCode

`func (o *RateSeasonType) SetReservedForRateCode(v string)`

SetReservedForRateCode sets ReservedForRateCode field to given value.

### HasReservedForRateCode

`func (o *RateSeasonType) HasReservedForRateCode() bool`

HasReservedForRateCode returns a boolean if a field has been set.

### GetSeasonCode

`func (o *RateSeasonType) GetSeasonCode() string`

GetSeasonCode returns the SeasonCode field if non-nil, zero value otherwise.

### GetSeasonCodeOk

`func (o *RateSeasonType) GetSeasonCodeOk() (*string, bool)`

GetSeasonCodeOk returns a tuple with the SeasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeasonCode

`func (o *RateSeasonType) SetSeasonCode(v string)`

SetSeasonCode sets SeasonCode field to given value.

### HasSeasonCode

`func (o *RateSeasonType) HasSeasonCode() bool`

HasSeasonCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


