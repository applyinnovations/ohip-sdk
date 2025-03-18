# CopyBlockTypeCopyInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rooms** | Pointer to **bool** | When true, this will copy the source block&#39;s room allocation counts to the new block. | [optional] 
**RateCode** | Pointer to **bool** | When true, this will copy the source block&#39;s rate code to the new block. | [optional] 
**BlockComments** | Pointer to **bool** | When true, this will copy the source block&#39;s comments to the new block. | [optional] 
**BlockCode** | Pointer to **bool** | When true, this will copy the block code of the source block to the new block. | [optional] 
**Catering** | Pointer to **bool** | When true, this will copy the source block&#39;s catering information to the new block. | [optional] 
**Events** | Pointer to **bool** | When true, this will copy the source block&#39;s events to the new block. | [optional] 
**EventComments** | Pointer to **bool** | When true, this will copy the source block&#39;s event comments to the events of the new block. | [optional] 
**Resources** | Pointer to **bool** | When true, this will copy the source block&#39;s resources to the new block. | [optional] 
**ResourceComments** | Pointer to **bool** | When true, this will copy the source block&#39;s resource comments to the resources of the new block. | [optional] 
**ResourcePrices** | Pointer to **bool** | When true, this will copy the source block&#39;s resource price amounts to the resources of the new block. | [optional] 
**AttendeesCount** | Pointer to **bool** | When true, this will copy the source block&#39;s number of attendees to the new block. | [optional] 
**ContractBilling** | Pointer to **bool** | When true, this will copy the source block&#39;s contract billing information to the new block and make the source block a Master Block. | [optional] 
**GroupProfile** | Pointer to **bool** | When true, this will copy the source block&#39;s group profile to the new block. | [optional] 
**AlternateDates** | Pointer to **bool** | When true, this will copy the source block&#39;s alternate dates to the new block. | [optional] 
**RatesOfAlternateDates** | Pointer to **bool** | When true, this will copy the rate amounts of the source block&#39;s alternate dates to the alternate dates of the new block. | [optional] 
**PotentialProfile** | Pointer to **bool** | When true, this will create the new block in the same potential profile as the source block. | [optional] 
**AdjustDecisionAndFollowupDate** | Pointer to **bool** | When true, this will adjust the decision and followup date on the new block to the same offset as the source block. | [optional] 
**CreateAsSubBlock** | Pointer to **bool** | When true, this will copy the new block as a sub block of the source block. | [optional] 
**CreateAsTourBlock** | Pointer to **bool** | When true, this will create the new block in the same tour series as the source block. | [optional] 
**Overbook** | Pointer to **bool** | When true, this will overbook the block. | [optional] 
**ContractGrid** | Pointer to **bool** | Contract grid of the source Block will be copied to the contract grid of the new Block | [optional] 
**ChangeNotes** | Pointer to **bool** | Event notes of note code &#39;CH&#39; will be copied from source events to new events on the Block copy. | [optional] 
**OtherResources** | Pointer to **bool** | All event resources, such as menus and item resources are copied with the events to the new Block. Include Resource Notes and Copy Resource Prices are displayed and enabled. | [optional] 
**EventForecastFigures** | Pointer to **bool** | Event forecast figures will be copied from the source to the events of the new Block. | [optional] 
**MasterBlock** | Pointer to **bool** | When true, Master block will be copied along with the sub blocks. | [optional] 
**CopySubBlockAsRegularBlock** | Pointer to **bool** | When true, this sub block will be copied as a new regular block. | [optional] 

## Methods

### NewCopyBlockTypeCopyInstructions

`func NewCopyBlockTypeCopyInstructions() *CopyBlockTypeCopyInstructions`

NewCopyBlockTypeCopyInstructions instantiates a new CopyBlockTypeCopyInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyBlockTypeCopyInstructionsWithDefaults

`func NewCopyBlockTypeCopyInstructionsWithDefaults() *CopyBlockTypeCopyInstructions`

NewCopyBlockTypeCopyInstructionsWithDefaults instantiates a new CopyBlockTypeCopyInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRooms

`func (o *CopyBlockTypeCopyInstructions) GetRooms() bool`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *CopyBlockTypeCopyInstructions) GetRoomsOk() (*bool, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *CopyBlockTypeCopyInstructions) SetRooms(v bool)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *CopyBlockTypeCopyInstructions) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetRateCode

`func (o *CopyBlockTypeCopyInstructions) GetRateCode() bool`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *CopyBlockTypeCopyInstructions) GetRateCodeOk() (*bool, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *CopyBlockTypeCopyInstructions) SetRateCode(v bool)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *CopyBlockTypeCopyInstructions) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetBlockComments

`func (o *CopyBlockTypeCopyInstructions) GetBlockComments() bool`

GetBlockComments returns the BlockComments field if non-nil, zero value otherwise.

### GetBlockCommentsOk

`func (o *CopyBlockTypeCopyInstructions) GetBlockCommentsOk() (*bool, bool)`

GetBlockCommentsOk returns a tuple with the BlockComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockComments

`func (o *CopyBlockTypeCopyInstructions) SetBlockComments(v bool)`

SetBlockComments sets BlockComments field to given value.

### HasBlockComments

`func (o *CopyBlockTypeCopyInstructions) HasBlockComments() bool`

HasBlockComments returns a boolean if a field has been set.

### GetBlockCode

`func (o *CopyBlockTypeCopyInstructions) GetBlockCode() bool`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *CopyBlockTypeCopyInstructions) GetBlockCodeOk() (*bool, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *CopyBlockTypeCopyInstructions) SetBlockCode(v bool)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *CopyBlockTypeCopyInstructions) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetCatering

`func (o *CopyBlockTypeCopyInstructions) GetCatering() bool`

GetCatering returns the Catering field if non-nil, zero value otherwise.

### GetCateringOk

`func (o *CopyBlockTypeCopyInstructions) GetCateringOk() (*bool, bool)`

GetCateringOk returns a tuple with the Catering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatering

`func (o *CopyBlockTypeCopyInstructions) SetCatering(v bool)`

SetCatering sets Catering field to given value.

### HasCatering

`func (o *CopyBlockTypeCopyInstructions) HasCatering() bool`

HasCatering returns a boolean if a field has been set.

### GetEvents

`func (o *CopyBlockTypeCopyInstructions) GetEvents() bool`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *CopyBlockTypeCopyInstructions) GetEventsOk() (*bool, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *CopyBlockTypeCopyInstructions) SetEvents(v bool)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *CopyBlockTypeCopyInstructions) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetEventComments

`func (o *CopyBlockTypeCopyInstructions) GetEventComments() bool`

GetEventComments returns the EventComments field if non-nil, zero value otherwise.

### GetEventCommentsOk

`func (o *CopyBlockTypeCopyInstructions) GetEventCommentsOk() (*bool, bool)`

GetEventCommentsOk returns a tuple with the EventComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventComments

`func (o *CopyBlockTypeCopyInstructions) SetEventComments(v bool)`

SetEventComments sets EventComments field to given value.

### HasEventComments

`func (o *CopyBlockTypeCopyInstructions) HasEventComments() bool`

HasEventComments returns a boolean if a field has been set.

### GetResources

`func (o *CopyBlockTypeCopyInstructions) GetResources() bool`

GetResources returns the Resources field if non-nil, zero value otherwise.

### GetResourcesOk

`func (o *CopyBlockTypeCopyInstructions) GetResourcesOk() (*bool, bool)`

GetResourcesOk returns a tuple with the Resources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResources

`func (o *CopyBlockTypeCopyInstructions) SetResources(v bool)`

SetResources sets Resources field to given value.

### HasResources

`func (o *CopyBlockTypeCopyInstructions) HasResources() bool`

HasResources returns a boolean if a field has been set.

### GetResourceComments

`func (o *CopyBlockTypeCopyInstructions) GetResourceComments() bool`

GetResourceComments returns the ResourceComments field if non-nil, zero value otherwise.

### GetResourceCommentsOk

`func (o *CopyBlockTypeCopyInstructions) GetResourceCommentsOk() (*bool, bool)`

GetResourceCommentsOk returns a tuple with the ResourceComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceComments

`func (o *CopyBlockTypeCopyInstructions) SetResourceComments(v bool)`

SetResourceComments sets ResourceComments field to given value.

### HasResourceComments

`func (o *CopyBlockTypeCopyInstructions) HasResourceComments() bool`

HasResourceComments returns a boolean if a field has been set.

### GetResourcePrices

`func (o *CopyBlockTypeCopyInstructions) GetResourcePrices() bool`

GetResourcePrices returns the ResourcePrices field if non-nil, zero value otherwise.

### GetResourcePricesOk

