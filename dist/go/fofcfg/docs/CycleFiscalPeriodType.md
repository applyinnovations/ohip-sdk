# CycleFiscalPeriodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Resort for which the Period is defined. | [optional] 
**YearId** | Pointer to **float32** | Id of the Year. | [optional] 
**PeriodPrefix** | Pointer to **string** | Prefix added to all period to be created | [optional] 
**Cycle** | Pointer to [**CyclePeriodType**](CyclePeriodType.md) |  | [optional] 

## Methods

### NewCycleFiscalPeriodType

`func NewCycleFiscalPeriodType() *CycleFiscalPeriodType`

NewCycleFiscalPeriodType instantiates a new CycleFiscalPeriodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCycleFiscalPeriodTypeWithDefaults

`func NewCycleFiscalPeriodTypeWithDefaults() *CycleFiscalPeriodType`

NewCycleFiscalPeriodTypeWithDefaults instantiates a new CycleFiscalPeriodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CycleFiscalPeriodType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CycleFiscalPeriodType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CycleFiscalPeriodType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CycleFiscalPeriodType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetYearId

`func (o *CycleFiscalPeriodType) GetYearId() float32`

GetYearId returns the YearId field if non-nil, zero value otherwise.

### GetYearIdOk

`func (o *CycleFiscalPeriodType) GetYearIdOk() (*float32, bool)`

GetYearIdOk returns a tuple with the YearId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearId

`func (o *CycleFiscalPeriodType) SetYearId(v float32)`

SetYearId sets YearId field to given value.

### HasYearId

`func (o *CycleFiscalPeriodType) HasYearId() bool`

HasYearId returns a boolean if a field has been set.

### GetPeriodPrefix

`func (o *CycleFiscalPeriodType) GetPeriodPrefix() string`

GetPeriodPrefix returns the PeriodPrefix field if non-nil, zero value otherwise.

### GetPeriodPrefixOk

`func (o *CycleFiscalPeriodType) GetPeriodPrefixOk() (*string, bool)`

GetPeriodPrefixOk returns a tuple with the PeriodPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodPrefix

`func (o *CycleFiscalPeriodType) SetPeriodPrefix(v string)`

SetPeriodPrefix sets PeriodPrefix field to given value.

### HasPeriodPrefix

`func (o *CycleFiscalPeriodType) HasPeriodPrefix() bool`

HasPeriodPrefix returns a boolean if a field has been set.

### GetCycle

`func (o *CycleFiscalPeriodType) GetCycle() CyclePeriodType`

GetCycle returns the Cycle field if non-nil, zero value otherwise.

### GetCycleOk

`func (o *CycleFiscalPeriodType) GetCycleOk() (*CyclePeriodType, bool)`

GetCycleOk returns a tuple with the Cycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycle

`func (o *CycleFiscalPeriodType) SetCycle(v CyclePeriodType)`

SetCycle sets Cycle field to given value.

### HasCycle

`func (o *CycleFiscalPeriodType) HasCycle() bool`

HasCycle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


