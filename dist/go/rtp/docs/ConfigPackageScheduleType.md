# ConfigPackageScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**SchedulePrices** | Pointer to [**[]HotelPackageSchedulePriceType**](HotelPackageSchedulePriceType.md) | Collection of price schedule for the package. | [optional] 
**RatePlanCode** | Pointer to **string** | The rate plan code specific prices for the package (if any). | [optional] 
**MinNights** | Pointer to **int32** | Minimum number of nights that are required on a reservation to avail the package. | [optional] 
**MaxNights** | Pointer to **int32** | Maximum number of nights that are required on a reservation to avail the package. | [optional] 
**MinPersons** | Pointer to **int32** | Minimum number of persons that are required on a reservation to avail the package. | [optional] 
**MaxPersons** | Pointer to **int32** | Maximum number of persons that are required on a reservation to avail the package. | [optional] 
**NewMinNights** | Pointer to **int32** | New minimum number of nights that are required on a reservation to avail the package. | [optional] 
**NewMaxNights** | Pointer to **int32** | New maximum number of nights that are required on a reservation to avail the package. | [optional] 
**NewMinPersons** | Pointer to **int32** | New minimum number of persons that are required on a reservation to avail the package. | [optional] 
**NewMaxPersons** | Pointer to **int32** | New maximum number of persons that are required on a reservation to avail the package. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 

## Methods

### NewConfigPackageScheduleType

`func NewConfigPackageScheduleType() *ConfigPackageScheduleType`

NewConfigPackageScheduleType instantiates a new ConfigPackageScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigPackageScheduleTypeWithDefaults

`func NewConfigPackageScheduleTypeWithDefaults() *ConfigPackageScheduleType`

NewConfigPackageScheduleTypeWithDefaults instantiates a new ConfigPackageScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewTimeSpan

`func (o *ConfigPackageScheduleType) GetNewTimeSpan() TimeSpanType`

GetNewTimeSpan returns the NewTimeSpan field if non-nil, zero value otherwise.

### GetNewTimeSpanOk

`func (o *ConfigPackageScheduleType) GetNewTimeSpanOk() (*TimeSpanType, bool)`

GetNewTimeSpanOk returns a tuple with the NewTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTimeSpan

`func (o *ConfigPackageScheduleType) SetNewTimeSpan(v TimeSpanType)`

SetNewTimeSpan sets NewTimeSpan field to given value.

### HasNewTimeSpan

`func (o *ConfigPackageScheduleType) HasNewTimeSpan() bool`

HasNewTimeSpan returns a boolean if a field has been set.

### GetSchedulePrices

`func (o *ConfigPackageScheduleType) GetSchedulePrices() []HotelPackageSchedulePriceType`

GetSchedulePrices returns the SchedulePrices field if non-nil, zero value otherwise.

### GetSchedulePricesOk

`func (o *ConfigPackageScheduleType) GetSchedulePricesOk() (*[]HotelPackageSchedulePriceType, bool)`

GetSchedulePricesOk returns a tuple with the SchedulePrices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedulePrices

`func (o *ConfigPackageScheduleType) SetSchedulePrices(v []HotelPackageSchedulePriceType)`

SetSchedulePrices sets SchedulePrices field to given value.

### HasSchedulePrices

`func (o *ConfigPackageScheduleType) HasSchedulePrices() bool`

HasSchedulePrices returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ConfigPackageScheduleType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ConfigPackageScheduleType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ConfigPackageScheduleType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ConfigPackageScheduleType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetMinNights

`func (o *ConfigPackageScheduleType) GetMinNights() int32`

GetMinNights returns the MinNights field if non-nil, zero value otherwise.

### GetMinNightsOk

`func (o *ConfigPackageScheduleType) GetMinNightsOk() (*int32, bool)`

GetMinNightsOk returns a tuple with the MinNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinNights

`func (o *ConfigPackageScheduleType) SetMinNights(v int32)`

SetMinNights sets MinNights field to given value.

### HasMinNights

`func (o *ConfigPackageScheduleType) HasMinNights() bool`

HasMinNights returns a boolean if a field has been set.

### GetMaxNights

`func (o *ConfigPackageScheduleType) GetMaxNights() int32`

GetMaxNights returns the MaxNights field if non-nil, zero value otherwise.

### GetMaxNightsOk

`func (o *ConfigPackageScheduleType) GetMaxNightsOk() (*int32, bool)`

GetMaxNightsOk returns a tuple with the MaxNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxNights

`func (o *ConfigPackageScheduleType) SetMaxNights(v int32)`

SetMaxNights sets MaxNights field to given value.

### HasMaxNights

