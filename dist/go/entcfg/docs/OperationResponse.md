# OperationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Configs** | Pointer to [**[]Operation**](Operation.md) | Collection of Operation Details | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOperationResponse

`func NewOperationResponse() *OperationResponse`

NewOperationResponse instantiates a new OperationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperationResponseWithDefaults

`func NewOperationResponseWithDefaults() *OperationResponse`

NewOperationResponseWithDefaults instantiates a new OperationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigs

`func (o *OperationResponse) GetConfigs() []Operation`

GetConfigs returns the Configs field if non-nil, zero value otherwise.

### GetConfigsOk

`func (o *OperationResponse) GetConfigsOk() (*[]Operation, bool)`

GetConfigsOk returns a tuple with the Configs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigs

`func (o *OperationResponse) SetConfigs(v []Operation)`

SetConfigs sets Configs field to given value.

### HasConfigs

`func (o *OperationResponse) HasConfigs() bool`

HasConfigs returns a boolean if a field has been set.

### GetLinks

`func (o *OperationResponse) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OperationResponse) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OperationResponse) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OperationResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OperationResponse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OperationResponse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OperationResponse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OperationResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


