# CateringType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplyBoardInfoToAllEvents** | Pointer to **bool** | Indicates whether BoardInfo changes can be applied to all events of the block. | [optional] 
**ApplyEventAttendeesChangesToEvents** | Pointer to [**ApplyEventAttendeesChangesToEventsType**](ApplyEventAttendeesChangesToEventsType.md) |  | [optional] 
**ApplyEventsGuaranteeToAllEvents** | Pointer to **bool** | Indicates whether Guarantee changes can be applied to all events of the block. | [optional] 
**BoardInfo** | Pointer to **string** | The name by which the group wishes to be identified in the hotel. | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**CateringInternalStatus** | Pointer to **string** | Internal status for the catering. | [optional] 
**CateringNextStatusList** | Pointer to [**CateringNextStatusListType**](CateringNextStatusListType.md) |  | [optional] 
**CateringOwner** | Pointer to **string** | Catering Owner of the block. | [optional] 
**CateringRevenue** | Pointer to [**CateringRevenueType**](CateringRevenueType.md) |  | [optional] 
**CateringStatus** | Pointer to [**BookingStatusDetailType**](BookingStatusDetailType.md) |  | [optional] 
**CateringStatusChangeHistory** | Pointer to [**CateringStatusChangeHistoryType**](CateringStatusChangeHistoryType.md) |  | [optional] 
**ContractNumber** | Pointer to **string** | Catering contract number for the block. | [optional] 
**DecisionDate** | Pointer to **string** | Date by which event group must make a decision on the booking. | [optional] 
**EventAttendees** | Pointer to [**EventAttendeesType**](EventAttendeesType.md) |  | [optional] 
**EventOrder** | Pointer to [**EventOrderType**](EventOrderType.md) |  | [optional] 
**FollowUpDate** | Pointer to **string** | Date used by catering manager or coordinator to follow up on the event. | [optional] 
**FunctionInfo** | Pointer to **string** | This provides more detail the type of function for which the event is held. For example, Trade Show, Meeting, or Annual Convention. | [optional] 
**HasPackageEvents** | Pointer to **bool** | Indicates if the block has any package events. | [optional] 
**OnSiteName** | Pointer to **string** | The name of the customer&#39;s in-house representative or contact on the day of the catering event. | [optional] 
**OverrideEventsProcessingWarnings** | Pointer to **bool** | Indicates whether to ignore any warning during applying the changes to the events associated with the current block. | [optional] 
**PkgsTmplt** | Pointer to **bool** | Indicates whether event packages or templates can be applied to the block. | [optional] 
**ResourceDiscountPercentage** | Pointer to **float32** | Indicates the resource discount percentage to be applied to resource items associated with the catering event. | [optional] 
**ResourceDiscountType** | Pointer to [**ResourceDiscountTypeType**](ResourceDiscountTypeType.md) |  | [optional] 
**TrackChanges** | Pointer to **bool** | Indicates whether the catering change logging for the booking is active or not. Any change made to catering events and resources will be logged when this is true. | [optional] 

## Methods

### NewCateringType

`func NewCateringType() *CateringType`

NewCateringType instantiates a new CateringType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringTypeWithDefaults

`func NewCateringTypeWithDefaults() *CateringType`

NewCateringTypeWithDefaults instantiates a new CateringType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplyBoardInfoToAllEvents

`func (o *CateringType) GetApplyBoardInfoToAllEvents() bool`

GetApplyBoardInfoToAllEvents returns the ApplyBoardInfoToAllEvents field if non-nil, zero value otherwise.

### GetApplyBoardInfoToAllEventsOk

`func (o *CateringType) GetApplyBoardInfoToAllEventsOk() (*bool, bool)`

GetApplyBoardInfoToAllEventsOk returns a tuple with the ApplyBoardInfoToAllEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyBoardInfoToAllEvents

`func (o *CateringType) SetApplyBoardInfoToAllEvents(v bool)`

SetApplyBoardInfoToAllEvents sets ApplyBoardInfoToAllEvents field to given value.

### HasApplyBoardInfoToAllEvents

