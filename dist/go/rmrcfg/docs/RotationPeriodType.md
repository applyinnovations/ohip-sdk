# RotationPeriodType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code for Room Rotation Period. | [optional] 
**StartDate** | Pointer to **string** | Represents Effective start date for the Room Rotation Period Setup. | [optional] 
**PeriodFrequency** | Pointer to [**RotationPeriodFrequencyType**](RotationPeriodFrequencyType.md) |  | [optional] 
**ForceRecalculate** | Pointer to **bool** | Represents if Rotation points/rules recalculation job should be re-triggered. | [optional] 

## Methods

### NewRotationPeriodType

`func NewRotationPeriodType() *RotationPeriodType`

NewRotationPeriodType instantiates a new RotationPeriodType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationPeriodTypeWithDefaults

`func NewRotationPeriodTypeWithDefaults() *RotationPeriodType`

NewRotationPeriodTypeWithDefaults instantiates a new RotationPeriodType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RotationPeriodType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RotationPeriodType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RotationPeriodType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RotationPeriodType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStartDate

`func (o *RotationPeriodType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RotationPeriodType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RotationPeriodType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RotationPeriodType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetPeriodFrequency

`func (o *RotationPeriodType) GetPeriodFrequency() RotationPeriodFrequencyType`

GetPeriodFrequency returns the PeriodFrequency field if non-nil, zero value otherwise.

### GetPeriodFrequencyOk

`func (o *RotationPeriodType) GetPeriodFrequencyOk() (*RotationPeriodFrequencyType, bool)`

GetPeriodFrequencyOk returns a tuple with the PeriodFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodFrequency

`func (o *RotationPeriodType) SetPeriodFrequency(v RotationPeriodFrequencyType)`

SetPeriodFrequency sets PeriodFrequency field to given value.

### HasPeriodFrequency

`func (o *RotationPeriodType) HasPeriodFrequency() bool`

HasPeriodFrequency returns a boolean if a field has been set.

### GetForceRecalculate

`func (o *RotationPeriodType) GetForceRecalculate() bool`

GetForceRecalculate returns the ForceRecalculate field if non-nil, zero value otherwise.

### GetForceRecalculateOk

`func (o *RotationPeriodType) GetForceRecalculateOk() (*bool, bool)`

GetForceRecalculateOk returns a tuple with the ForceRecalculate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceRecalculate

`func (o *RotationPeriodType) SetForceRecalculate(v bool)`

SetForceRecalculate sets ForceRecalculate field to given value.

### HasForceRecalculate

`func (o *RotationPeriodType) HasForceRecalculate() bool`

HasForceRecalculate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


