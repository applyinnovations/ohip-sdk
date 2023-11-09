# ManageAlternateEventsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateEvents** | Pointer to [**EventsInfoType**](EventsInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ManageAlternateEventsInstruction** | Pointer to [**ManageAlternateEventsInstructionType**](ManageAlternateEventsInstructionType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewManageAlternateEventsRequest

`func NewManageAlternateEventsRequest() *ManageAlternateEventsRequest`

NewManageAlternateEventsRequest instantiates a new ManageAlternateEventsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManageAlternateEventsRequestWithDefaults

`func NewManageAlternateEventsRequestWithDefaults() *ManageAlternateEventsRequest`

NewManageAlternateEventsRequestWithDefaults instantiates a new ManageAlternateEventsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateEvents

`func (o *ManageAlternateEventsRequest) GetAlternateEvents() EventsInfoType`

GetAlternateEvents returns the AlternateEvents field if non-nil, zero value otherwise.

### GetAlternateEventsOk

`func (o *ManageAlternateEventsRequest) GetAlternateEventsOk() (*EventsInfoType, bool)`

GetAlternateEventsOk returns a tuple with the AlternateEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateEvents

`func (o *ManageAlternateEventsRequest) SetAlternateEvents(v EventsInfoType)`

SetAlternateEvents sets AlternateEvents field to given value.

### HasAlternateEvents

`func (o *ManageAlternateEventsRequest) HasAlternateEvents() bool`

HasAlternateEvents returns a boolean if a field has been set.

### GetLinks

`func (o *ManageAlternateEventsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ManageAlternateEventsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ManageAlternateEventsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ManageAlternateEventsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetManageAlternateEventsInstruction

`func (o *ManageAlternateEventsRequest) GetManageAlternateEventsInstruction() ManageAlternateEventsInstructionType`

GetManageAlternateEventsInstruction returns the ManageAlternateEventsInstruction field if non-nil, zero value otherwise.

### GetManageAlternateEventsInstructionOk

`func (o *ManageAlternateEventsRequest) GetManageAlternateEventsInstructionOk() (*ManageAlternateEventsInstructionType, bool)`

GetManageAlternateEventsInstructionOk returns a tuple with the ManageAlternateEventsInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManageAlternateEventsInstruction

`func (o *ManageAlternateEventsRequest) SetManageAlternateEventsInstruction(v ManageAlternateEventsInstructionType)`

SetManageAlternateEventsInstruction sets ManageAlternateEventsInstruction field to given value.

### HasManageAlternateEventsInstruction

`func (o *ManageAlternateEventsRequest) HasManageAlternateEventsInstruction() bool`

HasManageAlternateEventsInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *ManageAlternateEventsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ManageAlternateEventsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ManageAlternateEventsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ManageAlternateEventsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