`func (o *CateringType) HasApplyBoardInfoToAllEvents() bool`

HasApplyBoardInfoToAllEvents returns a boolean if a field has been set.

### GetApplyEventAttendeesChangesToEvents

`func (o *CateringType) GetApplyEventAttendeesChangesToEvents() ApplyEventAttendeesChangesToEventsType`

GetApplyEventAttendeesChangesToEvents returns the ApplyEventAttendeesChangesToEvents field if non-nil, zero value otherwise.

### GetApplyEventAttendeesChangesToEventsOk

`func (o *CateringType) GetApplyEventAttendeesChangesToEventsOk() (*ApplyEventAttendeesChangesToEventsType, bool)`

GetApplyEventAttendeesChangesToEventsOk returns a tuple with the ApplyEventAttendeesChangesToEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyEventAttendeesChangesToEvents

`func (o *CateringType) SetApplyEventAttendeesChangesToEvents(v ApplyEventAttendeesChangesToEventsType)`

SetApplyEventAttendeesChangesToEvents sets ApplyEventAttendeesChangesToEvents field to given value.

### HasApplyEventAttendeesChangesToEvents

`func (o *CateringType) HasApplyEventAttendeesChangesToEvents() bool`

HasApplyEventAttendeesChangesToEvents returns a boolean if a field has been set.

### GetApplyEventsGuaranteeToAllEvents

`func (o *CateringType) GetApplyEventsGuaranteeToAllEvents() bool`

GetApplyEventsGuaranteeToAllEvents returns the ApplyEventsGuaranteeToAllEvents field if non-nil, zero value otherwise.

### GetApplyEventsGuaranteeToAllEventsOk

`func (o *CateringType) GetApplyEventsGuaranteeToAllEventsOk() (*bool, bool)`

GetApplyEventsGuaranteeToAllEventsOk returns a tuple with the ApplyEventsGuaranteeToAllEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyEventsGuaranteeToAllEvents

`func (o *CateringType) SetApplyEventsGuaranteeToAllEvents(v bool)`

SetApplyEventsGuaranteeToAllEvents sets ApplyEventsGuaranteeToAllEvents field to given value.

### HasApplyEventsGuaranteeToAllEvents

`func (o *CateringType) HasApplyEventsGuaranteeToAllEvents() bool`

HasApplyEventsGuaranteeToAllEvents returns a boolean if a field has been set.

### GetBoardInfo

`func (o *CateringType) GetBoardInfo() string`

GetBoardInfo returns the BoardInfo field if non-nil, zero value otherwise.

### GetBoardInfoOk

`func (o *CateringType) GetBoardInfoOk() (*string, bool)`

GetBoardInfoOk returns a tuple with the BoardInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBoardInfo

`func (o *CateringType) SetBoardInfo(v string)`

SetBoardInfo sets BoardInfo field to given value.

### HasBoardInfo

`func (o *CateringType) HasBoardInfo() bool`

HasBoardInfo returns a boolean if a field has been set.

### GetCancellationDetails

