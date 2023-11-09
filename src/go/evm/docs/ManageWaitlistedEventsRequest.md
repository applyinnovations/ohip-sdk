# ManageWaitlistedEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**WaitlistedEventsSearchType**](WaitlistedEventsSearchType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProcessingInstructions** | Pointer to [**WaitlistedEventProcessingInstructionsType**](WaitlistedEventProcessingInstructionsType.md) |  | [optional] 
**WaitlistedEvents** | Pointer to [**WaitlistedEventsType**](WaitlistedEventsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewManageWaitlistedEventsRequest

`func NewManageWaitlistedEventsRequest() *ManageWaitlistedEventsRequest`

NewManageWaitlistedEventsRequest instantiates a new ManageWaitlistedEventsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManageWaitlistedEventsRequestWithDefaults

`func NewManageWaitlistedEventsRequestWithDefaults() *ManageWaitlistedEventsRequest`

NewManageWaitlistedEventsRequestWithDefaults instantiates a new ManageWaitlistedEventsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ManageWaitlistedEventsRequest) GetCriteria() WaitlistedEventsSearchType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ManageWaitlistedEventsRequest) GetCriteriaOk() (*WaitlistedEventsSearchType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ManageWaitlistedEventsRequest) SetCriteria(v WaitlistedEventsSearchType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ManageWaitlistedEventsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ManageWaitlistedEventsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ManageWaitlistedEventsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ManageWaitlistedEventsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ManageWaitlistedEventsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProcessingInstructions

`func (o *ManageWaitlistedEventsRequest) GetProcessingInstructions() WaitlistedEventProcessingInstructionsType`

GetProcessingInstructions returns the ProcessingInstructions field if non-nil, zero value otherwise.

### GetProcessingInstructionsOk

`func (o *ManageWaitlistedEventsRequest) GetProcessingInstructionsOk() (*WaitlistedEventProcessingInstructionsType, bool)`

GetProcessingInstructionsOk returns a tuple with the ProcessingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingInstructions

`func (o *ManageWaitlistedEventsRequest) SetProcessingInstructions(v WaitlistedEventProcessingInstructionsType)`

SetProcessingInstructions sets ProcessingInstructions field to given value.

### HasProcessingInstructions

`func (o *ManageWaitlistedEventsRequest) HasProcessingInstructions() bool`

HasProcessingInstructions returns a boolean if a field has been set.

### GetWaitlistedEvents

`func (o *ManageWaitlistedEventsRequest) GetWaitlistedEvents() WaitlistedEventsType`

GetWaitlistedEvents returns the WaitlistedEvents field if non-nil, zero value otherwise.

### GetWaitlistedEventsOk

`func (o *ManageWaitlistedEventsRequest) GetWaitlistedEventsOk() (*WaitlistedEventsType, bool)`

GetWaitlistedEventsOk returns a tuple with the WaitlistedEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistedEvents

`func (o *ManageWaitlistedEventsRequest) SetWaitlistedEvents(v WaitlistedEventsType)`

SetWaitlistedEvents sets WaitlistedEvents field to given value.

### HasWaitlistedEvents

`func (o *ManageWaitlistedEventsRequest) HasWaitlistedEvents() bool`

HasWaitlistedEvents returns a boolean if a field has been set.

### GetWarnings

`func (o *ManageWaitlistedEventsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ManageWaitlistedEventsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ManageWaitlistedEventsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ManageWaitlistedEventsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