`func (o *CopyBlockTypeCopyInstructions) GetResourcePricesOk() (*bool, bool)`

GetResourcePricesOk returns a tuple with the ResourcePrices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourcePrices

`func (o *CopyBlockTypeCopyInstructions) SetResourcePrices(v bool)`

SetResourcePrices sets ResourcePrices field to given value.

### HasResourcePrices

`func (o *CopyBlockTypeCopyInstructions) HasResourcePrices() bool`

HasResourcePrices returns a boolean if a field has been set.

### GetAttendeesCount

`func (o *CopyBlockTypeCopyInstructions) GetAttendeesCount() bool`

GetAttendeesCount returns the AttendeesCount field if non-nil, zero value otherwise.

### GetAttendeesCountOk

`func (o *CopyBlockTypeCopyInstructions) GetAttendeesCountOk() (*bool, bool)`

GetAttendeesCountOk returns a tuple with the AttendeesCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendeesCount

`func (o *CopyBlockTypeCopyInstructions) SetAttendeesCount(v bool)`

SetAttendeesCount sets AttendeesCount field to given value.

### HasAttendeesCount

`func (o *CopyBlockTypeCopyInstructions) HasAttendeesCount() bool`

HasAttendeesCount returns a boolean if a field has been set.

### GetContractBilling

`func (o *CopyBlockTypeCopyInstructions) GetContractBilling() bool`

GetContractBilling returns the ContractBilling field if non-nil, zero value otherwise.

### GetContractBillingOk

`func (o *CopyBlockTypeCopyInstructions) GetContractBillingOk() (*bool, bool)`

GetContractBillingOk returns a tuple with the ContractBilling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractBilling

`func (o *CopyBlockTypeCopyInstructions) SetContractBilling(v bool)`

SetContractBilling sets ContractBilling field to given value.

### HasContractBilling

`func (o *CopyBlockTypeCopyInstructions) HasContractBilling() bool`

HasContractBilling returns a boolean if a field has been set.

### GetGroupProfile

`func (o *CopyBlockTypeCopyInstructions) GetGroupProfile() bool`

GetGroupProfile returns the GroupProfile field if non-nil, zero value otherwise.

### GetGroupProfileOk

`func (o *CopyBlockTypeCopyInstructions) GetGroupProfileOk() (*bool, bool)`

GetGroupProfileOk returns a tuple with the GroupProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupProfile

`func (o *CopyBlockTypeCopyInstructions) SetGroupProfile(v bool)`

SetGroupProfile sets GroupProfile field to given value.

### HasGroupProfile

`func (o *CopyBlockTypeCopyInstructions) HasGroupProfile() bool`

HasGroupProfile returns a boolean if a field has been set.

### GetAlternateDates

`func (o *CopyBlockTypeCopyInstructions) GetAlternateDates() bool`

GetAlternateDates returns the AlternateDates field if non-nil, zero value otherwise.

### GetAlternateDatesOk

`func (o *CopyBlockTypeCopyInstructions) GetAlternateDatesOk() (*bool, bool)`

GetAlternateDatesOk returns a tuple with the AlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateDates

`func (o *CopyBlockTypeCopyInstructions) SetAlternateDates(v bool)`

SetAlternateDates sets AlternateDates field to given value.

### HasAlternateDates

`func (o *CopyBlockTypeCopyInstructions) HasAlternateDates() bool`

HasAlternateDates returns a boolean if a field has been set.

### GetRatesOfAlternateDates

`func (o *CopyBlockTypeCopyInstructions) GetRatesOfAlternateDates() bool`

GetRatesOfAlternateDates returns the RatesOfAlternateDates field if non-nil, zero value otherwise.

### GetRatesOfAlternateDatesOk

`func (o *CopyBlockTypeCopyInstructions) GetRatesOfAlternateDatesOk() (*bool, bool)`

GetRatesOfAlternateDatesOk returns a tuple with the RatesOfAlternateDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatesOfAlternateDates

`func (o *CopyBlockTypeCopyInstructions) SetRatesOfAlternateDates(v bool)`

SetRatesOfAlternateDates sets RatesOfAlternateDates field to given value.

### HasRatesOfAlternateDates

`func (o *CopyBlockTypeCopyInstructions) HasRatesOfAlternateDates() bool`

HasRatesOfAlternateDates returns a boolean if a field has been set.

### GetPotentialProfile

`func (o *CopyBlockTypeCopyInstructions) GetPotentialProfile() bool`

