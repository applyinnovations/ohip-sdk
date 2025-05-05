# CentralConfigsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Configs** | Pointer to [**[]CentralConfig**](CentralConfig.md) | Collection of Central Config Details | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCentralConfigsResponse

`func NewCentralConfigsResponse() *CentralConfigsResponse`

NewCentralConfigsResponse instantiates a new CentralConfigsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCentralConfigsResponseWithDefaults

`func NewCentralConfigsResponseWithDefaults() *CentralConfigsResponse`

NewCentralConfigsResponseWithDefaults instantiates a new CentralConfigsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigs

`func (o *CentralConfigsResponse) GetConfigs() []CentralConfig`

GetConfigs returns the Configs field if non-nil, zero value otherwise.

### GetConfigsOk

`func (o *CentralConfigsResponse) GetConfigsOk() (*[]CentralConfig, bool)`

GetConfigsOk returns a tuple with the Configs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigs

`func (o *CentralConfigsResponse) SetConfigs(v []CentralConfig)`

SetConfigs sets Configs field to given value.

### HasConfigs

`func (o *CentralConfigsResponse) HasConfigs() bool`

HasConfigs returns a boolean if a field has been set.

### GetLinks

`func (o *CentralConfigsResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CentralConfigsResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CentralConfigsResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CentralConfigsResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CentralConfigsResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CentralConfigsResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CentralConfigsResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CentralConfigsResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