`func (o *ConfigPackageScheduleType) HasMaxNights() bool`

HasMaxNights returns a boolean if a field has been set.

### GetMinPersons

`func (o *ConfigPackageScheduleType) GetMinPersons() int32`

GetMinPersons returns the MinPersons field if non-nil, zero value otherwise.

### GetMinPersonsOk

`func (o *ConfigPackageScheduleType) GetMinPersonsOk() (*int32, bool)`

GetMinPersonsOk returns a tuple with the MinPersons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinPersons

`func (o *ConfigPackageScheduleType) SetMinPersons(v int32)`

SetMinPersons sets MinPersons field to given value.

### HasMinPersons

`func (o *ConfigPackageScheduleType) HasMinPersons() bool`

HasMinPersons returns a boolean if a field has been set.

### GetMaxPersons

`func (o *ConfigPackageScheduleType) GetMaxPersons() int32`

GetMaxPersons returns the MaxPersons field if non-nil, zero value otherwise.

### GetMaxPersonsOk

`func (o *ConfigPackageScheduleType) GetMaxPersonsOk() (*int32, bool)`

GetMaxPersonsOk returns a tuple with the MaxPersons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPersons

`func (o *ConfigPackageScheduleType) SetMaxPersons(v int32)`

SetMaxPersons sets MaxPersons field to given value.

### HasMaxPersons

`func (o *ConfigPackageScheduleType) HasMaxPersons() bool`

HasMaxPersons returns a boolean if a field has been set.

### GetNewMinNights

`func (o *ConfigPackageScheduleType) GetNewMinNights() int32`

GetNewMinNights returns the NewMinNights field if non-nil, zero value otherwise.

### GetNewMinNightsOk

`func (o *ConfigPackageScheduleType) GetNewMinNightsOk() (*int32, bool)`

GetNewMinNightsOk returns a tuple with the NewMinNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMinNights

`func (o *ConfigPackageScheduleType) SetNewMinNights(v int32)`

SetNewMinNights sets NewMinNights field to given value.

### HasNewMinNights

`func (o *ConfigPackageScheduleType) HasNewMinNights() bool`

HasNewMinNights returns a boolean if a field has been set.

### GetNewMaxNights

`func (o *ConfigPackageScheduleType) GetNewMaxNights() int32`

GetNewMaxNights returns the NewMaxNights field if non-nil, zero value otherwise.

### GetNewMaxNightsOk

`func (o *ConfigPackageScheduleType) GetNewMaxNightsOk() (*int32, bool)`

GetNewMaxNightsOk returns a tuple with the NewMaxNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMaxNights

`func (o *ConfigPackageScheduleType) SetNewMaxNights(v int32)`

SetNewMaxNights sets NewMaxNights field to given value.

### HasNewMaxNights

`func (o *ConfigPackageScheduleType) HasNewMaxNights() bool`

HasNewMaxNights returns a boolean if a field has been set.

### GetNewMinPersons

`func (o *ConfigPackageScheduleType) GetNewMinPersons() int32`

GetNewMinPersons returns the NewMinPersons field if non-nil, zero value otherwise.

### GetNewMinPersonsOk

`func (o *ConfigPackageScheduleType) GetNewMinPersonsOk() (*int32, bool)`

GetNewMinPersonsOk returns a tuple with the NewMinPersons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMinPersons

`func (o *ConfigPackageScheduleType) SetNewMinPersons(v int32)`

SetNewMinPersons sets NewMinPersons field to given value.

### HasNewMinPersons

`func (o *ConfigPackageScheduleType) HasNewMinPersons() bool`

HasNewMinPersons returns a boolean if a field has been set.

### GetNewMaxPersons

`func (o *ConfigPackageScheduleType) GetNewMaxPersons() int32`

GetNewMaxPersons returns the NewMaxPersons field if non-nil, zero value otherwise.

### GetNewMaxPersonsOk

`func (o *ConfigPackageScheduleType) GetNewMaxPersonsOk() (*int32, bool)`

GetNewMaxPersonsOk returns a tuple with the NewMaxPersons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMaxPersons

`func (o *ConfigPackageScheduleType) SetNewMaxPersons(v int32)`

SetNewMaxPersons sets NewMaxPersons field to given value.

### HasNewMaxPersons

`func (o *ConfigPackageScheduleType) HasNewMaxPersons() bool`

HasNewMaxPersons returns a boolean if a field has been set.

### GetStart

`func (o *ConfigPackageScheduleType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ConfigPackageScheduleType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ConfigPackageScheduleType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ConfigPackageScheduleType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *ConfigPackageScheduleType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ConfigPackageScheduleType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ConfigPackageScheduleType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ConfigPackageScheduleType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


