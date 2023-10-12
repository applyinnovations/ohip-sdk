# FetchRotationPeriodResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code for Room Rotation Period. | [optional] 
**StartDate** | Pointer to **string** | Represents Effective start date for the Room Rotation Period Setup. | [optional] 
**PeriodFrequency** | Pointer to [**RotationPeriodFrequencyType**](RotationPeriodFrequencyType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchRotationPeriodResponse

`func NewFetchRotationPeriodResponse() *FetchRotationPeriodResponse`

NewFetchRotationPeriodResponse instantiates a new FetchRotationPeriodResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchRotationPeriodResponseWithDefaults

`func NewFetchRotationPeriodResponseWithDefaults() *FetchRotationPeriodResponse`

NewFetchRotationPeriodResponseWithDefaults instantiates a new FetchRotationPeriodResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FetchRotationPeriodResponse) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FetchRotationPeriodResponse) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FetchRotationPeriodResponse) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FetchRotationPeriodResponse) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStartDate

`func (o *FetchRotationPeriodResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *FetchRotationPeriodResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *FetchRotationPeriodResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *FetchRotationPeriodResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetPeriodFrequency

`func (o *FetchRotationPeriodResponse) GetPeriodFrequency() RotationPeriodFrequencyType`

GetPeriodFrequency returns the PeriodFrequency field if non-nil, zero value otherwise.

### GetPeriodFrequencyOk

`func (o *FetchRotationPeriodResponse) GetPeriodFrequencyOk() (*RotationPeriodFrequencyType, bool)`

GetPeriodFrequencyOk returns a tuple with the PeriodFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodFrequency

`func (o *FetchRotationPeriodResponse) SetPeriodFrequency(v RotationPeriodFrequencyType)`

SetPeriodFrequency sets PeriodFrequency field to given value.

### HasPeriodFrequency

`func (o *FetchRotationPeriodResponse) HasPeriodFrequency() bool`

HasPeriodFrequency returns a boolean if a field has been set.

### GetLinks

`func (o *FetchRotationPeriodResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchRotationPeriodResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchRotationPeriodResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchRotationPeriodResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchRotationPeriodResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchRotationPeriodResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchRotationPeriodResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchRotationPeriodResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


