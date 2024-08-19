# EventInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AltEventsDetail** | Pointer to [**[]LightEventDetailType**](LightEventDetailType.md) | Pertain event few information about events. | [optional] 
**EventBlockInfo** | Pointer to [**BlockType**](BlockType.md) |  | [optional] 
**EventDetail** | Pointer to [**EventDetailType**](EventDetailType.md) |  | [optional] 
**EventIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**EventNotes** | Pointer to [**[]EventNoteType**](EventNoteType.md) | Pertain event information. | [optional] 
**EventPrimaryInfo** | Pointer to [**EventPrimaryInfoType**](EventPrimaryInfoType.md) |  | [optional] 
**EventResources** | Pointer to [**[]CateringEventResourceType**](CateringEventResourceType.md) | Event resources information. | [optional] 
**EventRevenues** | Pointer to [**EventRevenuesInformationType**](EventRevenuesInformationType.md) |  | [optional] 
**FunctionSpaceInformation** | Pointer to [**EventFunctionSpaceType**](EventFunctionSpaceType.md) |  | [optional] 
**MasterEventDetail** | Pointer to [**LightEventDetailType**](LightEventDetailType.md) |  | [optional] 
**OnTheBooksRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ProcessInstructions** | Pointer to [**EventProcessInstructionsType**](EventProcessInstructionsType.md) |  | [optional] 
**SubEventsDetail** | Pointer to [**[]LightEventDetailType**](LightEventDetailType.md) | Pertain event few information about events. | [optional] 

## Methods

### NewEventInfoType

`func NewEventInfoType() *EventInfoType`

NewEventInfoType instantiates a new EventInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventInfoTypeWithDefaults

`func NewEventInfoTypeWithDefaults() *EventInfoType`

NewEventInfoTypeWithDefaults instantiates a new EventInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAltEventsDetail

`func (o *EventInfoType) GetAltEventsDetail() []LightEventDetailType`

GetAltEventsDetail returns the AltEventsDetail field if non-nil, zero value otherwise.

### GetAltEventsDetailOk

`func (o *EventInfoType) GetAltEventsDetailOk() (*[]LightEventDetailType, bool)`

GetAltEventsDetailOk returns a tuple with the AltEventsDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltEventsDetail

`func (o *EventInfoType) SetAltEventsDetail(v []LightEventDetailType)`

SetAltEventsDetail sets AltEventsDetail field to given value.

### HasAltEventsDetail

`func (o *EventInfoType) HasAltEventsDetail() bool`

HasAltEventsDetail returns a boolean if a field has been set.

### GetEventBlockInfo

`func (o *EventInfoType) GetEventBlockInfo() BlockType`

GetEventBlockInfo returns the EventBlockInfo field if non-nil, zero value otherwise.

### GetEventBlockInfoOk

`func (o *EventInfoType) GetEventBlockInfoOk() (*BlockType, bool)`

GetEventBlockInfoOk returns a tuple with the EventBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBlockInfo

`func (o *EventInfoType) SetEventBlockInfo(v BlockType)`

SetEventBlockInfo sets EventBlockInfo field to given value.

### HasEventBlockInfo

`func (o *EventInfoType) HasEventBlockInfo() bool`

HasEventBlockInfo returns a boolean if a field has been set.

### GetEventDetail

`func (o *EventInfoType) GetEventDetail() EventDetailType`

GetEventDetail returns the EventDetail field if non-nil, zero value otherwise.

### GetEventDetailOk

`func (o *EventInfoType) GetEventDetailOk() (*EventDetailType, bool)`

GetEventDetailOk returns a tuple with the EventDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetail

`func (o *EventInfoType) SetEventDetail(v EventDetailType)`

SetEventDetail sets EventDetail field to given value.

### HasEventDetail

`func (o *EventInfoType) HasEventDetail() bool`

HasEventDetail returns a boolean if a field has been set.

### GetEventIndicators

`func (o *EventInfoType) GetEventIndicators() []IndicatorType`

GetEventIndicators returns the EventIndicators field if non-nil, zero value otherwise.

### GetEventIndicatorsOk

`func (o *EventInfoType) GetEventIndicatorsOk() (*[]IndicatorType, bool)`

GetEventIndicatorsOk returns a tuple with the EventIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventIndicators

`func (o *EventInfoType) SetEventIndicators(v []IndicatorType)`

SetEventIndicators sets EventIndicators field to given value.

### HasEventIndicators

`func (o *EventInfoType) HasEventIndicators() bool`

HasEventIndicators returns a boolean if a field has been set.

### GetEventNotes

`func (o *EventInfoType) GetEventNotes() []EventNoteType`

GetEventNotes returns the EventNotes field if non-nil, zero value otherwise.

### GetEventNotesOk

`func (o *EventInfoType) GetEventNotesOk() (*[]EventNoteType, bool)`

GetEventNotesOk returns a tuple with the EventNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventNotes

`func (o *EventInfoType) SetEventNotes(v []EventNoteType)`

SetEventNotes sets EventNotes field to given value.

### HasEventNotes

`func (o *EventInfoType) HasEventNotes() bool`

HasEventNotes returns a boolean if a field has been set.

### GetEventPrimaryInfo

`func (o *EventInfoType) GetEventPrimaryInfo() EventPrimaryInfoType`

GetEventPrimaryInfo returns the EventPrimaryInfo field if non-nil, zero value otherwise.

### GetEventPrimaryInfoOk

`func (o *EventInfoType) GetEventPrimaryInfoOk() (*EventPrimaryInfoType, bool)`

GetEventPrimaryInfoOk returns a tuple with the EventPrimaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventPrimaryInfo

