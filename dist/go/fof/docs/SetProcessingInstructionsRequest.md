# SetProcessingInstructionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Agents** | Pointer to [**[]CommissionProcessingAgentType**](CommissionProcessingAgentType.md) | Commission processing instructions for an Agent. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetProcessingInstructionsRequest

`func NewSetProcessingInstructionsRequest() *SetProcessingInstructionsRequest`

NewSetProcessingInstructionsRequest instantiates a new SetProcessingInstructionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetProcessingInstructionsRequestWithDefaults

`func NewSetProcessingInstructionsRequestWithDefaults() *SetProcessingInstructionsRequest`

NewSetProcessingInstructionsRequestWithDefaults instantiates a new SetProcessingInstructionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgents

`func (o *SetProcessingInstructionsRequest) GetAgents() []CommissionProcessingAgentType`

GetAgents returns the Agents field if non-nil, zero value otherwise.

### GetAgentsOk

`func (o *SetProcessingInstructionsRequest) GetAgentsOk() (*[]CommissionProcessingAgentType, bool)`

GetAgentsOk returns a tuple with the Agents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgents

`func (o *SetProcessingInstructionsRequest) SetAgents(v []CommissionProcessingAgentType)`

SetAgents sets Agents field to given value.

### HasAgents

`func (o *SetProcessingInstructionsRequest) HasAgents() bool`

HasAgents returns a boolean if a field has been set.

### GetLinks

`func (o *SetProcessingInstructionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetProcessingInstructionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetProcessingInstructionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetProcessingInstructionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetProcessingInstructionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetProcessingInstructionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetProcessingInstructionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetProcessingInstructionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