GetPotentialProfile returns the PotentialProfile field if non-nil, zero value otherwise.

### GetPotentialProfileOk

`func (o *CopyBlockTypeCopyInstructions) GetPotentialProfileOk() (*bool, bool)`

GetPotentialProfileOk returns a tuple with the PotentialProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPotentialProfile

`func (o *CopyBlockTypeCopyInstructions) SetPotentialProfile(v bool)`

SetPotentialProfile sets PotentialProfile field to given value.

### HasPotentialProfile

`func (o *CopyBlockTypeCopyInstructions) HasPotentialProfile() bool`

HasPotentialProfile returns a boolean if a field has been set.

### GetAdjustDecisionAndFollowupDate

`func (o *CopyBlockTypeCopyInstructions) GetAdjustDecisionAndFollowupDate() bool`

GetAdjustDecisionAndFollowupDate returns the AdjustDecisionAndFollowupDate field if non-nil, zero value otherwise.

### GetAdjustDecisionAndFollowupDateOk

`func (o *CopyBlockTypeCopyInstructions) GetAdjustDecisionAndFollowupDateOk() (*bool, bool)`

GetAdjustDecisionAndFollowupDateOk returns a tuple with the AdjustDecisionAndFollowupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustDecisionAndFollowupDate

`func (o *CopyBlockTypeCopyInstructions) SetAdjustDecisionAndFollowupDate(v bool)`

SetAdjustDecisionAndFollowupDate sets AdjustDecisionAndFollowupDate field to given value.

### HasAdjustDecisionAndFollowupDate

`func (o *CopyBlockTypeCopyInstructions) HasAdjustDecisionAndFollowupDate() bool`

HasAdjustDecisionAndFollowupDate returns a boolean if a field has been set.

### GetCreateAsSubBlock

`func (o *CopyBlockTypeCopyInstructions) GetCreateAsSubBlock() bool`

GetCreateAsSubBlock returns the CreateAsSubBlock field if non-nil, zero value otherwise.

### GetCreateAsSubBlockOk

`func (o *CopyBlockTypeCopyInstructions) GetCreateAsSubBlockOk() (*bool, bool)`

GetCreateAsSubBlockOk returns a tuple with the CreateAsSubBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateAsSubBlock

`func (o *CopyBlockTypeCopyInstructions) SetCreateAsSubBlock(v bool)`

SetCreateAsSubBlock sets CreateAsSubBlock field to given value.

### HasCreateAsSubBlock

`func (o *CopyBlockTypeCopyInstructions) HasCreateAsSubBlock() bool`

HasCreateAsSubBlock returns a boolean if a field has been set.

### GetCreateAsTourBlock

`func (o *CopyBlockTypeCopyInstructions) GetCreateAsTourBlock() bool`

GetCreateAsTourBlock returns the CreateAsTourBlock field if non-nil, zero value otherwise.

### GetCreateAsTourBlockOk

`func (o *CopyBlockTypeCopyInstructions) GetCreateAsTourBlockOk() (*bool, bool)`

GetCreateAsTourBlockOk returns a tuple with the CreateAsTourBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateAsTourBlock

`func (o *CopyBlockTypeCopyInstructions) SetCreateAsTourBlock(v bool)`

SetCreateAsTourBlock sets CreateAsTourBlock field to given value.

### HasCreateAsTourBlock

`func (o *CopyBlockTypeCopyInstructions) HasCreateAsTourBlock() bool`

HasCreateAsTourBlock returns a boolean if a field has been set.

### GetOverbook

`func (o *CopyBlockTypeCopyInstructions) GetOverbook() bool`

GetOverbook returns the Overbook field if non-nil, zero value otherwise.

### GetOverbookOk

`func (o *CopyBlockTypeCopyInstructions) GetOverbookOk() (*bool, bool)`

GetOverbookOk returns a tuple with the Overbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbook

`func (o *CopyBlockTypeCopyInstructions) SetOverbook(v bool)`

SetOverbook sets Overbook field to given value.

### HasOverbook

`func (o *CopyBlockTypeCopyInstructions) HasOverbook() bool`

HasOverbook returns a boolean if a field has been set.

### GetContractGrid

`func (o *CopyBlockTypeCopyInstructions) GetContractGrid() bool`

GetContractGrid returns the ContractGrid field if non-nil, zero value otherwise.

### GetContractGridOk

`func (o *CopyBlockTypeCopyInstructions) GetContractGridOk() (*bool, bool)`

