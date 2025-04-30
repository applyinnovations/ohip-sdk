# FetchRotationPeriod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code for Room Rotation Period. | [optional] 
**StartDate** | Pointer to **string** | Represents Effective start date for the Room Rotation Period Setup. | [optional] 
**PeriodFrequency** | Pointer to [**RotationPeriodFrequencyType**](RotationPeriodFrequencyType.md) |  | [optional] 
**CurrentPeriodStartDate** | Pointer to **string** | The start date for the property&#39;s current Rotation Period. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchRotationPeriod

`func NewFetchRotationPeriod() *FetchRotationPeriod`

NewFetchRotationPeriod instantiates a new FetchRotationPeriod object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchRotationPeriodWithDefaults

`func NewFetchRotationPeriodWithDefaults() *FetchRotationPeriod`

NewFetchRotationPeriodWithDefaults instantiates a new FetchRotationPeriod object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FetchRotationPeriod) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FetchRotationPeriod) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FetchRotationPeriod) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FetchRotationPeriod) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStartDate

`func (o *FetchRotationPeriod) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *FetchRotationPeriod) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *FetchRotationPeriod) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *FetchRotationPeriod) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetPeriodFrequency

`func (o *FetchRotationPeriod) GetPeriodFrequency() RotationPeriodFrequencyType`

GetPeriodFrequency returns the PeriodFrequency field if non-nil, zero value otherwise.

### GetPeriodFrequencyOk

`func (o *FetchRotationPeriod) GetPeriodFrequencyOk() (*RotationPeriodFrequencyType, bool)`

GetPeriodFrequencyOk returns a tuple with the PeriodFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodFrequency

`func (o *FetchRotationPeriod) SetPeriodFrequency(v RotationPeriodFrequencyType)`

SetPeriodFrequency sets PeriodFrequency field to given value.

### HasPeriodFrequency

`func (o *FetchRotationPeriod) HasPeriodFrequency() bool`

HasPeriodFrequency returns a boolean if a field has been set.

### GetCurrentPeriodStartDate

`func (o *FetchRotationPeriod) GetCurrentPeriodStartDate() string`

GetCurrentPeriodStartDate returns the CurrentPeriodStartDate field if non-nil, zero value otherwise.

### GetCurrentPeriodStartDateOk

`func (o *FetchRotationPeriod) GetCurrentPeriodStartDateOk() (*string, bool)`

GetCurrentPeriodStartDateOk returns a tuple with the CurrentPeriodStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPeriodStartDate

`func (o *FetchRotationPeriod) SetCurrentPeriodStartDate(v string)`

SetCurrentPeriodStartDate sets CurrentPeriodStartDate field to given value.

### HasCurrentPeriodStartDate

`func (o *FetchRotationPeriod) HasCurrentPeriodStartDate() bool`

HasCurrentPeriodStartDate returns a boolean if a field has been set.

### GetLinks

`func (o *FetchRotationPeriod) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchRotationPeriod) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchRotationPeriod) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchRotationPeriod) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchRotationPeriod) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchRotationPeriod) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchRotationPeriod) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchRotationPeriod) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


