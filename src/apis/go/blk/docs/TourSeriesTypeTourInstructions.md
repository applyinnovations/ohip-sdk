# TourSeriesTypeTourInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rooms** | Pointer to **bool** | When true, this will copy the source block&#39;s room allocation to the tour series blocks. | [optional] 
**BlockComments** | Pointer to **bool** | When true, this will copy the source block&#39;s comments to the tour series blocks. | [optional] 
**Events** | Pointer to **bool** | When true, this will copy the source block&#39;s events to the tour series blocks. | [optional] 
**EventComments** | Pointer to **bool** | When true, this will copy the source block&#39;s event comments to the events of the tour series blocks. | [optional] 
**Resources** | Pointer to **bool** | When true, this will copy the source block&#39;s resources to the tour series blocks. | [optional] 
**ResourceComments** | Pointer to **bool** | When true, this will copy the source block&#39;s resource comments to the resources of the tour series blocks. | [optional] 
**ContractBilling** | Pointer to **bool** | When true, this will copy the source block&#39;s contract billing information to the tour series blocks. | [optional] 
**GroupProfile** | Pointer to **bool** | When true, this will copy the source block&#39;s group profile to the tour series blocks. | [optional] 
**AdjustDecisionAndFollowupDate** | Pointer to **bool** | When true, this will adjust the decision and followup date on the tour series blocks to the same offset as the source block. | [optional] 
**ComplimentaryInfo** | Pointer to **bool** | When true, this will copy the source block&#39;s complimentary information to the tour series blocks. | [optional] 
**Rates** | Pointer to **bool** | When true, this will copy the source block&#39;s rate codes to the tour series blocks. | [optional] 

## Methods

### NewTourSeriesTypeTourInstructions

`func NewTourSeriesTypeTourInstructions() *TourSeriesTypeTourInstructions`

NewTourSeriesTypeTourInstructions instantiates a new TourSeriesTypeTourInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTourSeriesTypeTourInstructionsWithDefaults

`func NewTourSeriesTypeTourInstructionsWithDefaults() *TourSeriesTypeTourInstructions`

NewTourSeriesTypeTourInstructionsWithDefaults instantiates a new TourSeriesTypeTourInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRooms

`func (o *TourSeriesTypeTourInstructions) GetRooms() bool`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *TourSeriesTypeTourInstructions) GetRoomsOk() (*bool, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *TourSeriesTypeTourInstructions) SetRooms(v bool)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *TourSeriesTypeTourInstructions) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetBlockComments

`func (o *TourSeriesTypeTourInstructions) GetBlockComments() bool`

GetBlockComments returns the BlockComments field if non-nil, zero value otherwise.

### GetBlockCommentsOk

`func (o *TourSeriesTypeTourInstructions) GetBlockCommentsOk() (*bool, bool)`

GetBlockCommentsOk returns a tuple with the BlockComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockComments

`func (o *TourSeriesTypeTourInstructions) SetBlockComments(v bool)`

SetBlockComments sets BlockComments field to given value.

### HasBlockComments

`func (o *TourSeriesTypeTourInstructions) HasBlockComments() bool`

HasBlockComments returns a boolean if a field has been set.

### GetEvents

`func (o *TourSeriesTypeTourInstructions) GetEvents() bool`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *TourSeriesTypeTourInstructions) GetEventsOk() (*bool, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *TourSeriesTypeTourInstructions) SetEvents(v bool)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *TourSeriesTypeTourInstructions) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetEventComments

`func (o *TourSeriesTypeTourInstructions) GetEventComments() bool`

GetEventComments returns the EventComments field if non-nil, zero value otherwise.

### GetEventCommentsOk

`func (o *TourSeriesTypeTourInstructions) GetEventCommentsOk() (*bool, bool)`

GetEventCommentsOk returns a tuple with the EventComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventComments

`func (o *TourSeriesTypeTourInstructions) SetEventComments(v bool)`

SetEventComments sets EventComments field to given value.

### HasEventComments

`func (o *TourSeriesTypeTourInstructions) HasEventComments() bool`

HasEventComments returns a boolean if a field has been set.

### GetResources

`func (o *TourSeriesTypeTourInstructions) GetResources() bool`

GetResources returns the Resources field if non-nil, zero value otherwise.

### GetResourcesOk

`func (o *TourSeriesTypeTourInstructions) GetResourcesOk() (*bool, bool)`

GetResourcesOk returns a tuple with the Resources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResources

`func (o *TourSeriesTypeTourInstructions) SetResources(v bool)`