`func (o *CateringType) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *CateringType) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *CateringType) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *CateringType) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

### GetCateringInternalStatus

`func (o *CateringType) GetCateringInternalStatus() string`

GetCateringInternalStatus returns the CateringInternalStatus field if non-nil, zero value otherwise.

### GetCateringInternalStatusOk

`func (o *CateringType) GetCateringInternalStatusOk() (*string, bool)`

GetCateringInternalStatusOk returns a tuple with the CateringInternalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringInternalStatus

`func (o *CateringType) SetCateringInternalStatus(v string)`

SetCateringInternalStatus sets CateringInternalStatus field to given value.

### HasCateringInternalStatus

`func (o *CateringType) HasCateringInternalStatus() bool`

HasCateringInternalStatus returns a boolean if a field has been set.

### GetCateringNextStatusList

`func (o *CateringType) GetCateringNextStatusList() CateringNextStatusListType`

GetCateringNextStatusList returns the CateringNextStatusList field if non-nil, zero value otherwise.

### GetCateringNextStatusListOk

`func (o *CateringType) GetCateringNextStatusListOk() (*CateringNextStatusListType, bool)`

GetCateringNextStatusListOk returns a tuple with the CateringNextStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringNextStatusList

`func (o *CateringType) SetCateringNextStatusList(v CateringNextStatusListType)`

SetCateringNextStatusList sets CateringNextStatusList field to given value.

### HasCateringNextStatusList

`func (o *CateringType) HasCateringNextStatusList() bool`

HasCateringNextStatusList returns a boolean if a field has been set.

### GetCateringOwner

`func (o *CateringType) GetCateringOwner() string`

GetCateringOwner returns the CateringOwner field if non-nil, zero value otherwise.

### GetCateringOwnerOk

`func (o *CateringType) GetCateringOwnerOk() (*string, bool)`

GetCateringOwnerOk returns a tuple with the CateringOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOwner

`func (o *CateringType) SetCateringOwner(v string)`

SetCateringOwner sets CateringOwner field to given value.

### HasCateringOwner

`func (o *CateringType) HasCateringOwner() bool`

HasCateringOwner returns a boolean if a field has been set.

### GetCateringRevenue

`func (o *CateringType) GetCateringRevenue() CateringRevenueType`

GetCateringRevenue returns the CateringRevenue field if non-nil, zero value otherwise.

### GetCateringRevenueOk

`func (o *CateringType) GetCateringRevenueOk() (*CateringRevenueType, bool)`

GetCateringRevenueOk returns a tuple with the CateringRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringRevenue

`func (o *CateringType) SetCateringRevenue(v CateringRevenueType)`

SetCateringRevenue sets CateringRevenue field to given value.

### HasCateringRevenue

`func (o *CateringType) HasCateringRevenue() bool`

HasCateringRevenue returns a boolean if a field has been set.

### GetCateringStatus

`func (o *CateringType) GetCateringStatus() BookingStatusDetailType`

GetCateringStatus returns the CateringStatus field if non-nil, zero value otherwise.

### GetCateringStatusOk

`func (o *CateringType) GetCateringStatusOk() (*BookingStatusDetailType, bool)`

GetCateringStatusOk returns a tuple with the CateringStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatus

`func (o *CateringType) SetCateringStatus(v BookingStatusDetailType)`

SetCateringStatus sets CateringStatus field to given value.

### HasCateringStatus

`func (o *CateringType) HasCateringStatus() bool`

HasCateringStatus returns a boolean if a field has been set.

### GetCateringStatusChangeHistory

`func (o *CateringType) GetCateringStatusChangeHistory() CateringStatusChangeHistoryType`

GetCateringStatusChangeHistory returns the CateringStatusChangeHistory field if non-nil, zero value otherwise.

### GetCateringStatusChangeHistoryOk

`func (o *CateringType) GetCateringStatusChangeHistoryOk() (*CateringStatusChangeHistoryType, bool)`

GetCateringStatusChangeHistoryOk returns a tuple with the CateringStatusChangeHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusChangeHistory

`func (o *CateringType) SetCateringStatusChangeHistory(v CateringStatusChangeHistoryType)`

SetCateringStatusChangeHistory sets CateringStatusChangeHistory field to given value.

### HasCateringStatusChangeHistory

`func (o *CateringType) HasCateringStatusChangeHistory() bool`

HasCateringStatusChangeHistory returns a boolean if a field has been set.

### GetContractNumber

`func (o *CateringType) GetContractNumber() string`

GetContractNumber returns the ContractNumber field if non-nil, zero value otherwise.

### GetContractNumberOk

`func (o *CateringType) GetContractNumberOk() (*string, bool)`

GetContractNumberOk returns a tuple with the ContractNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractNumber

`func (o *CateringType) SetContractNumber(v string)`

SetContractNumber sets ContractNumber field to given value.

### HasContractNumber

`func (o *CateringType) HasContractNumber() bool`

HasContractNumber returns a boolean if a field has been set.

### GetDecisionDate

`func (o *CateringType) GetDecisionDate() string`

GetDecisionDate returns the DecisionDate field if non-nil, zero value otherwise.

### GetDecisionDateOk

`func (o *CateringType) GetDecisionDateOk() (*string, bool)`

GetDecisionDateOk returns a tuple with the DecisionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionDate

`func (o *CateringType) SetDecisionDate(v string)`

SetDecisionDate sets DecisionDate field to given value.

### HasDecisionDate

`func (o *CateringType) HasDecisionDate() bool`

HasDecisionDate returns a boolean if a field has been set.

### GetEventAttendees

`func (o *CateringType) GetEventAttendees() EventAttendeesType`

GetEventAttendees returns the EventAttendees field if non-nil, zero value otherwise.

### GetEventAttendeesOk

`func (o *CateringType) GetEventAttendeesOk() (*EventAttendeesType, bool)`

GetEventAttendeesOk returns a tuple with the EventAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventAttendees

`func (o *CateringType) SetEventAttendees(v EventAttendeesType)`

SetEventAttendees sets EventAttendees field to given value.

### HasEventAttendees

`func (o *CateringType) HasEventAttendees() bool`

HasEventAttendees returns a boolean if a field has been set.

### GetEventOrder

`func (o *CateringType) GetEventOrder() EventOrderType`

GetEventOrder returns the EventOrder field if non-nil, zero value otherwise.

### GetEventOrderOk

`func (o *CateringType) GetEventOrderOk() (*EventOrderType, bool)`

GetEventOrderOk returns a tuple with the EventOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventOrder

`func (o *CateringType) SetEventOrder(v EventOrderType)`

SetEventOrder sets EventOrder field to given value.

### HasEventOrder

`func (o *CateringType) HasEventOrder() bool`

HasEventOrder returns a boolean if a field has been set.

### GetFollowUpDate

`func (o *CateringType) GetFollowUpDate() string`

GetFollowUpDate returns the FollowUpDate field if non-nil, zero value otherwise.

### GetFollowUpDateOk

`func (o *CateringType) GetFollowUpDateOk() (*string, bool)`

GetFollowUpDateOk returns a tuple with the FollowUpDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowUpDate

`func (o *CateringType) SetFollowUpDate(v string)`

SetFollowUpDate sets FollowUpDate field to given value.

### HasFollowUpDate

`func (o *CateringType) HasFollowUpDate() bool`

HasFollowUpDate returns a boolean if a field has been set.

### GetFunctionInfo

`func (o *CateringType) GetFunctionInfo() string`

GetFunctionInfo returns the FunctionInfo field if non-nil, zero value otherwise.

### GetFunctionInfoOk

`func (o *CateringType) GetFunctionInfoOk() (*string, bool)`

GetFunctionInfoOk returns a tuple with the FunctionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionInfo

`func (o *CateringType) SetFunctionInfo(v string)`

SetFunctionInfo sets FunctionInfo field to given value.

### HasFunctionInfo

`func (o *CateringType) HasFunctionInfo() bool`

HasFunctionInfo returns a boolean if a field has been set.

### GetHasPackageEvents

`func (o *CateringType) GetHasPackageEvents() bool`

GetHasPackageEvents returns the HasPackageEvents field if non-nil, zero value otherwise.

### GetHasPackageEventsOk

`func (o *CateringType) GetHasPackageEventsOk() (*bool, bool)`

GetHasPackageEventsOk returns a tuple with the HasPackageEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPackageEvents

`func (o *CateringType) SetHasPackageEvents(v bool)`

SetHasPackageEvents sets HasPackageEvents field to given value.

### HasHasPackageEvents

`func (o *CateringType) HasHasPackageEvents() bool`

HasHasPackageEvents returns a boolean if a field has been set.

### GetOnSiteName

`func (o *CateringType) GetOnSiteName() string`

GetOnSiteName returns the OnSiteName field if non-nil, zero value otherwise.

### GetOnSiteNameOk

`func (o *CateringType) GetOnSiteNameOk() (*string, bool)`

GetOnSiteNameOk returns a tuple with the OnSiteName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnSiteName

`func (o *CateringType) SetOnSiteName(v string)`

SetOnSiteName sets OnSiteName field to given value.

### HasOnSiteName

`func (o *CateringType) HasOnSiteName() bool`

HasOnSiteName returns a boolean if a field has been set.

### GetOverrideEventsProcessingWarnings

`func (o *CateringType) GetOverrideEventsProcessingWarnings() bool`

GetOverrideEventsProcessingWarnings returns the OverrideEventsProcessingWarnings field if non-nil, zero value otherwise.

### GetOverrideEventsProcessingWarningsOk

`func (o *CateringType) GetOverrideEventsProcessingWarningsOk() (*bool, bool)`

GetOverrideEventsProcessingWarningsOk returns a tuple with the OverrideEventsProcessingWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideEventsProcessingWarnings

`func (o *CateringType) SetOverrideEventsProcessingWarnings(v bool)`

SetOverrideEventsProcessingWarnings sets OverrideEventsProcessingWarnings field to given value.

### HasOverrideEventsProcessingWarnings

`func (o *CateringType) HasOverrideEventsProcessingWarnings() bool`

HasOverrideEventsProcessingWarnings returns a boolean if a field has been set.

### GetPkgsTmplt

`func (o *CateringType) GetPkgsTmplt() bool`

GetPkgsTmplt returns the PkgsTmplt field if non-nil, zero value otherwise.

### GetPkgsTmpltOk

`func (o *CateringType) GetPkgsTmpltOk() (*bool, bool)`

GetPkgsTmpltOk returns a tuple with the PkgsTmplt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPkgsTmplt

`func (o *CateringType) SetPkgsTmplt(v bool)`

SetPkgsTmplt sets PkgsTmplt field to given value.

### HasPkgsTmplt

`func (o *CateringType) HasPkgsTmplt() bool`

HasPkgsTmplt returns a boolean if a field has been set.

### GetResourceDiscountPercentage

`func (o *CateringType) GetResourceDiscountPercentage() float32`

GetResourceDiscountPercentage returns the ResourceDiscountPercentage field if non-nil, zero value otherwise.

### GetResourceDiscountPercentageOk

`func (o *CateringType) GetResourceDiscountPercentageOk() (*float32, bool)`

GetResourceDiscountPercentageOk returns a tuple with the ResourceDiscountPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceDiscountPercentage

`func (o *CateringType) SetResourceDiscountPercentage(v float32)`

SetResourceDiscountPercentage sets ResourceDiscountPercentage field to given value.

### HasResourceDiscountPercentage

`func (o *CateringType) HasResourceDiscountPercentage() bool`

HasResourceDiscountPercentage returns a boolean if a field has been set.

### GetResourceDiscountType

`func (o *CateringType) GetResourceDiscountType() ResourceDiscountTypeType`

GetResourceDiscountType returns the ResourceDiscountType field if non-nil, zero value otherwise.

### GetResourceDiscountTypeOk

`func (o *CateringType) GetResourceDiscountTypeOk() (*ResourceDiscountTypeType, bool)`

GetResourceDiscountTypeOk returns a tuple with the ResourceDiscountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceDiscountType

`func (o *CateringType) SetResourceDiscountType(v ResourceDiscountTypeType)`

SetResourceDiscountType sets ResourceDiscountType field to given value.

### HasResourceDiscountType

`func (o *CateringType) HasResourceDiscountType() bool`

HasResourceDiscountType returns a boolean if a field has been set.

### GetTrackChanges

`func (o *CateringType) GetTrackChanges() bool`

GetTrackChanges returns the TrackChanges field if non-nil, zero value otherwise.

### GetTrackChangesOk

`func (o *CateringType) GetTrackChangesOk() (*bool, bool)`

GetTrackChangesOk returns a tuple with the TrackChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackChanges

`func (o *CateringType) SetTrackChanges(v bool)`

SetTrackChanges sets TrackChanges field to given value.

### HasTrackChanges

`func (o *CateringType) HasTrackChanges() bool`

HasTrackChanges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


