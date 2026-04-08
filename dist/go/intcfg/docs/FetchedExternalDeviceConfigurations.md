# FetchedExternalDeviceConfigurations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalDeviceConfigurations** | Pointer to [**ExternalDeviceConfigurationType**](ExternalDeviceConfigurationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedExternalDeviceConfigurations

`func NewFetchedExternalDeviceConfigurations() *FetchedExternalDeviceConfigurations`

NewFetchedExternalDeviceConfigurations instantiates a new FetchedExternalDeviceConfigurations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedExternalDeviceConfigurationsWithDefaults

`func NewFetchedExternalDeviceConfigurationsWithDefaults() *FetchedExternalDeviceConfigurations`

NewFetchedExternalDeviceConfigurationsWithDefaults instantiates a new FetchedExternalDeviceConfigurations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalDeviceConfigurations

`func (o *FetchedExternalDeviceConfigurations) GetExternalDeviceConfigurations() ExternalDeviceConfigurationType`

GetExternalDeviceConfigurations returns the ExternalDeviceConfigurations field if non-nil, zero value otherwise.

### GetExternalDeviceConfigurationsOk

`func (o *FetchedExternalDeviceConfigurations) GetExternalDeviceConfigurationsOk() (*ExternalDeviceConfigurationType, bool)`

GetExternalDeviceConfigurationsOk returns a tuple with the ExternalDeviceConfigurations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalDeviceConfigurations

`func (o *FetchedExternalDeviceConfigurations) SetExternalDeviceConfigurations(v ExternalDeviceConfigurationType)`

SetExternalDeviceConfigurations sets ExternalDeviceConfigurations field to given value.

### HasExternalDeviceConfigurations

`func (o *FetchedExternalDeviceConfigurations) HasExternalDeviceConfigurations() bool`

HasExternalDeviceConfigurations returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedExternalDeviceConfigurations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedExternalDeviceConfigurations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedExternalDeviceConfigurations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedExternalDeviceConfigurations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedExternalDeviceConfigurations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedExternalDeviceConfigurations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedExternalDeviceConfigurations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedExternalDeviceConfigurations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


