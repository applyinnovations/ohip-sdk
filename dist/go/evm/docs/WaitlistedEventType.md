# WaitlistedEventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AltEventsDetail** | Pointer to [**[]LightEventDetailType**](LightEventDetailType.md) | Pertain event few information about events. | [optional] 
**CurrentEventsHoldingFunctionSpace** | Pointer to [**[]EventInfoType**](EventInfoType.md) | Pertain event information. | [optional] 
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
**Priority** | Pointer to **int32** | Waitlist priority to determine event that gets function space when it becomes available. | [optional] 
**ProcessInstructions** | Pointer to [**EventProcessInstructionsType**](EventProcessInstructionsType.md) |  | [optional] 
**SubEventsDetail** | Pointer to [**[]LightEventDetailType**](LightEventDetailType.md) | Pertain event few information about events. | [optional] 
**UpdateDate** | Pointer to **string** | Date when waitlist was modified. | [optional] 
**UpdateUser** | Pointer to **int32** | User id who modified the waitlist record. | [optional] 
**WaitlistDate** | Pointer to **string** | Date when function space got waitlisted. | [optional] 
**WaitlistId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewWaitlistedEventType

`func NewWaitlistedEventType() *WaitlistedEventType`

NewWaitlistedEventType instantiates a new WaitlistedEventType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWaitlistedEventTypeWithDefaults

`func NewWaitlistedEventTypeWithDefaults() *WaitlistedEventType`

NewWaitlistedEventTypeWithDefaults instantiates a new WaitlistedEventType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAltEventsDetail

`func (o *WaitlistedEventType) GetAltEventsDetail() []LightEventDetailType`

GetAltEventsDetail returns the AltEventsDetail field if non-nil, zero value otherwise.

### GetAltEventsDetailOk

`func (o *WaitlistedEventType) GetAltEventsDetailOk() (*[]LightEventDetailType, bool)`

GetAltEventsDetailOk returns a tuple with the AltEventsDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAltEventsDetail

`func (o *WaitlistedEventType) SetAltEventsDetail(v []LightEventDetailType)`

SetAltEventsDetail sets AltEventsDetail field to given value.

### HasAltEventsDetail

`func (o *WaitlistedEventType) HasAltEventsDetail() bool`

HasAltEventsDetail returns a boolean if a field has been set.

### GetCurrentEventsHoldingFunctionSpace

`func (o *WaitlistedEventType) GetCurrentEventsHoldingFunctionSpace() []EventInfoType`

GetCurrentEventsHoldingFunctionSpace returns the CurrentEventsHoldingFunctionSpace field if non-nil, zero value otherwise.

### GetCurrentEventsHoldingFunctionSpaceOk

`func (o *WaitlistedEventType) GetCurrentEventsHoldingFunctionSpaceOk() (*[]EventInfoType, bool)`

GetCurrentEventsHoldingFunctionSpaceOk returns a tuple with the CurrentEventsHoldingFunctionSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentEventsHoldingFunctionSpace

`func (o *WaitlistedEventType) SetCurrentEventsHoldingFunctionSpace(v []EventInfoType)`

SetCurrentEventsHoldingFunctionSpace sets CurrentEventsHoldingFunctionSpace field to given value.

### HasCurrentEventsHoldingFunctionSpace

`func (o *WaitlistedEventType) HasCurrentEventsHoldingFunctionSpace() bool`

HasCurrentEventsHoldingFunctionSpace returns a boolean if a field has been set.

### GetEventBlockInfo

`func (o *WaitlistedEventType) GetEventBlockInfo() BlockType`

GetEventBlockInfo returns the EventBlockInfo field if non-nil, zero value otherwise.

### GetEventBlockInfoOk

`func (o *WaitlistedEventType) GetEventBlockInfoOk() (*BlockType, bool)`

GetEventBlockInfoOk returns a tuple with the EventBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBlockInfo

`func (o *WaitlistedEventType) SetEventBlockInfo(v BlockType)`

SetEventBlockInfo sets EventBlockInfo field to given value.

### HasEventBlockInfo

`func (o *WaitlistedEventType) HasEventBlockInfo() bool`

HasEventBlockInfo returns a boolean if a field has been set.

### GetEventDetail

`func (o *WaitlistedEventType) GetEventDetail() EventDetailType`

GetEventDetail returns the EventDetail field if non-nil, zero value otherwise.

### GetEventDetailOk

`func (o *WaitlistedEventType) GetEventDetailOk() (*EventDetailType, bool)`

GetEventDetailOk returns a tuple with the EventDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetail

`func (o *WaitlistedEventType) SetEventDetail(v EventDetailType)`

SetEventDetail sets EventDetail field to given value.

### HasEventDetail

`func (o *WaitlistedEventType) HasEventDetail() bool`

HasEventDetail returns a boolean if a field has been set.

### GetEventIndicators

`func (o *WaitlistedEventType) GetEventIndicators() []IndicatorType`

GetEventIndicators returns the EventIndicators field if non-nil, zero value otherwise.

### GetEventIndicatorsOk

`func (o *WaitlistedEventType) GetEventIndicatorsOk() (*[]IndicatorType, bool)`