`func (o *EventInfoType) SetEventPrimaryInfo(v EventPrimaryInfoType)`

SetEventPrimaryInfo sets EventPrimaryInfo field to given value.

### HasEventPrimaryInfo

`func (o *EventInfoType) HasEventPrimaryInfo() bool`

HasEventPrimaryInfo returns a boolean if a field has been set.

### GetEventResources

`func (o *EventInfoType) GetEventResources() []CateringEventResourceType`

GetEventResources returns the EventResources field if non-nil, zero value otherwise.

### GetEventResourcesOk

`func (o *EventInfoType) GetEventResourcesOk() (*[]CateringEventResourceType, bool)`

GetEventResourcesOk returns a tuple with the EventResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventResources

`func (o *EventInfoType) SetEventResources(v []CateringEventResourceType)`

SetEventResources sets EventResources field to given value.

### HasEventResources

`func (o *EventInfoType) HasEventResources() bool`

HasEventResources returns a boolean if a field has been set.

### GetEventRevenues

`func (o *EventInfoType) GetEventRevenues() EventRevenuesInformationType`

GetEventRevenues returns the EventRevenues field if non-nil, zero value otherwise.

### GetEventRevenuesOk

`func (o *EventInfoType) GetEventRevenuesOk() (*EventRevenuesInformationType, bool)`

GetEventRevenuesOk returns a tuple with the EventRevenues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventRevenues

`func (o *EventInfoType) SetEventRevenues(v EventRevenuesInformationType)`

SetEventRevenues sets EventRevenues field to given value.

### HasEventRevenues

`func (o *EventInfoType) HasEventRevenues() bool`

HasEventRevenues returns a boolean if a field has been set.

### GetFunctionSpaceInformation

`func (o *EventInfoType) GetFunctionSpaceInformation() EventFunctionSpaceType`

GetFunctionSpaceInformation returns the FunctionSpaceInformation field if non-nil, zero value otherwise.

### GetFunctionSpaceInformationOk

`func (o *EventInfoType) GetFunctionSpaceInformationOk() (*EventFunctionSpaceType, bool)`

GetFunctionSpaceInformationOk returns a tuple with the FunctionSpaceInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceInformation

`func (o *EventInfoType) SetFunctionSpaceInformation(v EventFunctionSpaceType)`

SetFunctionSpaceInformation sets FunctionSpaceInformation field to given value.

### HasFunctionSpaceInformation

`func (o *EventInfoType) HasFunctionSpaceInformation() bool`

HasFunctionSpaceInformation returns a boolean if a field has been set.

### GetMasterEventDetail

`func (o *EventInfoType) GetMasterEventDetail() LightEventDetailType`

GetMasterEventDetail returns the MasterEventDetail field if non-nil, zero value otherwise.

### GetMasterEventDetailOk

`func (o *EventInfoType) GetMasterEventDetailOk() (*LightEventDetailType, bool)`

GetMasterEventDetailOk returns a tuple with the MasterEventDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEventDetail

`func (o *EventInfoType) SetMasterEventDetail(v LightEventDetailType)`

SetMasterEventDetail sets MasterEventDetail field to given value.

### HasMasterEventDetail

`func (o *EventInfoType) HasMasterEventDetail() bool`

HasMasterEventDetail returns a boolean if a field has been set.

### GetOnTheBooksRevenue

`func (o *EventInfoType) GetOnTheBooksRevenue() CurrencyAmountType`

GetOnTheBooksRevenue returns the OnTheBooksRevenue field if non-nil, zero value otherwise.

### GetOnTheBooksRevenueOk

`func (o *EventInfoType) GetOnTheBooksRevenueOk() (*CurrencyAmountType, bool)`

GetOnTheBooksRevenueOk returns a tuple with the OnTheBooksRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnTheBooksRevenue

`func (o *EventInfoType) SetOnTheBooksRevenue(v CurrencyAmountType)`

SetOnTheBooksRevenue sets OnTheBooksRevenue field to given value.

### HasOnTheBooksRevenue

`func (o *EventInfoType) HasOnTheBooksRevenue() bool`

HasOnTheBooksRevenue returns a boolean if a field has been set.

### GetProcessInstructions

`func (o *EventInfoType) GetProcessInstructions() EventProcessInstructionsType`

GetProcessInstructions returns the ProcessInstructions field if non-nil, zero value otherwise.

### GetProcessInstructionsOk

`func (o *EventInfoType) GetProcessInstructionsOk() (*EventProcessInstructionsType, bool)`

GetProcessInstructionsOk returns a tuple with the ProcessInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessInstructions

`func (o *EventInfoType) SetProcessInstructions(v EventProcessInstructionsType)`

SetProcessInstructions sets ProcessInstructions field to given value.

### HasProcessInstructions

`func (o *EventInfoType) HasProcessInstructions() bool`

HasProcessInstructions returns a boolean if a field has been set.

### GetSubEventsDetail

`func (o *EventInfoType) GetSubEventsDetail() []LightEventDetailType`

GetSubEventsDetail returns the SubEventsDetail field if non-nil, zero value otherwise.

### GetSubEventsDetailOk

`func (o *EventInfoType) GetSubEventsDetailOk() (*[]LightEventDetailType, bool)`

GetSubEventsDetailOk returns a tuple with the SubEventsDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubEventsDetail

`func (o *EventInfoType) SetSubEventsDetail(v []LightEventDetailType)`

SetSubEventsDetail sets SubEventsDetail field to given value.

### HasSubEventsDetail

`func (o *EventInfoType) HasSubEventsDetail() bool`

HasSubEventsDetail returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


