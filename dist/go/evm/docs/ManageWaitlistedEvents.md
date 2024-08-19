# ManageWaitlistedEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**WaitlistedEventsSearchType**](WaitlistedEventsSearchType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProcessingInstructions** | Pointer to [**WaitlistedEventProcessingInstructionsType**](WaitlistedEventProcessingInstructionsType.md) |  | [optional] 
**WaitlistedEvents** | Pointer to [**[]WaitlistedEventType**](WaitlistedEventType.md) | Pertain waitlisted event Information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewManageWaitlistedEvents

`func NewManageWaitlistedEvents() *ManageWaitlistedEvents`

NewManageWaitlistedEvents instantiates a new ManageWaitlistedEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManageWaitlistedEventsWithDefaults

`func NewManageWaitlistedEventsWithDefaults() *ManageWaitlistedEvents`

NewManageWaitlistedEventsWithDefaults instantiates a new ManageWaitlistedEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ManageWaitlistedEvents) GetCriteria() WaitlistedEventsSearchType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ManageWaitlistedEvents) GetCriteriaOk() (*WaitlistedEventsSearchType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ManageWaitlistedEvents) SetCriteria(v WaitlistedEventsSearchType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ManageWaitlistedEvents) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ManageWaitlistedEvents) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ManageWaitlistedEvents) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ManageWaitlistedEvents) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ManageWaitlistedEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProcessingInstructions

`func (o *ManageWaitlistedEvents) GetProcessingInstructions() WaitlistedEventProcessingInstructionsType`

GetProcessingInstructions returns the ProcessingInstructions field if non-nil, zero value otherwise.

### GetProcessingInstructionsOk

`func (o *ManageWaitlistedEvents) GetProcessingInstructionsOk() (*WaitlistedEventProcessingInstructionsType, bool)`

GetProcessingInstructionsOk returns a tuple with the ProcessingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingInstructions

`func (o *ManageWaitlistedEvents) SetProcessingInstructions(v WaitlistedEventProcessingInstructionsType)`

SetProcessingInstructions sets ProcessingInstructions field to given value.

### HasProcessingInstructions

`func (o *ManageWaitlistedEvents) HasProcessingInstructions() bool`

HasProcessingInstructions returns a boolean if a field has been set.

### GetWaitlistedEvents

`func (o *ManageWaitlistedEvents) GetWaitlistedEvents() []WaitlistedEventType`

GetWaitlistedEvents returns the WaitlistedEvents field if non-nil, zero value otherwise.

### GetWaitlistedEventsOk

`func (o *ManageWaitlistedEvents) GetWaitlistedEventsOk() (*[]WaitlistedEventType, bool)`

GetWaitlistedEventsOk returns a tuple with the WaitlistedEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistedEvents

`func (o *ManageWaitlistedEvents) SetWaitlistedEvents(v []WaitlistedEventType)`

SetWaitlistedEvents sets WaitlistedEvents field to given value.

### HasWaitlistedEvents

`func (o *ManageWaitlistedEvents) HasWaitlistedEvents() bool`

HasWaitlistedEvents returns a boolean if a field has been set.

### GetWarnings

`func (o *ManageWaitlistedEvents) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ManageWaitlistedEvents) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ManageWaitlistedEvents) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ManageWaitlistedEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