SetResources sets Resources field to given value.

### HasResources

`func (o *TourSeriesTypeTourInstructions) HasResources() bool`

HasResources returns a boolean if a field has been set.

### GetResourceComments

`func (o *TourSeriesTypeTourInstructions) GetResourceComments() bool`

GetResourceComments returns the ResourceComments field if non-nil, zero value otherwise.

### GetResourceCommentsOk

`func (o *TourSeriesTypeTourInstructions) GetResourceCommentsOk() (*bool, bool)`

GetResourceCommentsOk returns a tuple with the ResourceComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceComments

`func (o *TourSeriesTypeTourInstructions) SetResourceComments(v bool)`

SetResourceComments sets ResourceComments field to given value.

### HasResourceComments

`func (o *TourSeriesTypeTourInstructions) HasResourceComments() bool`

HasResourceComments returns a boolean if a field has been set.

### GetContractBilling

`func (o *TourSeriesTypeTourInstructions) GetContractBilling() bool`

GetContractBilling returns the ContractBilling field if non-nil, zero value otherwise.

### GetContractBillingOk

`func (o *TourSeriesTypeTourInstructions) GetContractBillingOk() (*bool, bool)`

GetContractBillingOk returns a tuple with the ContractBilling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractBilling

`func (o *TourSeriesTypeTourInstructions) SetContractBilling(v bool)`

SetContractBilling sets ContractBilling field to given value.

### HasContractBilling

`func (o *TourSeriesTypeTourInstructions) HasContractBilling() bool`

HasContractBilling returns a boolean if a field has been set.

### GetGroupProfile

`func (o *TourSeriesTypeTourInstructions) GetGroupProfile() bool`

GetGroupProfile returns the GroupProfile field if non-nil, zero value otherwise.

### GetGroupProfileOk

`func (o *TourSeriesTypeTourInstructions) GetGroupProfileOk() (*bool, bool)`

GetGroupProfileOk returns a tuple with the GroupProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupProfile

`func (o *TourSeriesTypeTourInstructions) SetGroupProfile(v bool)`

SetGroupProfile sets GroupProfile field to given value.

### HasGroupProfile

`func (o *TourSeriesTypeTourInstructions) HasGroupProfile() bool`

HasGroupProfile returns a boolean if a field has been set.

### GetAdjustDecisionAndFollowupDate

`func (o *TourSeriesTypeTourInstructions) GetAdjustDecisionAndFollowupDate() bool`

GetAdjustDecisionAndFollowupDate returns the AdjustDecisionAndFollowupDate field if non-nil, zero value otherwise.

### GetAdjustDecisionAndFollowupDateOk

`func (o *TourSeriesTypeTourInstructions) GetAdjustDecisionAndFollowupDateOk() (*bool, bool)`

GetAdjustDecisionAndFollowupDateOk returns a tuple with the AdjustDecisionAndFollowupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustDecisionAndFollowupDate

`func (o *TourSeriesTypeTourInstructions) SetAdjustDecisionAndFollowupDate(v bool)`

SetAdjustDecisionAndFollowupDate sets AdjustDecisionAndFollowupDate field to given value.

### HasAdjustDecisionAndFollowupDate

`func (o *TourSeriesTypeTourInstructions) HasAdjustDecisionAndFollowupDate() bool`

HasAdjustDecisionAndFollowupDate returns a boolean if a field has been set.

### GetComplimentaryInfo

`func (o *TourSeriesTypeTourInstructions) GetComplimentaryInfo() bool`

GetComplimentaryInfo returns the ComplimentaryInfo field if non-nil, zero value otherwise.

### GetComplimentaryInfoOk

`func (o *TourSeriesTypeTourInstructions) GetComplimentaryInfoOk() (*bool, bool)`

GetComplimentaryInfoOk returns a tuple with the ComplimentaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentaryInfo

`func (o *TourSeriesTypeTourInstructions) SetComplimentaryInfo(v bool)`

SetComplimentaryInfo sets ComplimentaryInfo field to given value.

### HasComplimentaryInfo

`func (o *TourSeriesTypeTourInstructions) HasComplimentaryInfo() bool`

HasComplimentaryInfo returns a boolean if a field has been set.

### GetRates

`func (o *TourSeriesTypeTourInstructions) GetRates() bool`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *TourSeriesTypeTourInstructions) GetRatesOk() (*bool, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *TourSeriesTypeTourInstructions) SetRates(v bool)`

SetRates sets Rates field to given value.

### HasRates

`func (o *TourSeriesTypeTourInstructions) HasRates() bool`

HasRates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


