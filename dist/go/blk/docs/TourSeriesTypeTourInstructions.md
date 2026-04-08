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
**EventForecastFigures** | Pointer to **bool** | When true, the Forecast Figures from the Source Event will be copied to the Target Events. When false or blank, the Forecast Figures will be considered from Event Forecast Maintenance({host}/operarest/{schemamap}/evm/config/v1/hotels/{hotelId}/eventForecasts) | [optional] 
**EventChangeNotes** | Pointer to **bool** | When true, event change notes will be copied from source to the targeted events. When false or blank, the event change notes will not be copied from source to the targeted events | [optional] 
**CopyEventAttendees** | Pointer to **bool** | When true, copies the same number of attendees as source events to the new business blocks and all the new events. | [optional] 
**Attendees** | Pointer to **int32** | If copyEventAttendees is false, attendees should be provided which copies the number of attendees mentioned to the new business blocks and all the new events. | [optional] 
**CopyResourcePrice** | Pointer to **bool** | When true, the price and discount from the source event resources will be copied to the target event resources. When false or blank resource price need to be considered from resource configuration ({host}/operarest/{schemamap}/evm/config/v1/hotels/{hotelId}/cateringMenus/{menuId}) | [optional] 

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

### GetEventForecastFigures

`func (o *TourSeriesTypeTourInstructions) GetEventForecastFigures() bool`

GetEventForecastFigures returns the EventForecastFigures field if non-nil, zero value otherwise.

### GetEventForecastFiguresOk

`func (o *TourSeriesTypeTourInstructions) GetEventForecastFiguresOk() (*bool, bool)`

GetEventForecastFiguresOk returns a tuple with the EventForecastFigures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventForecastFigures

`func (o *TourSeriesTypeTourInstructions) SetEventForecastFigures(v bool)`

SetEventForecastFigures sets EventForecastFigures field to given value.

### HasEventForecastFigures

`func (o *TourSeriesTypeTourInstructions) HasEventForecastFigures() bool`

HasEventForecastFigures returns a boolean if a field has been set.

### GetEventChangeNotes

`func (o *TourSeriesTypeTourInstructions) GetEventChangeNotes() bool`

GetEventChangeNotes returns the EventChangeNotes field if non-nil, zero value otherwise.

### GetEventChangeNotesOk

`func (o *TourSeriesTypeTourInstructions) GetEventChangeNotesOk() (*bool, bool)`

GetEventChangeNotesOk returns a tuple with the EventChangeNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventChangeNotes

`func (o *TourSeriesTypeTourInstructions) SetEventChangeNotes(v bool)`

SetEventChangeNotes sets EventChangeNotes field to given value.

### HasEventChangeNotes

`func (o *TourSeriesTypeTourInstructions) HasEventChangeNotes() bool`

HasEventChangeNotes returns a boolean if a field has been set.

### GetCopyEventAttendees

`func (o *TourSeriesTypeTourInstructions) GetCopyEventAttendees() bool`

GetCopyEventAttendees returns the CopyEventAttendees field if non-nil, zero value otherwise.

### GetCopyEventAttendeesOk

`func (o *TourSeriesTypeTourInstructions) GetCopyEventAttendeesOk() (*bool, bool)`

GetCopyEventAttendeesOk returns a tuple with the CopyEventAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyEventAttendees

`func (o *TourSeriesTypeTourInstructions) SetCopyEventAttendees(v bool)`

SetCopyEventAttendees sets CopyEventAttendees field to given value.

### HasCopyEventAttendees

`func (o *TourSeriesTypeTourInstructions) HasCopyEventAttendees() bool`

HasCopyEventAttendees returns a boolean if a field has been set.

### GetAttendees

`func (o *TourSeriesTypeTourInstructions) GetAttendees() int32`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *TourSeriesTypeTourInstructions) GetAttendeesOk() (*int32, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *TourSeriesTypeTourInstructions) SetAttendees(v int32)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *TourSeriesTypeTourInstructions) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetCopyResourcePrice

`func (o *TourSeriesTypeTourInstructions) GetCopyResourcePrice() bool`

GetCopyResourcePrice returns the CopyResourcePrice field if non-nil, zero value otherwise.

### GetCopyResourcePriceOk

`func (o *TourSeriesTypeTourInstructions) GetCopyResourcePriceOk() (*bool, bool)`

GetCopyResourcePriceOk returns a tuple with the CopyResourcePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyResourcePrice

`func (o *TourSeriesTypeTourInstructions) SetCopyResourcePrice(v bool)`

SetCopyResourcePrice sets CopyResourcePrice field to given value.

### HasCopyResourcePrice

`func (o *TourSeriesTypeTourInstructions) HasCopyResourcePrice() bool`

HasCopyResourcePrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