GetContractGridOk returns a tuple with the ContractGrid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractGrid

`func (o *CopyBlockTypeCopyInstructions) SetContractGrid(v bool)`

SetContractGrid sets ContractGrid field to given value.

### HasContractGrid

`func (o *CopyBlockTypeCopyInstructions) HasContractGrid() bool`

HasContractGrid returns a boolean if a field has been set.

### GetChangeNotes

`func (o *CopyBlockTypeCopyInstructions) GetChangeNotes() bool`

GetChangeNotes returns the ChangeNotes field if non-nil, zero value otherwise.

### GetChangeNotesOk

`func (o *CopyBlockTypeCopyInstructions) GetChangeNotesOk() (*bool, bool)`

GetChangeNotesOk returns a tuple with the ChangeNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeNotes

`func (o *CopyBlockTypeCopyInstructions) SetChangeNotes(v bool)`

SetChangeNotes sets ChangeNotes field to given value.

### HasChangeNotes

`func (o *CopyBlockTypeCopyInstructions) HasChangeNotes() bool`

HasChangeNotes returns a boolean if a field has been set.

### GetOtherResources

`func (o *CopyBlockTypeCopyInstructions) GetOtherResources() bool`

GetOtherResources returns the OtherResources field if non-nil, zero value otherwise.

### GetOtherResourcesOk

`func (o *CopyBlockTypeCopyInstructions) GetOtherResourcesOk() (*bool, bool)`

GetOtherResourcesOk returns a tuple with the OtherResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherResources

`func (o *CopyBlockTypeCopyInstructions) SetOtherResources(v bool)`

SetOtherResources sets OtherResources field to given value.

### HasOtherResources

`func (o *CopyBlockTypeCopyInstructions) HasOtherResources() bool`

HasOtherResources returns a boolean if a field has been set.

### GetEventForecastFigures

`func (o *CopyBlockTypeCopyInstructions) GetEventForecastFigures() bool`

GetEventForecastFigures returns the EventForecastFigures field if non-nil, zero value otherwise.

### GetEventForecastFiguresOk

`func (o *CopyBlockTypeCopyInstructions) GetEventForecastFiguresOk() (*bool, bool)`

GetEventForecastFiguresOk returns a tuple with the EventForecastFigures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventForecastFigures

`func (o *CopyBlockTypeCopyInstructions) SetEventForecastFigures(v bool)`

SetEventForecastFigures sets EventForecastFigures field to given value.

### HasEventForecastFigures

`func (o *CopyBlockTypeCopyInstructions) HasEventForecastFigures() bool`

HasEventForecastFigures returns a boolean if a field has been set.

### GetMasterBlock

`func (o *CopyBlockTypeCopyInstructions) GetMasterBlock() bool`

GetMasterBlock returns the MasterBlock field if non-nil, zero value otherwise.

### GetMasterBlockOk

`func (o *CopyBlockTypeCopyInstructions) GetMasterBlockOk() (*bool, bool)`

GetMasterBlockOk returns a tuple with the MasterBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterBlock

`func (o *CopyBlockTypeCopyInstructions) SetMasterBlock(v bool)`

SetMasterBlock sets MasterBlock field to given value.

### HasMasterBlock

`func (o *CopyBlockTypeCopyInstructions) HasMasterBlock() bool`

HasMasterBlock returns a boolean if a field has been set.

### GetCopySubBlockAsRegularBlock

`func (o *CopyBlockTypeCopyInstructions) GetCopySubBlockAsRegularBlock() bool`

GetCopySubBlockAsRegularBlock returns the CopySubBlockAsRegularBlock field if non-nil, zero value otherwise.

### GetCopySubBlockAsRegularBlockOk

`func (o *CopyBlockTypeCopyInstructions) GetCopySubBlockAsRegularBlockOk() (*bool, bool)`

GetCopySubBlockAsRegularBlockOk returns a tuple with the CopySubBlockAsRegularBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopySubBlockAsRegularBlock

`func (o *CopyBlockTypeCopyInstructions) SetCopySubBlockAsRegularBlock(v bool)`

SetCopySubBlockAsRegularBlock sets CopySubBlockAsRegularBlock field to given value.

### HasCopySubBlockAsRegularBlock

`func (o *CopyBlockTypeCopyInstructions) HasCopySubBlockAsRegularBlock() bool`

HasCopySubBlockAsRegularBlock returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


