# SetProcessingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Agents** | Pointer to [**[]CommissionProcessingAgentType**](CommissionProcessingAgentType.md) | Commission processing instructions for an Agent. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetProcessingInstructions

`func NewSetProcessingInstructions() *SetProcessingInstructions`

NewSetProcessingInstructions instantiates a new SetProcessingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetProcessingInstructionsWithDefaults

`func NewSetProcessingInstructionsWithDefaults() *SetProcessingInstructions`

NewSetProcessingInstructionsWithDefaults instantiates a new SetProcessingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgents

`func (o *SetProcessingInstructions) GetAgents() []CommissionProcessingAgentType`

GetAgents returns the Agents field if non-nil, zero value otherwise.

### GetAgentsOk

`func (o *SetProcessingInstructions) GetAgentsOk() (*[]CommissionProcessingAgentType, bool)`

GetAgentsOk returns a tuple with the Agents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgents

`func (o *SetProcessingInstructions) SetAgents(v []CommissionProcessingAgentType)`

SetAgents sets Agents field to given value.

### HasAgents

`func (o *SetProcessingInstructions) HasAgents() bool`

HasAgents returns a boolean if a field has been set.

### GetLinks

`func (o *SetProcessingInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetProcessingInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetProcessingInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetProcessingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetProcessingInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetProcessingInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetProcessingInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetProcessingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