GetEventIndicatorsOk returns a tuple with the EventIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventIndicators

`func (o *WaitlistedEventType) SetEventIndicators(v []IndicatorType)`

SetEventIndicators sets EventIndicators field to given value.

### HasEventIndicators

`func (o *WaitlistedEventType) HasEventIndicators() bool`

HasEventIndicators returns a boolean if a field has been set.

### GetEventNotes

`func (o *WaitlistedEventType) GetEventNotes() []EventNoteType`

GetEventNotes returns the EventNotes field if non-nil, zero value otherwise.

### GetEventNotesOk

`func (o *WaitlistedEventType) GetEventNotesOk() (*[]EventNoteType, bool)`

GetEventNotesOk returns a tuple with the EventNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventNotes

`func (o *WaitlistedEventType) SetEventNotes(v []EventNoteType)`

SetEventNotes sets EventNotes field to given value.

### HasEventNotes

`func (o *WaitlistedEventType) HasEventNotes() bool`

HasEventNotes returns a boolean if a field has been set.

### GetEventPrimaryInfo

`func (o *WaitlistedEventType) GetEventPrimaryInfo() EventPrimaryInfoType`

GetEventPrimaryInfo returns the EventPrimaryInfo field if non-nil, zero value otherwise.

### GetEventPrimaryInfoOk

`func (o *WaitlistedEventType) GetEventPrimaryInfoOk() (*EventPrimaryInfoType, bool)`

GetEventPrimaryInfoOk returns a tuple with the EventPrimaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventPrimaryInfo

`func (o *WaitlistedEventType) SetEventPrimaryInfo(v EventPrimaryInfoType)`

SetEventPrimaryInfo sets EventPrimaryInfo field to given value.

### HasEventPrimaryInfo

`func (o *WaitlistedEventType) HasEventPrimaryInfo() bool`

HasEventPrimaryInfo returns a boolean if a field has been set.

### GetEventResources

`func (o *WaitlistedEventType) GetEventResources() []CateringEventResourceType`

GetEventResources returns the EventResources field if non-nil, zero value otherwise.

### GetEventResourcesOk

`func (o *WaitlistedEventType) GetEventResourcesOk() (*[]CateringEventResourceType, bool)`

GetEventResourcesOk returns a tuple with the EventResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventResources

`func (o *WaitlistedEventType) SetEventResources(v []CateringEventResourceType)`

SetEventResources sets EventResources field to given value.

### HasEventResources

`func (o *WaitlistedEventType) HasEventResources() bool`

HasEventResources returns a boolean if a field has been set.

### GetEventRevenues

`func (o *WaitlistedEventType) GetEventRevenues() EventRevenuesInformationType`

GetEventRevenues returns the EventRevenues field if non-nil, zero value otherwise.

### GetEventRevenuesOk

`func (o *WaitlistedEventType) GetEventRevenuesOk() (*EventRevenuesInformationType, bool)`

GetEventRevenuesOk returns a tuple with the EventRevenues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventRevenues

`func (o *WaitlistedEventType) SetEventRevenues(v EventRevenuesInformationType)`

SetEventRevenues sets EventRevenues field to given value.

### HasEventRevenues

`func (o *WaitlistedEventType) HasEventRevenues() bool`

HasEventRevenues returns a boolean if a field has been set.

### GetFunctionSpaceInformation

`func (o *WaitlistedEventType) GetFunctionSpaceInformation() EventFunctionSpaceType`

GetFunctionSpaceInformation returns the FunctionSpaceInformation field if non-nil, zero value otherwise.

### GetFunctionSpaceInformationOk

`func (o *WaitlistedEventType) GetFunctionSpaceInformationOk() (*EventFunctionSpaceType, bool)`

GetFunctionSpaceInformationOk returns a tuple with the FunctionSpaceInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceInformation

`func (o *WaitlistedEventType) SetFunctionSpaceInformation(v EventFunctionSpaceType)`

SetFunctionSpaceInformation sets FunctionSpaceInformation field to given value.

### HasFunctionSpaceInformation

`func (o *WaitlistedEventType) HasFunctionSpaceInformation() bool`

HasFunctionSpaceInformation returns a boolean if a field has been set.

### GetMasterEventDetail

`func (o *WaitlistedEventType) GetMasterEventDetail() LightEventDetailType`

GetMasterEventDetail returns the MasterEventDetail field if non-nil, zero value otherwise.

### GetMasterEventDetailOk

`func (o *WaitlistedEventType) GetMasterEventDetailOk() (*LightEventDetailType, bool)`

GetMasterEventDetailOk returns a tuple with the MasterEventDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEventDetail

`func (o *WaitlistedEventType) SetMasterEventDetail(v LightEventDetailType)`

SetMasterEventDetail sets MasterEventDetail field to given value.

### HasMasterEventDetail

`func (o *WaitlistedEventType) HasMasterEventDetail() bool`

HasMasterEventDetail returns a boolean if a field has been set.

### GetOnTheBooksRevenue

`func (o *WaitlistedEventType) GetOnTheBooksRevenue() CurrencyAmountType`

