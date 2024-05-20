# ForecastsInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForecastsInformation** | Pointer to [**[]AccountForecastType**](AccountForecastType.md) | Detail Information about Account Forecast. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewForecastsInformation

`func NewForecastsInformation() *ForecastsInformation`

NewForecastsInformation instantiates a new ForecastsInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForecastsInformationWithDefaults

`func NewForecastsInformationWithDefaults() *ForecastsInformation`

NewForecastsInformationWithDefaults instantiates a new ForecastsInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForecastsInformation

`func (o *ForecastsInformation) GetForecastsInformation() []AccountForecastType`

GetForecastsInformation returns the ForecastsInformation field if non-nil, zero value otherwise.

### GetForecastsInformationOk

`func (o *ForecastsInformation) GetForecastsInformationOk() (*[]AccountForecastType, bool)`

GetForecastsInformationOk returns a tuple with the ForecastsInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastsInformation

`func (o *ForecastsInformation) SetForecastsInformation(v []AccountForecastType)`

SetForecastsInformation sets ForecastsInformation field to given value.

### HasForecastsInformation

`func (o *ForecastsInformation) HasForecastsInformation() bool`

HasForecastsInformation returns a boolean if a field has been set.

### GetLinks

`func (o *ForecastsInformation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ForecastsInformation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ForecastsInformation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ForecastsInformation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ForecastsInformation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ForecastsInformation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ForecastsInformation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ForecastsInformation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