GetOnTheBooksRevenue returns the OnTheBooksRevenue field if non-nil, zero value otherwise.

### GetOnTheBooksRevenueOk

`func (o *WaitlistedEventType) GetOnTheBooksRevenueOk() (*CurrencyAmountType, bool)`

GetOnTheBooksRevenueOk returns a tuple with the OnTheBooksRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnTheBooksRevenue

`func (o *WaitlistedEventType) SetOnTheBooksRevenue(v CurrencyAmountType)`

SetOnTheBooksRevenue sets OnTheBooksRevenue field to given value.

### HasOnTheBooksRevenue

`func (o *WaitlistedEventType) HasOnTheBooksRevenue() bool`

HasOnTheBooksRevenue returns a boolean if a field has been set.

### GetPriority

`func (o *WaitlistedEventType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *WaitlistedEventType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *WaitlistedEventType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *WaitlistedEventType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetProcessInstructions

`func (o *WaitlistedEventType) GetProcessInstructions() EventProcessInstructionsType`

GetProcessInstructions returns the ProcessInstructions field if non-nil, zero value otherwise.

### GetProcessInstructionsOk

`func (o *WaitlistedEventType) GetProcessInstructionsOk() (*EventProcessInstructionsType, bool)`

GetProcessInstructionsOk returns a tuple with the ProcessInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessInstructions

`func (o *WaitlistedEventType) SetProcessInstructions(v EventProcessInstructionsType)`

SetProcessInstructions sets ProcessInstructions field to given value.

### HasProcessInstructions

`func (o *WaitlistedEventType) HasProcessInstructions() bool`

HasProcessInstructions returns a boolean if a field has been set.

### GetSubEventsDetail

`func (o *WaitlistedEventType) GetSubEventsDetail() []LightEventDetailType`

GetSubEventsDetail returns the SubEventsDetail field if non-nil, zero value otherwise.

### GetSubEventsDetailOk

`func (o *WaitlistedEventType) GetSubEventsDetailOk() (*[]LightEventDetailType, bool)`

GetSubEventsDetailOk returns a tuple with the SubEventsDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubEventsDetail

`func (o *WaitlistedEventType) SetSubEventsDetail(v []LightEventDetailType)`

SetSubEventsDetail sets SubEventsDetail field to given value.

### HasSubEventsDetail

`func (o *WaitlistedEventType) HasSubEventsDetail() bool`

HasSubEventsDetail returns a boolean if a field has been set.

### GetUpdateDate

`func (o *WaitlistedEventType) GetUpdateDate() string`

GetUpdateDate returns the UpdateDate field if non-nil, zero value otherwise.

### GetUpdateDateOk

`func (o *WaitlistedEventType) GetUpdateDateOk() (*string, bool)`

GetUpdateDateOk returns a tuple with the UpdateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateDate

`func (o *WaitlistedEventType) SetUpdateDate(v string)`

SetUpdateDate sets UpdateDate field to given value.

### HasUpdateDate

`func (o *WaitlistedEventType) HasUpdateDate() bool`

HasUpdateDate returns a boolean if a field has been set.

### GetUpdateUser

`func (o *WaitlistedEventType) GetUpdateUser() int32`

GetUpdateUser returns the UpdateUser field if non-nil, zero value otherwise.

### GetUpdateUserOk

`func (o *WaitlistedEventType) GetUpdateUserOk() (*int32, bool)`

GetUpdateUserOk returns a tuple with the UpdateUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateUser

`func (o *WaitlistedEventType) SetUpdateUser(v int32)`

SetUpdateUser sets UpdateUser field to given value.

### HasUpdateUser

`func (o *WaitlistedEventType) HasUpdateUser() bool`

HasUpdateUser returns a boolean if a field has been set.

### GetWaitlistDate

`func (o *WaitlistedEventType) GetWaitlistDate() string`

GetWaitlistDate returns the WaitlistDate field if non-nil, zero value otherwise.

### GetWaitlistDateOk

`func (o *WaitlistedEventType) GetWaitlistDateOk() (*string, bool)`

GetWaitlistDateOk returns a tuple with the WaitlistDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistDate

`func (o *WaitlistedEventType) SetWaitlistDate(v string)`

SetWaitlistDate sets WaitlistDate field to given value.

### HasWaitlistDate

`func (o *WaitlistedEventType) HasWaitlistDate() bool`

HasWaitlistDate returns a boolean if a field has been set.

### GetWaitlistId

`func (o *WaitlistedEventType) GetWaitlistId() UniqueIDType`

GetWaitlistId returns the WaitlistId field if non-nil, zero value otherwise.

### GetWaitlistIdOk

`func (o *WaitlistedEventType) GetWaitlistIdOk() (*UniqueIDType, bool)`

GetWaitlistIdOk returns a tuple with the WaitlistId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistId

`func (o *WaitlistedEventType) SetWaitlistId(v UniqueIDType)`

SetWaitlistId sets WaitlistId field to given value.

### HasWaitlistId

`func (o *WaitlistedEventType) HasWaitlistId() bool`

HasWaitlistId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


